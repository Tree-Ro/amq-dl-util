import { Button, Tooltip, } from '@mui/material'
import { Download as DownloadIcon } from '@mui/icons-material'
import downloadSong from '../../utils/downloadUtil/downloadSong'

import PropTypes from 'prop-types'
import { useAlertSnackbar } from '../../hooks/useAlertSnackbar'

export const DownloadButton = ({ row }) => {
  const { AlertSnackbar, handleClick } = useAlertSnackbar({ text: `Downloading: ${row.songName || 'unknown'}`, severity: 'info', autoHideDuration: 2000 })

  const onClick = () => {
    handleClick()
    downloadSong(row)
  }

  const isAvailable = !row.audio
  return (
    <>
      <AlertSnackbar />
      <Tooltip arrow={true} title={isAvailable ? 'Unavailable' : 'Download'} placement='right'>
        <div>
          <Button size='small' disabled={isAvailable} onClick={onClick}>
            <DownloadIcon />
          </Button>
        </div>
      </Tooltip>
    </>
  )
}

DownloadButton.propTypes = {
  row: PropTypes.shape({
    audio: PropTypes.string,
    songName: PropTypes.string
  })
}