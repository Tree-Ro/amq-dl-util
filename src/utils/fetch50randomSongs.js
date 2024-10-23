const fetch50RandomSongs = async () => {
  const url = 'https://anisongdb.com/api/get_50_random_songs';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const songs = await response.json();
    return songs;
  } catch (error) {
    console.error('Failed to fetch songs:', error);
    return [];
  }
}

export default fetch50RandomSongs;
