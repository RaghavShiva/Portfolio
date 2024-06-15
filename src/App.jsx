import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Experience from './components/experience'
const App = () => {
  return (
    <>

    <Navbar />
    <div className="container">
    <Home />
    <Experience />
    </div>
    
    
    </>
  )
}

export default App