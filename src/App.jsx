import {  } from 'react'
import './App.css'
import { Home } from './components/Home'
import { ThemeProvider, createTheme } from '@material-ui/core'

function App() {

    const theme = createTheme({})

  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
        <Home/>
    </div>
    </ThemeProvider>
  )
}

export default App
