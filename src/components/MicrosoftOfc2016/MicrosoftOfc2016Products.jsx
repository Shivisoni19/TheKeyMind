import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftOfc2016Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftOfc2016Products = [
        {
          name: "Access 2016 - Product Key",
          description: "$32.99",
          delprice:"$53.99",
          product_img: "img/subpages/office2016/access-2016-product-key.jpg",
        },
        {
          name: "Microsoft Office 2016 Professional Plus 32/64 Bit - Product Key",
          description: "$53.99",
          delprice:"$139.99",
          product_img: "img/subpages/office2016/microsoft-office-2016-professional-plus-32-64-bit-product-key.jpg",
        },
        {
          name: "Microsoft Project 2016 Professional - Microsoft License",
          description: "$195.99",
          delprice:"$1,286.99",
          product_img: "img/subpages/office2016/microsoft-project-2016-professional-product-key.jpg",
        },
        {
          name: "Microsoft Project 2016 Standard - Microsoft License (Double Line)",
          description: "$163.99",
          delprice:"$675.99",
          product_img: "img/subpages/office2016/microsoft-project-2016-standard-microsoft-license.jpg",
        },
        {
          name: "Office 2016 Home & Business For MAC - Product Key",
          description: "$75.99",
          delprice:"$267.99",
          product_img: "img/subpages/office2016/office-2016-home-business-for-mac-microsoft-license.jpg",
        },
        {
          name: "Office 2016 Home & Student 32/64 Bit - Product Key",
          description: "$42.99",
          delprice:"$117.99",
          product_img: "img/subpages/office2016/office-2016-home-student-32-64-bit-product-key.jpg",
        },
        {
          name: "Outlook 2016 - Product Key",
          description: "$53.99",
          delprice:"$75.99",
          product_img: "img/subpages/office2016/outlook-2016-product-key.jpg",
        },
        {
          name: "Visio 2016 Professional - Product Key",
          description: "$192.99",
          delprice:"$846.99",
          product_img: "img/subpages/office2016/visio-2016-professional-product-key.jpg",
        },
        {
          name: "Visio 2016 Standard - Product Key",
          description: "$139.99",
          delprice:"$450.99",
          product_img: "img/subpages/office2016/visio-2016-standard-product-key.jpg",
        },
        
      ];

      setProducts(MicrosoftOfc2016Products);
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

export default MicrosoftOfc2016Products;
