import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';


import { CssBaseline } from '@mui/material';
import Hub from './pages/Hub';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hub />
    </ThemeProvider>
  );
}

export default App;
