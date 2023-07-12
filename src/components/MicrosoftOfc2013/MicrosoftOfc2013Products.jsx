import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftOfc2013Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftOfc2013Products = [
        {
          name: "Access 2013 - Product Key",
          description: "$21.99",
          delprice:"$53.99",
          product_img: "img/subpages/office2013/access-2013-product-key.jpg",
        },
        {
          name: "Microsoft Office 2013 Professional Plus 32/64 Bit - Product Key",
          description: "$42.99",
          delprice:"$139.99 ",
          product_img: "img/subpages/office2013/microsoft-office-2013-professional-plus-32-64-bit-product-key.jpg",
        },
        {
          name: "Microsoft Project Professional 2013 - Product Key",
          description: "$139.99",
          delprice:"$203.99",
          product_img: "img/subpages/office2013/microsoft-project-professional-2013-product-key.jpg",
        },
        {
          name: "OneNote 2013 - Product Key (Double Line) (Double Line) (Double Line)",
          description: "$32.99",
          delprice:"$53.99",
          product_img: "img/subpages/office2013/onenote-2013-product-key.jpg",
        },
        {
          name: "Visio 2013 Professional - Product Key",
          description: "$128.99",
          delprice:"$761.99",
          product_img: "img/subpages/office2013/visio-2013-professional-product-key.jpg",
        },
      ];

      setProducts(MicrosoftOfc2013Products);
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

export default MicrosoftOfc2013Products;
