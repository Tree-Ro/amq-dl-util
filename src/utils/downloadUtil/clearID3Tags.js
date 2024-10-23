// Function to remove ID3v1 and ID3v2 tags from an MP3 blob
async function clearID3Tags(mp3Blob) {
  // Read the blob data as an ArrayBuffer
  const arrayBuffer = await mp3Blob.arrayBuffer();
  const view = new DataView(arrayBuffer);

  let start = 0;
  let end = arrayBuffer.byteLength;

  if (view.getUint8(0) === 0x49 && view.getUint8(1) === 0x44 && view.getUint8(2) === 0x33) {
      // ID3v2 tag detected, the size is located at bytes 6-9
      const tagSize = ((view.getUint8(6) & 0x7F) << 21) |
                      ((view.getUint8(7) & 0x7F) << 14) |
                      ((view.getUint8(8) & 0x7F) << 7) |
                      (view.getUint8(9) & 0x7F);
      start = 10 + tagSize; // Skip the ID3v2 header and tags

      // Ensure the start does not exceed the end
      if (start > end) {
          start = end;
      }
  }

  // Check for ID3v1 tags at the end of the file
  if (end >= 128 && view.getUint8(end - 128) === 0x54 && view.getUint8(end - 127) === 0x41 && view.getUint8(end - 126) === 0x47) {
      // ID3v1 tag detected at the end of the file
      end -= 128; // Remove the last 128 bytes
  }

  // Create a new Blob with the MP3 data without ID3 tags
  const cleanMp3Blob = new Blob([arrayBuffer.slice(start, end)], { type: 'audio/mpeg' });

  return cleanMp3Blob;
}

export default clearID3Tags
