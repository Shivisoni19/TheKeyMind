import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const PageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API or data source
    // Replace this with your actual data fetching logic
    const fetchData = () => {
      const pageProducts = [
        {
          name: "Upgrade To Windows 11 Professional - Product Key",
          description: "$64.99",
          delprice:"$192.99",
          product_img: "img/subpages/windows11/upgrade-to-windows-11-product-key.jpg",
        },
        {
          name: "Windows 11 Enterprise 64 Bit - Product Key",
          description: "$85.99",
          delprice:"$246.99",
          product_img: "img/subpages/windows11/windows-11-enterprise-32-64-bit-product-key.jpg",
        },
        {
          name: "Windows 11 Home 64 Bit - Product Key",
          description: "$53.99",
          delprice:"$182.99",
          product_img: "img/subpages/windows11/windows-11-home-32-64-bit-product-key.jpg",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "$64.99",
          delprice:"$192.99",
          product_img: "img/subpages/windows11/windows-11-professional-32-64-bit-product-key.jpg",
        },
      ];

      setProducts(pageProducts);
    };

    fetchData();
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => (
      <div key={index} className="col-lg-3 col-md-6 col-sm-6">
        <div className="container-fadeInTop mt30">
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
      <div className="row">{renderProducts()}</div>
    </div>
  );
};

export default PageProducts;
