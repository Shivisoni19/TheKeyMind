import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const Microsoft365Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const Microsoft365Products = [
        {
          name: "Microsoft 365 Apps For Business CSP - Product Key",
          description: "$171.99",
          delprice:"$192.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-apps-for-business-csp-product-key.jpg",
        },
        {
          name: "Microsoft Office 2010 Professional Plus 32/64 Bit - Product Key",
          description: "$267.99",
          delprice:"$276.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-apps-for-enterprise-csp-product-key.jpg",
        },
        {
          name: "Microsoft 365 Business Basic CSP (Office 365 Business Basic CSP) - Product Key",
          description: "$98.99",
          delprice:"$107.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-business-basic-csp-product-key.jpg",
        },
        {
          name: "Microsoft 365 Business Premium CSP (Office 365 Business Premium CSP) - Product Key",
          description: "$375.99",
          delprice:"$396.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-business-premium-csp-product-key.jpg",
        },
        {
          name: "Microsoft 365 Business Premium (Office 365 Business Premium) - Product Key",
          description: "$203.99",
          delprice:"$265.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-business-premium-product-key.jpg",
        },
        {
          name: "Microsoft 365 Business Standard (Office 365 Business Standard) - Product Key",
          description: "$182.99",
          delprice:"$192.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-business-standard-product-key.jpg",
        },
        {
          name: "Microsoft 365 Family (Office 365 Family) - Product Key",
          description: "$96.99",
          delprice:"$160.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-family-product-key.jpg",
        },
        {
          name: "Microsoft 365 Personal (Office 365 Personal) - Product Key",
          description: "$73.99",
          delprice:"$85.99",
          product_img: "img/subpages/Microsoft365/microsoft-365-personal-product-key.jpg",
        },
      ];

      setProducts(Microsoft365Products);
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

export default Microsoft365Products;
