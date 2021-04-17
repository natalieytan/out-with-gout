import { createMuiTheme } from '@material-ui/core/styles';

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#eceff1',
      main: '#cfd8dc',
      dark: '#9ea7aa',
      contrastText: '#000000'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

export default materialTheme;
