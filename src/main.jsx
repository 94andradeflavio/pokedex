import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import { ThemeProvider } from 'styled-components'
import Theme from './assets/css/themes/pokemon'
import GlobalStyle from './assets/css/globalStyles'
import PokemonProvider from './contexts/PokemonContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <PokemonProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
