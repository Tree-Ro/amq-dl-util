import { ID3Writer } from 'browser-id3-writer';

const addID3Tags = (blob, tags) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const writer = new ID3Writer(new Uint8Array(arrayBuffer));

      writer.setFrame('TIT2', tags.title)
        .setFrame('TPE1', [tags.artist])
        .setFrame('TALB', tags.album)
        .setFrame('TCOM', [tags.composer])
        .addTag();

      const taggedArrayBuffer = writer.arrayBuffer;
      const taggedBlob = new Blob([taggedArrayBuffer], { type: 'audio/mpeg' });

      resolve(taggedBlob); 
    };

    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(blob);
  });
};

export default addID3Tags;
