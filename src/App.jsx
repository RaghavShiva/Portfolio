import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Experience from './components/experience'
import Skills from './components/skills'
const App = () => {
  return (
    <>

    <Navbar />
    <div className="container">
    <Home />
    <Experience />
    <Skills />
    </div>
    
    
    </>
  )
}

export default App