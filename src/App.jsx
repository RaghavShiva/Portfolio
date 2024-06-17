import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Experience from './components/experience'
import Skills from './components/skills'
import Projects from './components/projects'
import Contact from './components/contact'
import AOS from 'aos'
import "aos/dist/aos.css"
import Minor from './components/minor'
const App = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <>

    <Navbar />
    <div className="container">
    <Home />
    <Experience />
    <Skills />
    <Projects />
    <Minor />
    <Contact />
    </div>
    
    
    </>
  )
}

export default App