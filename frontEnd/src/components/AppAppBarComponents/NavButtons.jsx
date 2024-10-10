import { Box } from '@mui/material'
import { HomeButton, TempButton } from './buttons'

const NavButtons = () => {

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
        <HomeButton />
        <TempButton />
      </Box>
    </Box>
  )
}

export default NavButtons