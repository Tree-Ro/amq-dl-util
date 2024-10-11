import { FormGroup, FormControlLabel, Checkbox, TextField, Divider, Grid2 as Grid } from '@mui/material';
import { useContext } from 'react';
import formContext from '../../context/formContext';

const AdvancedSearch = () => {
  const { values, handleChange } = useContext(formContext)

  return (
    <FormGroup row sx={{ p: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Divider />
      <Grid container spacing={0} columns={6}>
        <TextField label="Arrangement" variant="outlined" name='arrangement_filter' onChange={handleChange} value={values.arrangement_filter} fullWidth />
        <FormControlLabel control={<Checkbox size="small" name='arrangement_filter_partial' onChange={handleChange} checked={values.arrangement_filter_partial} />} label="Partial Match" />
      </Grid>
      <FormGroup row>
        <FormControlLabel control={<Checkbox size="small" name='ignore_duplicate' onChange={handleChange} checked={values.ignore_duplicate} />} label="Ignore Duplicates" />
      </FormGroup>
    </FormGroup>
  );
};

export default AdvancedSearch