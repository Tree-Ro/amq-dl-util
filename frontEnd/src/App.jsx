import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';


import { CssBaseline } from '@mui/material';
import Hub from './pages/Hub';
import AppAppBar from './components/AppAppBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar></AppAppBar>
      <Hub />
    </ThemeProvider>
  );
}

export default App;
