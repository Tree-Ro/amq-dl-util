import { Button } from '@mui/material'


import { GitHub as GitHubIcon } from '@mui/icons-material'

export const HomeButton = (props) => {
  return (
    <Button {...props}>Home</Button>
  )
}

export const TempButton = (props) => {
  return (
    <Button {...props}>Temp</Button>
  )
}

export const GitHubButton = (props) => {
  const handleRedirect = () => {
    window.open('https://github.com/Tree-Ro/amq-dl-util/', '_blank')
  }

  return (
    <Button {...props} onClick={handleRedirect}>
      <GitHubIcon />
    </Button>
  )
}

export const ExplanationButton = (props) => {
  return (
    <Button {...props}>
      How does this work?
    </Button>
  )
}