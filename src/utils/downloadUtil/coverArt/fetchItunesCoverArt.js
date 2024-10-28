import filterCoverArtByTags from './filterItunesByRelevance';

const fetchItunesCoverArt = async (tags) => {
  const { title } = tags
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&media=music&entity=song&genreIndex=ANIME-00&limit=200`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      console.log('Data:', data)
      const topMatch = await filterCoverArtByTags(tags, data)
      console.log('Top match:', topMatch)
        
      if (!topMatch) return null
      const smallCoverArtUrl = topMatch.artworkUrl100 || topMatch.artworkUrl60 || topMatch.artworkUrl30
      const largeCoverArtUrl = smallCoverArtUrl.replace(/\d{2,3}x\d{2,3}/gi, '316x316')
      
      const imageResponse = await fetch(largeCoverArtUrl)
      const imageBlob = await imageResponse.blob()

      return imageBlob
  } catch (error) {
      console.error(`Theres a problem fetching the cover art for ${title}: `, error);
  }
}; 

export default fetchItunesCoverArt