import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "#eee",
      custom: "#0A4DAA"
    },
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: "#FFFFFF"
    },
    tirtionary: {
      main: "#0A4DAA"
    },
    black: {
      main: '#000000'
    }
  },
  typography: {
    fontFamily: font,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#222222',
          border: 0,
          color: '#fff',
          height: 30,
          padding: '10px',
          boxShadow: '0 3px 5px 2px rgba(41, 41, 41, .3)',
          textTransform: 'none',
          '&:hover': {
            background: '#000000', // Change the background color to black on hover
          }
        }
      }
    }
  },
  root: {
    "& .MuiDataGrid-columnHeaders": {
      fontSize: 17.8,
    },
    "& .MuiDataGrid-row Mui-selected": {
      backgroundColor: "red"
    }
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0px',
      height: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      width: '0rem',
      backgroundColor: '#D5073C',
      borderRadius: "2rem",
    },
  },
});

export default theme;