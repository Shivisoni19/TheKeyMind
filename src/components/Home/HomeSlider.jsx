import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from "react-router-dom";

const HomeSlider = () => {

  const slides = [
    {
      title: 'OPERATING SYSTEMS',
      description: 'Windows 11, Win 10, Win 8, Win 7',
      image: 'img/products/product-1.png',
      btnText: 'Buy now from $19.99',
    },
    {
      title: 'MICROSOFT OFFICE',
      description: 'Microsoft Office Suite 2021, 2019, 2016, 2013, 2010',
      image: 'img/products/product-2.png',
      btnText: 'Buy now from $19.99',
    },
    {
      title: 'ANTIVIRUS',
      description: 'Kaspersy, ESET, Avast, Bitdefender, Norton, McAfee',
      image: 'img/products/product-3.png',
      btnText: 'Buy now from $19.99',
    },
    {
      title: 'VPN',
      description: 'Avast, HMA',
      image: 'img/products/product-4.png',
      btnText: 'Buy now from $19.99',
    },
    {
      title: 'MICROSOFT SERVER',
      description: 'Windows Server, Server CAL, Server RDS CAL, SQL Server',
      image: 'img/products/product-5.png',
      btnText: 'Buy now from $19.99',
    },
    {
      title: 'BACKUP & RECOVERY',
      description: 'AOMEI, EaseUS',
      image: 'img/products/product-6.png',
      btnText: 'Buy now from $19.99',
    },
  ];

  return (
    <div className="slider-container">
      <div className='slide-bg'>
        <img
          className="background-image"
          src="img/bg/slider_banner.jpg"
          alt="Background"
        />
      </div>
      <div>
        <Carousel autoPlay infiniteLoop>
          {slides.map((slide, index) => (
            <div key={index} className="slide-container">
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className='slider-button'>
                  <Link to="/productdetails" class="slider-button bg-orange"
                    >{slide.btnText}</Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSlider;
