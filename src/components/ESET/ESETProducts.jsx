import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const ESETProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const ESETProducts = [
        {
          name: "ESET Internet Security 2023 - PC / MAC / ANDROID",
          description: "$37.99",
          delprice:"$56.99",
          product_img: "img/subpages/ESET/buy-eset-internet-security-pc-mac-android.jpg",
        },
        {
          name: "ESET Mobile Security For Android 2023",
          description: "$10.99",
          delprice:"$21.99",
          product_img: "img/subpages/ESET/buy-eset-mobile-security-for-android.jpg",
        },
        {
          name: "ESET NOD32 Antivirus 2023 - PC / MAC",
          description: "$36.99",
          delprice:"$47.99",
          product_img: "img/subpages/ESET/buy-eset-nod32-antivirus-pc-mac.jpg",
        },
      ];

      setProducts(ESETProducts);
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

export default ESETProducts;
