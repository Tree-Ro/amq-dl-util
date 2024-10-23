import { Box } from '@mui/material'
import { ExplanationButton, GitHubButton } from './buttons'

const InfoButtons = () => {

  const boxSX = {
    display: { xs: 'none', md: 'flex' },
    gap: 1,
    alignItems: 'center',
  }

  return (
    <Box sx={boxSX}>

      <ExplanationButton variant="outlined" size="small" />

      <GitHubButton variant="text" size="small" />

    </Box>
  )
}

export default InfoButtons