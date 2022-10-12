import { createTheme } from '@mui/material'

export const DefaultTheme = createTheme({
  palette: {
    primary: {
      main:'#58d0e3',
      dark:'#20aec5',
      light:'#b2eef7',
      contrastText:'#5b5755'
    },
    secondary:{
      main:'#ffe6db',
      dark:'#fdbea2',
      light:'#ffe1d4',
      contrastText:'#bda0a2'
    },
    background:{
      default:'#efb0a9',
      paper:'#ffffff'
    }
    
  }
});