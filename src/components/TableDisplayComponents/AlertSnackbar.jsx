import { Alert, Snackbar, LinearProgress } from '@mui/material';
import ReactDOM from 'react-dom';

const AlertSnackbar = ({ text, severity = 'info', progress = null, open, onClose }) => {
  return ReactDOM.createPortal(
    <Snackbar
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      ClickAwayListenerProps={{ onClickAway: () => null }}
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
