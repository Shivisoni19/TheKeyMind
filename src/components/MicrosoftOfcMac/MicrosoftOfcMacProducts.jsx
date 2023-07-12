import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftOfcMacProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftOfcMacProducts = [
        {
          name: "Office 2021 Home & Business For Mac - Product Key",
          description: "$107.99",
          delprice:"$321.99",
          product_img: "img/subpages/officeformac/microsoft-office-2021-home-business-for-mac-product-key.jpg",
        },
        {
          name: "Office 2021 Home & Student For Mac - Product Key",
          description: "$107.99",
          delprice:"$160.99",
          product_img: "img/subpages/officeformac/microsoft-office-2021-home-student-for-mac-product-key.jpg",
        },
        {
          name: "Office 2016 Home & Business For MAC - Product Key",
          description: "$75.99",
          delprice:"$267.99",
          product_img: "img/subpages/officeformac/office-2016-home-business-for-mac-microsoft-license.jpg",
        },
        {
          name: "Office 2019 Home & Business For MAC - Product Key",
          description: "$85.99",
          delprice:"$310.99",
          product_img: "img/subpages/officeformac/office-2019-home-business-for-mac-microsoft-license.jpg",
        },
      ];

      setProducts(MicrosoftOfcMacProducts);
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

export default MicrosoftOfcMacProducts;
