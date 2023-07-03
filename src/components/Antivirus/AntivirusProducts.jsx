import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const AntivirusProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API or data source
    // Replace this with your actual data fetching logic
    const fetchData = () => {
      const antivirusProducts = [
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "img/products/product-3.png",
        },
      ];

      setProducts(antivirusProducts);
    };

    fetchData();
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => (
      <div key={index} className="col-lg-3 col-md-6 col-sm-6">
        <div className="container-fadeInTop">
          <div className="office-content">
            <img src={product.product_img} alt={product.name} style={{width:"100%"}}/>
            <div class="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link>
              <Link href="#" className="wishlist">
                <i className="fa fa-heart"></i> Add to Wishlist
              </Link>
            </div>
          </div>
          <div className="arr-content">
            <Link href="#">
              <p>{product.name}</p>
            </Link>
            <ul>
              <li>
                <span className="d-flex">
                  <del className="delete-price">{product.description}</del>
                  <span className="low-price">{product.description}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-50 mb-50">
      <div className="row">{renderProducts()}</div>
    </div>
  );
};

export default AntivirusProducts;
