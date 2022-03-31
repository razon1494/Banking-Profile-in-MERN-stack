import React, {useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import './Slider.css';
/* import slider1 from 'https://i.ibb.co/nDzymn2/slide1.png'
import slider2 from 'https://i.ibb.co/0ZMfrzj/slide2.png'
import slider3 from 'https://i.ibb.co/Q9jV0H0/slide3.png'
import slider4 from 'https://i.ibb.co/Nycc57b/slide4.png' */

//react-bootstrap carousel
const Slider=() => {

    return (
<div className='pb-5 mt-0 slider'>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/sHNqmCP/slider-2.png'
      alt="First slide"
    />
    <Carousel.Caption className='carousel1-text'>
      <h2 className='carousel1-title'>If it's the right chair,<span id='lab'> <br />  it doesn't take too long to get comfortable in it.</span></h2>
      {/* <p className='carousel1-p'>Our equipments are very high quality and latest so you will get the best result.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/7pqQR1X/slider1.png'
      alt="Second slide"
    />

    <Carousel.Caption className='carousel2-text'>
      <h2 className='carousel2-title'>The good chair is a task, <span id='discount'>one is never completely done with</span></h2>
      {/* <p className='carousel2-p'>Be our social member and you will get 20-40% discount on every test </p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/8xYvvhp/slider2.png'
      alt="Third slide"
    />
    <Carousel.Caption className='carousel3-text'>
      <h2 className='carousel3-title'>Our chairs do not compromise<span id='exam'> Quality </span></h2>
      {/* <p className='carousel3-p'>Our doctors directly involve with lab test so that we can assure you best output</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Slider;