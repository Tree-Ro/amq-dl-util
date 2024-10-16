import { FormGroup, FormControlLabel, Checkbox, TextField, Divider, Grid2 as Grid } from '@mui/material';
import { useContext } from 'react';
import { ValuesContext } from '../../context/formContext';

const AdvancedSearch = () => {
  const { values, handleChange } = useContext(ValuesContext)

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

export default AdvancedSearch