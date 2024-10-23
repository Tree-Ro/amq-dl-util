import { FormGroup, FormControlLabel, Checkbox, TextField, Grid2 as Grid } from '@mui/material';

import PropTypes from 'prop-types'

const MainSearch = ({ values, handleChange }) => {

  return (
    <FormGroup row sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <FormGroup row sx={{ gap: 1 }}>
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              name="opening_filter"
              checked={values.opening_filter}
              onChange={handleChange}
            />}
          label="Openings"
        />
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              name="ending_filter"
              checked={values.ending_filter}
              onChange={handleChange}
            />}
          label="Endings"
        />
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              name="insert_filter"
              checked={values.insert_filter}
              onChange={handleChange}
            />}
          label="Inserts"
        />
      </FormGroup>
      <Grid container spacing={3}>
        <Grid container spacing={0} sx={{ width: '100%' }}>
          <TextField
            label="Anime Name..."
            name="anime_filter"
            variant="outlined"
            value={values.anime_filter ?? ''}
            onChange={handleChange}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                name="anime_filter_partial"
                checked={values.anime_filter_partial}
                onChange={handleChange}
              />
            }
            label="Partial Match"
          />
        </Grid>

        <Grid container spacing={0} sx={{ width: '100%' }}>
          <TextField
            label="Song Name..."
            name="song_filter"
            variant="outlined"
            value={values.song_filter ?? ''}
            onChange={handleChange}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                name="song_filter_partial"
                checked={values.song_filter_partial}
                onChange={handleChange}
              />
            }
            label="Partial Match"
          />
        </Grid>

        <Grid container spacing={0} sx={{ width: '100%' }}>
          <TextField
            label="Artist Name..."
            name="artist_filter"
            variant="outlined"
            value={values.artist_filter ?? ''}
            onChange={handleChange}
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                name="artist_filter_partial"
                checked={values.artist_filter_partial}
                onChange={handleChange}
              />
            }
            label="Partial Match"
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

MainSearch.propTypes = {
  values: PropTypes.shape({
    opening_filter: PropTypes.bool,
    ending_filter: PropTypes.bool,
    insert_filter: PropTypes.bool,

    anime_filter: PropTypes.string,
    anime_filter_partial: PropTypes.bool,

    song_filter: PropTypes.string,
    song_filter_partial: PropTypes.bool,

    artist_filter: PropTypes.string,
    artist_filter_partial: PropTypes.bool,
  }),
  handleChange: PropTypes.func.isRequired
}

export default MainSearch;
