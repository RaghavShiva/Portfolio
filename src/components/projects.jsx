import React from 'react'
import Project from './data/projects.json'
const projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center">
          {Project.map((data) => (
            <>
              <div key={data.id} className='my-4 col-md-4 col-lg-3 col-sm-6 mx-3'>
                <div className="card bg-dark text-light"
                data-aos="flip-right"
                data-aos-duration = "1000">
                <div className="img p-3">
                  <img src={data.imageSrc} className="card-img-top" alt="..." /></div>
                <div className="card-body text-center">
                  <h3 className="card-title">{data.title}</h3>
                  <p className="card-text">{data.description}</p>
                  <a href={data.demo} target="_blank" className="btn btn-primary mx-3">
                    DEMO
                  </a>
                  <a href={data.source} target="_blank" className="btn btn-warning">
                    CODE
                  </a>
                </div>
              </div>
            </div >
          </>
        ))}
      </div>
    </div >
    </>
  )
}

export default projects