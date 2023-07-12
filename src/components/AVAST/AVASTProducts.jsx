import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const AVASTProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const AVASTProducts = [
        {
          name: "AVAST Driver Update 2023 - PC",
          description: "$21.99",
          delprice:"$42.99",
          product_img: "img/subpages/AVAST/buy-avast-driver-update-pc.jpg",
        },
        {
          name: "AVAST Premium Security 2023 - PC",
          description: "$16.99",
          delprice:"$48.99",
          product_img: "img/subpages/AVAST/buy-avast-premium-security-pc-mac-android-ios.jpg",
        },
        {
          name: "AVAST Premium Security 2023 - PC / MAC / ANDROID / IOS",
          description: "$21.99",
          delprice:"$64.99",
          product_img: "img/subpages/AVAST/buy-avast-premium-security-pc.jpg",
        },
        {
          name: "AVAST SecureLine VPN 2023 - PC / MAC / ANDROID / IOS",
          description: "$16.99",
          delprice:"$53.99",
          product_img: "img/subpages/AVAST/buy-avast-secureline-vpn-pc-mac-android-ios.jpg",
        },
        {
          name: "AVAST Ultimate 2023 - PC",
          description: "$26.99",
          delprice:"$53.99",
          product_img: "img/subpages/AVAST/buy-avast-ultimate-pc.jpg",
        },
      ];

      setProducts(AVASTProducts);
    };

    fetchData();
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => (
      <div key={index} className="col-md-3">
        <div className="container-fadeInTop">
          <div className="office-content">
            <img src={product.product_img} alt={product.name} style={{width:"100%"}}/>
            <div className="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link>
              <Link href="#" className="wishlist">
                 Go to Product
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
                  <del className="delete-price">{product.delprice}</del>
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
      <div className="row">
        {renderProducts()}
      </div>
    </div>
  );
};

export default AVASTProducts;
