import fetchMP3 from './fetchMP3';
import clearID3Tags from './clearID3Tags';
import addID3Tags from './addID3Tags';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const downloadSongs = async (rows, updateProgress) => {
  const isArray = Array.isArray(rows);
  const songs = isArray ? rows : [rows];
  const zip = songs.length > 1 ? new JSZip() : null;

  let index = 0;
  const failedDownloads = [];

  for (const row of songs) {
    const { audio: path, songName, songArtist, animeENName, animeJPName, songComposer } = row;
    const tags = { title: songName, artist: songArtist, album: animeENName, albumJP: animeJPName, composer: songComposer };

    try {
      const blob = await fetchMP3(path);
      const cleanBlob = await clearID3Tags(blob);
      const taggedBlob = await addID3Tags(cleanBlob, tags);

      if (zip) {
        zip.file(`${tags.album} - ${tags.title}.mp3`, taggedBlob);
      } else {
        saveAs(taggedBlob, `${tags.album} - ${tags.title}.mp3`);
      }
    } catch (e) {
      console.error('Error processing/fetching the song:', e);
      failedDownloads.push(row);
    } finally {
      if (updateProgress) {
        index++;
        const percentageDone = (index / songs.length) * 100;
        updateProgress(percentageDone);
      }
    }
  }

  if (zip) {
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'songs.zip');
    });
  }

  return failedDownloads;
};

export default downloadSongs;
