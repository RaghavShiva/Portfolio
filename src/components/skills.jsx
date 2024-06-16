import React from 'react'
import Skills from './data/skills.json'
const skills = () => {
  return (
   <>
   <div className="container skills">
    <h1>SKILLS</h1>
    <div className="items">
    {Skills.map((data)=>(
      <>
        <div className="item" key={data.id}
        data-aos="flip-left"
        data-aos-duration = "1000">
          <img src={`/Assets/${data.imageSrc}`} alt="" />
          <h3>{data.title}</h3>
        </div>
      </>
    ))}
    </div>
   </div>
   </>
  )
}

export default skills