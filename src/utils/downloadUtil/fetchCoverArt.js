const fetchCoverArt = async (tags) => {
  const { title } = tags
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(title)}&entity=song&genreIndex=ANIME-00&limit=200`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      
  } catch (error) {
      console.error(`Theres a problem fetching the cover art for ${title}: `, error);
  }
}; 

export default fetchCoverArt