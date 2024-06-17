import React from 'react';
import Mini from './data/minor_projects.json';

const CarouselComponent = ({Mini}) => {
  return (
    <>
    <div className='container carousel'>
      <h2>SOME MINOR PROJECTS</h2>
    
    <div id="carouselAuto" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
         {Mini.map((data, index) => (
          <div
            key={data.key}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            data-bs-interval="1500"
          >
            <a href={data.demo} target="_blank">
            <img src={`/Assets/${data.imageSrc}`} alt={data.title} /></a>
      <a href={data.source} target="_blank">
      <h5 className='my-2'>{data.title}</h5></a>
      <p>{data.description}</p>
          </div>
         ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselAuto"
        data-bs-slide="prev"
      >
        <div className="carousel-control-prev-icon"></div>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselAuto"
        data-bs-slide="next"
      >
        <div className="carousel-control-next-icon"></div>
      </button>
    </div>
    </div>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <CarouselComponent Mini={Mini} />
    </div>
  );
};

export default App;
