import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css' ;
import product1 from "../../images/products/product-1.png"
import product2 from '../../images/products/product-2.png'
import product3 from '../../images/products/product-3.png'
import product4 from '../../images/products/product-4.png'

const ProductDetailLeft = () => {
  const [imgId, setImgId] = useState(1);

  const slideImage = () => {
    const displayWidth = document.querySelector('.img-showcase img:first-child')
      .clientWidth;

    document.querySelector(
      '.img-showcase'
    ).style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
  };

  useEffect(() => {
    const imgBtns = Array.from(document.querySelectorAll('.img-select a'));
    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        setImgId(parseInt(imgItem.getAttribute('data-id')));
      });
    });

    window.addEventListener('resize', slideImage);

    return () => {
      imgBtns.forEach((imgItem) => {
        imgItem.removeEventListener('click', () => {});
      });
      window.removeEventListener('resize', slideImage);
    };
  }, []);

  useEffect(() => {
    slideImage();
  }, [imgId]);

  return (
    <div className="card">
      {/* card left */}
      <div className="product-imgs">
        <div className="img-display">
          <div className="img-showcase">
            <img
              src={product1}
              alt="shoe image"
            />
            <img
              src={product2}
              alt="shoe image"
            />
            <img
              src={product3}
              alt="shoe image"
            />
            <img
              src={product4}
              alt="shoe image"
            />
          </div>
        </div>
        <div className="img-select">
          <div className="img-item">
            <Link to="/" data-id="1">
              <img
                src={product1}
                alt="shoe image"
              />
            </Link>
          </div>
          <div className="img-item">
            <Link to="/" data-id="2">
              <img
                src={product2}
                alt="shoe image"
              />
            </Link>
          </div>
          <div className="img-item">
            <Link to="/" data-id="3">
              <img
                src={product3}
                alt="shoe image"
              />
            </Link>
          </div>
          <div className="img-item">
            <Link to="/" data-id="4">
              <img
                src={product4}
                alt="shoe image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLeft;
