import fetchMP3 from './fetchMP3';
import clearID3Tags from './clearID3Tags';
import addID3Tags from './addID3Tags';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const downloadManySongs = async (rows) => {
  const zip = new JSZip();

  for (const row of rows) {
    const path = row.audio;
    const tags = {
      title: row.songName,
      artist: row.songArtist,
      album: row.animeENName,
      composer: row.songComposer,
    };

    try {
      const blob = await fetchMP3(path);
      const cleanBlob = await clearID3Tags(blob);
      const taggedBlob = await addID3Tags(cleanBlob, tags);

      zip.file(`${tags.album} - ${tags.title}.mp3`, taggedBlob);
    } catch (e) {
      console.error('Error processing/fetching the song: ', e);
    }
  }

  // Generate the ZIP and trigger the download
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'songs.zip');
  });
};

export default downloadManySongs;
