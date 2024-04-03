import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { HeroesApp } from './HeroesApp.tsx'
//import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />    
    </BrowserRouter>
  </React.StrictMode>,
)
