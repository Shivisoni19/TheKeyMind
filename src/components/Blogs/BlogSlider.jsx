import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blog.css'


const BlogSlider = () => {
    const sliderSettings = {
      dots: true,
      arrow:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };
  
    return (
      <div>
        <Slider {...sliderSettings}>
          <div className="blog-post mb50">
            <div className="blog-item">
              <div className="blog-img">
                <img alt="" src="img/blog/latest-guide-1.jpg" />
              </div>
              <div className="calendar">
                <p>02</p>
                <span>dec</span>
              </div>
              <div className="blog-content">
                <h1>This is Gallery post with image</h1>
                <div className="post-meta">
                  <Link href="#">
                    <i className="fa fa-user"></i> Joeby Ragpa
                  </Link>
                  <Link href="#">
                    <i className="fa fa-bookmark"></i> Design
                  </Link>
                  <Link href="#">
                    <i className="fa fa-comment"></i> 15 Comments
                  </Link>
                </div>
                <p>
                  We possess within us two minds. So far I have written only of the conscious mind. I would now like to
                  introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind
                  contains such power and complexity that it literally staggers the imagination.
                </p>
                <Link href="#" className="small-button button-red mb10">
                  Read More
                </Link>
              </div>
            </div>
          </div>
  
          <div className="blog-post mb50">
            <div className="blog-item">
              <div className="blog-img">
                <img alt="" src="img/blog/latest-guide-2.jpg" />
              </div>
              <div className="calendar">
                <p>02</p>
                <span>dec</span>
              </div>
              <div className="blog-content">
                <h1>This is Gallery post with image</h1>
                <div className="post-meta">
                  <Link href="#">
                    <i className="fa fa-user"></i> Joeby Ragpa
                  </Link>
                  <Link href="#">
                    <i className="fa fa-bookmark"></i> Design
                  </Link>
                  <Link href="#">
                    <i className="fa fa-comment"></i> 15 Comments
                  </Link>
                </div>
                <p>
                  We possess within us two minds. So far I have written only of the conscious mind. I would now like to
                  introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind
                  contains such power and complexity that it literally staggers the imagination.
                </p>
                <Link href="#" className="small-button button-red mb10">
                  Read More
                </Link>
              </div>
            </div>
          </div>
  
          <div className="blog-post mb50">
            <div className="blog-item">
              <div className="blog-img">
                <img alt="" src="img/blog/latest-guide-3.jpg" />
              </div>
              <div className="calendar">
                <p>02</p>
                <span>dec</span>
              </div>
              <div className="blog-content">
                <h1>This is Gallery post with image</h1>
                <div className="post-meta">
                  <Link href="#">
                    <i className="fa fa-user"></i> Joeby Ragpa
                  </Link>
                  <Link href="#">
                    <i className="fa fa-bookmark"></i> Design
                  </Link>
                  <Link href="#">
                    <i className="fa fa-comment"></i> 15 Comments
                  </Link>
                </div>
                <p>
                  We possess within us two minds. So far I have written only of the conscious mind. I would now like to
                  introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind
                  contains such power and complexity that it literally staggers the imagination.
                </p>
                <Link href="#" className="small-button button-red mb10">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  };
  
  export default BlogSlider;
  