import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Importe o CSS

import Logo from '../assets/Carro.png'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
        <img src={Logo} alt="" />
        </div>
        <div>
         <img src={Logo} alt="" />
        </div>
        <div>
         <img src={Logo} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;