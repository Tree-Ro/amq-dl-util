import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';

import { AppBar, Toolbar, Container } from '@mui/material';

import { InfoButtons, InfoButtonsDrawer, NavButtons, Logo } from './AppAppBarComponents';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.paper, 0.4),
  boxShadow: '4px 2px 2px black',
  padding: '16px 8px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="absolute"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 5 }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense">

          <Logo />

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