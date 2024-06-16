import React from 'react';
import Mini from './data/minor_projects.json';

const CarouselComponent = ({Mini}) => {
  return (
    <div id="carouselAuto" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
         {Mini.map((data, index) => (
          <div
            key={data.key}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          data-bs-interval="3000"
          >
            <img src={data.imageSrc} className="d-block w-100" alt={data.title} />
            <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
          </div>
         ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselAuto"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselAuto"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
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
