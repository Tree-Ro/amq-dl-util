import fetchMP3 from './fetchMP3';
import clearID3Tags from './clearID3Tags';
import addID3Tags from './addID3Tags';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const downloadSongs = async (rows, updateProgress) => {
  const songs = Array.isArray(rows) ? rows : [rows];
  const zip = songs.length > 1 ? new JSZip() : null;
  const failedDownloads = [];
  
  for (let index = 0; index < songs.length; index++) {
    const { 
      audio: path, 
      songName, 
      songArtist, 
      animeENName, 
      animeJPName, 
      songComposer 
    } = songs[index];
    const tags = { 
      title: songName, 
      artist: songArtist, 
      album: animeENName, 
      albumJP: animeJPName, 
      composer: songComposer 
    };

    try {
      const blob = await fetchMP3(path);
      if (blob && updateProgress) updateProgress(((index + 0.33) / songs.length) * 100)

      const cleanBlob = await clearID3Tags(blob);
      if (cleanBlob && updateProgress) updateProgress(((index + 0.66) / songs.length) * 100)

      const taggedBlob = await addID3Tags(cleanBlob, tags);
      if (taggedBlob && updateProgress) updateProgress(((index + 1) / songs.length) * 100)
      
      const fileName = `${tags.album} - ${tags.title}.mp3`;
      
      zip ? zip.file(fileName, taggedBlob) : saveAs(taggedBlob, fileName);
    } catch (e) {
      console.error('Error processing/fetching the song:', e);
      failedDownloads.push(songs[index]);
    }
  }

  if (zip) {
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, 'songs.zip');
  }

  return failedDownloads;
};

export default downloadSongs;
