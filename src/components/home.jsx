import React,{useEffect, useRef} from 'react'
import resume from '../Resume/Shiva_CV.pdf'
import img from './data/img.json'
import Typed from 'typed.js'

const Home = () => {
  const typedref = useRef(null)
  useEffect(()=>{
    const options={
      strings:["Welcome to my Profile","I am Shiva"
        ,"An enthusiastic Web Developer","A Competitive Programmer"],
        showCursor:false,
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }
    const typed = new Typed(typedref.current,options)
    return()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
    <div className="container home" id="home">
    <div className="left" data-aos="fade-up-right"
   data-aos-duration = "1000">
      <h1 ref={typedref}>
       
      </h1>
      <a href={resume} download="resume_shiva.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
    </div>
    <div className="right">
      <div className="img" data-aos="fade-up-left"
   data-aos-duration = "1000">
        <img src={`/Assets/${img.imgSrc}`} alt="profile_pic" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home
