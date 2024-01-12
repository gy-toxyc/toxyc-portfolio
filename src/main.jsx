import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

import './index.css'

const TITLE_ABOUT     = "ABOUT"
const TITLE_SKILLS    = "SKILLS"
const TITLE_PROJECTS  = "PROJECTS"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar about={TITLE_ABOUT} skills={TITLE_SKILLS} projects={TITLE_PROJECTS}/>
    <Intro />
    <About title={TITLE_ABOUT} />
    <Skills title={TITLE_SKILLS} />
    <Projects title={TITLE_PROJECTS} />
    <Footer />
  </React.StrictMode>,
)
