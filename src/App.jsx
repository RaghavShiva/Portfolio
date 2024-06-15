import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
const App = () => {
  return (
    <>

    <Navbar />
    <div className="container">
    <Home />
    <Experience />
    <Skills />
    <Projects />
    </div>
    
    
    </>
  )
}

export default App