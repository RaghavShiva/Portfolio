import React from 'react'
import resume from './Resume/resume.pdf'
import img from './data/img.json'
const home = () => {
  return (
    <>
    <div className="container home">
    <div className="left">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sequi.
      </h1>
      <a href={resume} download="resume_shiva.pdf" className="btn btn-outline-warning">Download Resume</a>
    </div>
    <div className="right">
      <div className="img">
        <img src={`/assets/${img.imgSrc}`} alt="profile_pic" />
      </div>
    </div>
    </div>
    </>
  )
}

export default home