import fetchMP3 from './fetchMP3'
import clearID3Tags from './clearID3Tags'
import addID3Tags from './addID3Tags'
import { saveAs } from 'file-saver'

const downloadSong = async (row) => {

  const path = row.audio

  const tags = {
    title: row.songName,
    artist: row.songArtist,
    album: row.animeENName,
    composer: row.songComposer,
  }

  try {
    const blob = await fetchMP3(path)
    const cleanBlob = await clearID3Tags(blob)
    const taggedBlob = await addID3Tags(cleanBlob, tags)

    saveAs(taggedBlob, `${tags.album} - ${tags.title}.mp3`)
    
  } catch(e) {
    console.error('Error processing/fetching the song: ', e)
  }

}

export default downloadSong