import { Grid2 as Grid, Box, Paper, Container } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: theme.palette.divider,
    backgroundColor: alpha(theme.palette.background.paper, 0),
    boxShadow: theme.shadows[1],
    padding: '8px 12px',
  }),
}));

const PageWrapper = ({ children }) => {
  return (
    <Container maxWidth={'true'}>
      <Box sx={{ flexGrow: 1, marginTop: 17 }}>
        <Grid container spacing={2} direction={{ md: 'row', xs: 'column-reverse' }}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Item>{children[0]}</Item>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ height: 'min-content', borderRadius: 5, backgroundColor: '#1a1a1a', right: { xs: 12 } }}>
            <Item>{children[1]}</Item>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired
}

export default PageWrapper