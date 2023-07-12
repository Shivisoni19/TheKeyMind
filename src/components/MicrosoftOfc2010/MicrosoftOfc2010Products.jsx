import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftOfc2010Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftOfc2010Products = [
        {
          name: "Access 2010 - Product Key",
          description: "$21.99",
          delprice:"$53.99",
          product_img: "img/subpages/office2010/access-2010-product-key.jpg",
        },
        {
          name: "Microsoft Office 2010 Professional Plus 32/64 Bit - Product Key",
          description: "$37.99",
          delprice:"$107.99 ",
          product_img: "img/subpages/office2010/microsoft-office-2010-professional-plus-32-64-bit-product-key.jpg",
        },
        {
          name: "Microsoft Project Professional 2010 - Product Key",
          description: "$107.99",
          delprice:"$160.99",
          product_img: "img/subpages/office2010/microsoft-project-professional-2010-product-key.jpg",
        },
        {
          name: "Microsoft Project Standard 2010 - Product Key (Double Line) (Double Line)",
          description: "$85.99",
          delprice:"$127.99",
          product_img: "img/subpages/office2010/microsoft-project-standard-2010-product-key.jpg",
        },
        {
          name: "Visio 2010 Professional - Product Key",
          description: "$96.99",
          delprice:"$546.99",
          product_img: "img/subpages/office2010/visio-2010-professional-product-key.jpg",
        },
      ];

      setProducts(MicrosoftOfc2010Products);
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

export default MicrosoftOfc2010Products;
