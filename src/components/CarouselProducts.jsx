import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function CarouselProducts({ Products }) {
  console.log(Products);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {Products.map((element) => (
        <Carousel.Item key={element.id}>
          <img
            className='d-block'
            src={element.data().thumbnail}
            alt='First slide'
            style={{ width: '50%' }}
          />
          <Carousel.Caption>
            <h3>{element.data().name}</h3>
            <p>{element.data().price}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default CarouselProducts;
