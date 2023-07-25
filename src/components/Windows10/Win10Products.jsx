import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const Win10Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const win10products = [
        {
          name: "Upgrade To Windows 10 Professional - Product Key",
          description: "$45.99",
          delprice:"$155.99",
          product_img: "img/subpages/windows10/upgrade-to-windows-10-professional-product-key.jpg",
        },
        {
          name: "Windows 10 Professional 32/64 Bit - Product Key",
          description: "$42.99",
          delprice:"$160.99",
          product_img: "img/subpages/windows10/windows-10-professional-32-64-bit-microsoft-product-key.jpg",
        },
        {
          name: "Microsoft Windows 10 Home 32/64 Bit - Product Key",
          description: "$37.99",
          delprice:"$112.99",
          product_img: "img/subpages/windows10/microsoft-windows-10-home-32-64-bit-product-key.jpg",
        },
        
      ];

      setProducts(win10products);
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
      <div className="row">{renderProducts()}</div>
    </div>
  );
};

export default Win10Products;
