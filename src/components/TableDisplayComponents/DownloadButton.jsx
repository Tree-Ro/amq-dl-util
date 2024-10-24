import { Button, Tooltip, } from '@mui/material'
import { Download as DownloadIcon } from '@mui/icons-material'
import downloadSong from '../../utils/downloadUtil/downloadSong'

import PropTypes from 'prop-types'
import AlertSnackbar from './AlertSnackbar'
import useAlertSnackbar from '../../hooks/useAlertSnackbar'

export const DownloadButton = ({ row }) => {
  const { snackbar, openSnackbar, closeSnackbar } = useAlertSnackbar()

  const onClick = async () => {
    openSnackbar(`Downloading: ${row.songName}...`, 'info')
    const isSuccess = await downloadSong(row)

    isSuccess ?
      openSnackbar(`Success!`, 'success') :
      openSnackbar(`Something went wrong`, 'warning')
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