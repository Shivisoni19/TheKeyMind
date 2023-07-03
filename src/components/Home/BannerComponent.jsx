import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import product1 from '../../images/products/product-1.png'
// import product2 from '../../images/products/product-2.png'
// import product3 from '../../images/products/product-3.png'
// import product4 from '../../images/products/product-4.png'
// import product5 from '../../images/products/product-5.png'
// import product6 from '../../images/products/product-6.png'
import bgSlider from '../../images/bg/slider_banner.jpg'

const BannerComponent = () => {

  return (
    
      <div class="slider heightski">
        <div class="fullwidthbanner-container">
          <div class="fullwidthbanner" id="intro">
            <ul>
              {/* <!-- First SLIDE --> */}
              <Carousel showArrows={true}
                emulateTouch={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}>
              <li>
                {/* <!-- THE MAIN IMAGE IN THE FIRST SLIDE --> */}
                <img
                  src={bgSlider}
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                {/* <!-- THE CAPTIONS IN THIS SLDIE --> */}
                <div>
                  OPERATING SYSTEMS
                </div>
                <div>
                  Windows 11, Win 10, Win 8, Win 7
                </div>

                <div>
                  <a href="#" class="slider-button bg-orange"
                    >Buy now from €19.99</a
                  >
                </div>
              </li>
              {/* <!-- second SLIDE --> */}
              <li>
                {/* <!-- THE MAIN IMAGE IN THE FIRST SLIDE --> */}
                <img
                  src={bgSlider}
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                {/* <!-- THE CAPTIONS IN THIS SLDIE --> */}
                <div>
                  MICROSOFT OFFICE
                </div>
                <div>
                  Microsoft Office Suite 2021, 2019, 2016, 2013, 2010
                </div>

                <div>
                  <a href="#" class="slider-button bg-orange"
                    >Buy now from €34.99</a
                  >
                </div>
              </li>

              {/* <!-- third SLIDE --> */}
              <li>
                {/* <!-- THE MAIN IMAGE IN THE FIRST SLIDE --> */}
                <img
                  src={bgSlider}
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                {/* <!-- THE CAPTIONS IN THIS SLDIE --> */}
                <div>
                  ANTIVIRUS
                </div>

                <div>
                  Kaspersy, ESET, Avast, Bitdefender, Norton, McAfee
                </div>

                <div>
                  <a href="#" class="slider-button bg-orange"
                    >Buy now from €34.99</a
                  >
                </div>
              </li>

              {/* <!-- Four SLIDE --> */}
              <li>
                {/* <!-- THE MAIN IMAGE IN THE FIRST SLIDE --> */}
                <img
                  src={bgSlider}
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                {/* <!-- THE CAPTIONS IN THIS SLDIE --> */}
                <div>
                  VPN
                </div>

                <div>
                  Avast, HMA
                </div>

                <div>
                  <a href="#" class="slider-button bg-orange"
                    >Buy now from €14.99</a
                  >
                </div>
              </li>

              {/* <!-- Five SLIDE --> */}
              <li>
                {/* <!-- THE MAIN IMAGE IN THE FIRST SLIDE --> */}
                <img
                  src={bgSlider}
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                {/* <!-- THE CAPTIONS IN THIS SLDIE --> */}
                <div>
                  MICROSOFT SERVER
                </div>

                <div>
                  Windows Server, Server CAL, Server RDS CAL, SQL Server
                </div>
                <div>
                  <a href="#" class="slider-button bg-orange"
                    >Buy now from €59.99</a
                  >
                </div>
              </li>

              {/* <!-- Six SLIDE --> */}
              <li>
                {/* <!-- THE MAIN IMAGE IN THE FIRST SLIDE --> */}
                <img
                  src={bgSlider}
                  data-fullwidthcentering="on"
                  alt="slide"
                />
                {/* <!-- THE CAPTIONS IN THIS SLDIE --> */}
                <div>
                  BACKUP & RECOVERY
                </div>

                <div>
                  AOMEI, EaseUS
                </div>

                <div>
                  <a href="#" class="slider-button bg-orange"
                    >Buy now from €10.99</a
                  >
                </div>
              </li>
              {/* <!-- End Slide  --> */}
              </Carousel>
            </ul>
            
          </div>
        </div>
      </div>
    
  );
};

export default BannerComponent;
