import { FormGroup, FormControlLabel, Checkbox, TextField, Divider, Grid2 as Grid } from '@mui/material';

import PropTypes from 'prop-types'

const AdvancedSearch = ({ values, handleChange }) => {

  return (
    <FormGroup row sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Divider />
      <Grid container spacing={0} columns={6}>
        <TextField label="Composer..." variant="outlined" name='composer_filter' onChange={handleChange} value={values.composer_filter} fullWidth />
        <FormControlLabel control={<Checkbox size="small" name='composer_filter_partial' onChange={handleChange} checked={values.composer_filter_partial} />} label="Partial Match" />
      </Grid>
      <FormGroup row>
        <FormControlLabel control={<Checkbox size="small" name='ignore_duplicate' onChange={handleChange} checked={values.ignore_duplicate} />} label="Ignore Duplicates" />
      </FormGroup>
    </FormGroup>
  );
};

AdvancedSearch.propTypes = {
  values: PropTypes.shape({
    composer_filter: PropTypes.string,
    composer_filter_partial: PropTypes.bool,
    ignore_duplicate: PropTypes.bool
  }),
  handleChange: PropTypes.func.isRequired
}

export default AdvancedSearch