import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const Win8Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API or data source
    // Replace this with your actual data fetching logic
    const fetchData = () => {
      const win8products = [
        {
          name: "Microsoft Windows 8.1 Professional 32/64 Bit - Product Key",
          description: "$26.99",
          delprice:"$96.99",
          product_img: "img/subpages/windows8/microsoft-windows-8-1-professional-32-64-bit-product-key.jpg",
        },
        
      ];

      setProducts(win8products);
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

export default Win8Products;
