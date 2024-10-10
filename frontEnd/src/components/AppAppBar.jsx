import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import { AppBar, Toolbar, Container } from '@mui/material';

import { InfoButtons, InfoButtonsDrawer, NavButtons } from './AppAppBarComponents';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 5 }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>

          <NavButtons />

          {/* Medium+ Screens Only */}
          <InfoButtons />

          {/* Small Screens Only */}
          <InfoButtonsDrawer open={open} toggleDrawer={toggleDrawer} />

        </StyledToolbar>
      </Container>
    </AppBar>
  );
}