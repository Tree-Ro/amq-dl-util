import { Alert, Snackbar, LinearProgress } from '@mui/material';
import ReactDOM from 'react-dom';

const AlertSnackbar = ({ text, severity = 'info', autoHideDuration = 6000, progress = null, open, onClose }) => {
  return ReactDOM.createPortal(
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {text}
        {progress !== null && <LinearProgress variant="determinate" value={progress} />}
      </Alert>
    </Snackbar>,
    document.body
  );
};

export default AlertSnackbar;
