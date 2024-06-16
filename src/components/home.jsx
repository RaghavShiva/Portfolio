import React,{useEffect, useRef} from 'react'
import resume from '../Resume/resume.pdf'
import img from './data/img.json'
import Typed from 'typed.js'

const Home = () => {
  const typedref = useRef(null)
  useEffect(()=>{
    const options={
      strings:["Welcome to my profile","I am Shiva Raghav"
        ,"I am a web developer"
      ],
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
    <div className="container home">
    <div className="left" data-aos="fade-up-right"
   data-aos-duration = "1000">
      <h1 ref={typedref}>
       
      </h1>
      <a href={resume} download="resume_shiva.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
    </div>
    <div className="right">
      <div className="img" data-aos="fade-up-left"
   data-aos-duration = "1000">
        <img src={`/assets/${img.imgSrc}`} alt="profile_pic" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Home