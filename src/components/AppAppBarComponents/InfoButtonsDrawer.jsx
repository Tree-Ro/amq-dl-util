import { IconButton, Box, Drawer, MenuItem, Divider } from '@mui/material'

import { ExplanationButton, GitHubButton, HomeButton, TempButton } from './buttons'

import {
  Menu as MenuIcon,
  CloseRounded as CloseRoundedIcon,
} from '@mui/icons-material';

import PropTypes from 'prop-types'

const InfoButtonsDrawer = ({ open, toggleDrawer }) => {

  return (
    <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
      <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 3 }} />

          <MenuItem> <HomeButton variant='outlined' fullWidth /> </MenuItem>
          <MenuItem> <TempButton variant='outlined' fullWidth /> </MenuItem>
          <MenuItem> <ExplanationButton variant="outlined" fullWidth /> </MenuItem>
          <MenuItem> <GitHubButton variant="contained" fullWidth /> </MenuItem>

        </Box>
      </Drawer >
    </Box >
  )
}

export default InfoButtonsDrawer

InfoButtonsDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}