import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { About } from './components/About'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Intro />
    <About />
  </React.StrictMode>,
)
