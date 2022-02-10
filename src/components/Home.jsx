import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

function Home() {
  return (
  <Carousel>
    <Carousel.Item interval={1000}>
      <img
      className='d-block w-100'
      src='https://www.hepper.com/wp-content/uploads/2021/11/shutterstock_466649009.jpg'
      alt='Image One'
      width='12px'
      height='750px'/>
      <Carousel.Caption>
        <h3>Nova</h3>
        <p>The Mini Saint Bernard is not just a shrunken version of the original Saint Bernard parent. It is a mix of a Cocker Spaniel crossed with a Saint Bernard. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
      className='d-block w-100'
      src='https://www.oldtimefarmshepherd.org/wp-content/uploads/2010/05/gabby.jpg'
      alt='Second slide'
      height='750px'/>
      <Carousel.Caption>
        <h3>Blake</h3>
        <p>Our Scotch collie, Buckaroo, is just shy of 14 years old. </p>
      </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='d-block w-100'
        src='https://www.hepper.com/wp-content/uploads/2021/11/poodle-7.webp'
        alt='Third slide'
        height='750px'/>
      <Carousel.Caption>
        <h3>Jojo</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  );
}

export default Home