import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ClientsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="carousel-clients"
      activeIndex={index}
      onSelect={handleSelect}
      interval={5000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../img/clemenger.gif')}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../img/ajf.jpg')}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../img/bigred.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      =
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../img/ddg.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../img/maynard.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./../../img/tro.jpg')}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ClientsCarousel;
