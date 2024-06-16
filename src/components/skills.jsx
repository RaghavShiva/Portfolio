import React from 'react'
import Skills from './data/skills.json'
const skills = () => {
  return (
   <>
   <div className="container skills" id="skills">
    <h1>SKILLS</h1>
    <div className="items">
    {Skills.map((data)=>(
      <>
        <div className="item" key={data.id}
        data-aos="flip-left"
        data-aos-duration = "1000">
          <img src={`/Assets/${data.imageSrc}`} alt="" />
          <h2>{data.title}</h2>
        </div>
      </>
    ))}
    </div>
   </div>
   </>
  )
}

export default skills