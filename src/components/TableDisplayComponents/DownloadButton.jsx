import { Button, Tooltip, } from '@mui/material'
import { Download as DownloadIcon } from '@mui/icons-material'
import downloadSongs from '../../utils/downloadUtil/downloadSongs'

import PropTypes from 'prop-types'
import AlertSnackbar from './AlertSnackbar'
import useAlertSnackbar from '../../hooks/useAlertSnackbar'

export const DownloadButton = ({ row }) => {
  const { snackbar, openSnackbar, closeSnackbar, updateProgress } = useAlertSnackbar()

  const onClick = async () => {
    openSnackbar(`Downloading: ${row.songName}...`, 'info')
    const failedDownloads = await downloadSongs(row, updateProgress)

    !failedDownloads.length ?
      openSnackbar(`Download complete!`, 'success') :
      openSnackbar(`Failed to download: ${row.songName}`, 'warning')
  }

  const isAvailable = !row.audio
  return (
    <>
      <AlertSnackbar
        open={snackbar.open}
        onClose={closeSnackbar}
        text={snackbar.text}
        severity={snackbar.severity}
        progress={snackbar.progress}
      />
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