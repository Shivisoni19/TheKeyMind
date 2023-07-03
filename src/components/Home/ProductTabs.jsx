import React, { useState } from "react";
import { Link } from "react-router-dom";
import product1 from "../../images/products/product-1.png";
import product2 from "../../images/products/product-2.png";

const ProductTabs = () => {
  const tabs = [
    {
      title: "NEW ARRIVALS",
      products: [
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: {product1},
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: {product2},
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: { product1 },
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: { product1 },
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: { product1 },
        },
      ],
    },
    {
      title: "BESTSELLERS",
      products: [
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: { product1 },
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: { product1 },
        },
      ],
    },
    {
      title: "FEATURED",
      products: [
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: "url('../../images/products/p-1.jpg')",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "€39.99",
          product_img: { product1 },
        },
      ],
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="container mt50 mb50">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-button ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-panel ${index === activeTab ? "active" : ""}`}
            >
              <div className="product-row">
                {tab.products.map((product, productIndex) => (
                  <div key={productIndex} className="product-card">
                    <div className="arrival-overlay">
                      <img src={product1} alt="" />
                      {/* <img src={product.product_img} alt="" /> */}
                      <div className="arrival-mask">
                        <Link
                          href="#"
                          className="medium-button button-red add-cart"
                        >
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
                            <del className="delete-price">
                              {product.description}
                            </del>
                            <span className="low-price">
                              {product.description}
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductTabs;
