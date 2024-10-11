import { Button, Tooltip } from '@mui/material'
import NavModal from './NavModal'


import {
  GitHub as GitHubIcon,
} from '@mui/icons-material'
import { useState } from 'react'

export const HomeButton = (props) => {
  return (
    <Button {...props}>Home</Button>
  )
}

export const TempButton = (props) => {
  return (
    <Button {...props}>Temporary</Button>
  )
}

export const GitHubButton = (props) => {
  const url = 'https://github.com/Tree-Ro/amq-dl-util/'

  const handleRedirect = () => {
    window.open(url, '_blank')
  }

  return (
    <Tooltip title={url} placement='bottom' arrow enterDelay={0}>
      <Button {...props} onClick={handleRedirect} aria-label={`Open ${url} in a new tab`}>
        <GitHubIcon fontSize='large' />
      </Button>
    </Tooltip>
  )
}

export const ExplanationButton = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <Button {...props} onClick={toggleIsOpen} size='medium'>
        What is this?
      </Button>
      <NavModal isOpen={isOpen} setIsOpen={setIsOpen}></NavModal>
    </>
  )
}