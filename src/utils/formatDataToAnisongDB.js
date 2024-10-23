export default function formatData(input) {
  const result = {
    and_logic: true,
    ignore_duplicate: input.ignore_duplicate,
    opening_filter: input.opening_filter,
    ending_filter: input.ending_filter,
    insert_filter: input.insert_filter,
    normal_broadcast: true,
    dub: true,
    rebroadcast: true,
    standard: true,
    instrumental: true,
    chanting: true,
    character: true
  };

  if (input.anime_filter) {
    result.anime_search_filter = {
      search: input.anime_filter,
      partial_match: input.anime_filter_partial
    };
  }

  if (input.song_filter) {
    result.song_name_search_filter = {
      search: input.song_filter,
      partial_match: input.song_filter_partial
    };
  }

  if (input.artist_filter) {
    result.artist_search_filter = {
      search: input.artist_filter,
      partial_match: input.artist_filter_partial,
      group_granularity: 0,
      max_other_artist: 99
    };
  }

  if (input.composer_filter) {
    result.composer_search_filter = {
      search: input.composer_filter,
      partial_match: input.composer_filter_partial,
      arrangement: true
    };
  }

  return result;
}
