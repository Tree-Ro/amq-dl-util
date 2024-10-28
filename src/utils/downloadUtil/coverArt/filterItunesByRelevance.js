const filterItunesByRelevance = (tags, data) => {
  const { title, artist, album, albumJP } = tags;

  // Regex patterns
  const regexPartialTitle = new RegExp(`${title}`, 'i');
  const regexPartialArtist = new RegExp(`${artist}`, 'i');
  const regexPartialAlbum = new RegExp(`${album}|${albumJP}`, 'i');
  const regexExactTitle = new RegExp(`^${title}$`, 'i');
  const regexExactArtist = new RegExp(`^${artist}$`, 'i');
  const regexExactAlbum = new RegExp(`^${album}|${albumJP}$`, 'i');

  const iTunesResults = data.results;
  const filteredResults = iTunesResults.filter(entry =>
    entry.primaryGenreName.match(/anime/i)
  );

  let currentState = {
    regexTitle: regexPartialTitle,
    regexArtist: regexPartialArtist,
    regexAlbum: regexPartialAlbum,
  };
  let strictFlags = {
    strictTitle: false,
    strictArtist: false,
    strictAlbum: false,
  };

  let foundResults = [...filteredResults];

  // Maximum iterations
  let iterations = 0;
  const maxIterations = 300;

  while (iterations < maxIterations) {
    iterations++;

    console.log(`Size of list getting filtered: `, foundResults.length)
    
    const { regexTitle, regexArtist, regexAlbum } = currentState;

    const matchingTitleEntries = foundResults.filter(entry =>
      entry.trackName.match(regexTitle)
    );
    const matchingArtistEntries = foundResults.filter(entry =>
      entry.artistName.match(regexArtist)
    );
    const matchingAlbumEntries = foundResults.filter(entry =>
      entry.collectionName.match(regexAlbum)
    );

    console.log('Matching Titles:', matchingTitleEntries.map(entry => entry.trackName), regexTitle);
    console.log('Matching Artists:', matchingArtistEntries.map(entry => entry.artistName), regexArtist);
    console.log('Matching Albums:', matchingAlbumEntries.map(entry => entry.collectionName), regexAlbum);

    const titleSet = new Set(matchingTitleEntries);
    const artistSet = new Set(matchingArtistEntries);
    const albumSet = new Set(matchingAlbumEntries);

    const titleArtistIntersection = titleSet.intersection(artistSet);
    const titleAlbumIntersection = titleSet.intersection(albumSet);
    const artistAlbumIntersection = artistSet.intersection(albumSet);

    const finalIntersection = titleArtistIntersection
      .intersection(titleAlbumIntersection)
      .intersection(artistAlbumIntersection);

    //If we have a definitive match, return it
    if (finalIntersection.size === 1) {
      return [...finalIntersection][0];
    } else {
      const unionSet = new Set([
        ...titleArtistIntersection,
        ...titleAlbumIntersection,
        ...artistAlbumIntersection,
      ]);

      // Check if unionSet is empty
      if (unionSet.size === 0) {
        console.log('No definitive matches found, returning defaults.');
        return [...titleSet][0] || [...artistSet][0] || [...albumSet][0] || foundResults[0] || filteredResults[0];
      }

      // New iteration with union of this iterations intersections
      foundResults = finalIntersection.size > 0 ? [...finalIntersection] : [...unionSet]

      // Increase strictness
      if (!strictFlags.strictTitle) {
        currentState = {
          regexTitle: regexExactTitle,
          regexArtist: regexPartialArtist,
          regexAlbum: regexPartialAlbum,
        };
        strictFlags.strictTitle = true;
        console.log('Title: Partial match > Exact match')
      } else if (!strictFlags.strictArtist) {
        currentState = {
          regexTitle: regexExactTitle,
          regexArtist: regexExactArtist,
          regexAlbum: regexPartialAlbum,
        };
        strictFlags.strictArtist = true;
        console.log('Artist: Partial match > Exact match')
      } else if (!strictFlags.strictAlbum) {
        currentState = {
          regexTitle: regexExactTitle,
          regexArtist: regexExactArtist,
          regexAlbum: regexExactAlbum,
        };
        strictFlags.strictAlbum = true;
        console.log('Album: Partial match > Exact match')
      } else {
        console.log('All strict matches applied, returning first exact match or top result');
        return finalIntersection[0] || foundResults[0];
      }
    }
  }

  console.log('Reached max iterations, likely caused an infinite loop, returning null');
  return null;
};


export default filterItunesByRelevance