import React from 'react'
import { ThemeProvider } from '@mui/material'
import { DefaultTheme } from './themes/Default'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <App />
    </ThemeProvider>
      
  </React.StrictMode>
)
