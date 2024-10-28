import { ID3Writer } from 'browser-id3-writer';

const addID3Tags = (blob, tags, imageBlob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const writer = new ID3Writer(new Uint8Array(arrayBuffer));

      // Set text frames (title, artist, album, composer)
      writer.setFrame('TIT2', tags.title)
        .setFrame('TPE1', [tags.artist])
        .setFrame('TALB', tags.album)
        .setFrame('TCOM', [tags.composer]);

      // Add the image frame if provided
      if (imageBlob) {
        const imageArrayBuffer = await imageBlob.arrayBuffer();
        writer.setFrame('APIC', {
          type: 3,                    // Cover (front)
          data: new Uint8Array(imageArrayBuffer), // Convert to Uint8Array
          description: 'Cover Art',
          useUnicodeEncoding: false, 
        });
      }

      // Finalize the tag
      writer.addTag();

      // Retrieve the tagged file as a Blob
      const taggedArrayBuffer = writer.arrayBuffer;
      const taggedBlob = new Blob([taggedArrayBuffer], { type: 'audio/mpeg' });

      resolve(taggedBlob);
    };

    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(blob);
  });
};

export default addID3Tags;
