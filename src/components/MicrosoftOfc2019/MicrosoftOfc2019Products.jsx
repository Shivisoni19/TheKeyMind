import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftOfc2019Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftOfc2019Products = [
        {
          name: "Access 2019 - Product Key",
          description: "$58.99",
          delprice:"$75.99",
          product_img: "img/subpages/office2019/access-2019-product-key.jpg",
        },
        {
          name: "Microsoft Office 2019 Home & Student 32/64 Bit-Product Key",
          description: "$75.99",
          delprice:"$160.99",
          product_img: "img/subpages/office2019/microsoft-office-2019-home-student-32-64-bit-product-key.jpg",
        },
        {
          name: "Office 2019 Professional Plus 32/64 Bit-Product Key",
          description: "$85.99",
          delprice:"$192.99",
          product_img: "img/subpages/office2019/microsoft-office-2019-professional-plus-32-64-bit-product-key.jpg",
        },
        {
          name: "Microsoft Project 2019 Professional - Licenza Microsoft",
          description: "$321.99",
          delprice:"$1,564.99",
          product_img: "img/subpages/office2019/microsoft-project-2019-professional-licenza-microsoft.jpg",
        },
        {
          name: "Microsoft Project 2019 Standard - Product Key",
          description: "$257.99",
          delprice:"$889.99",
          product_img: "img/subpages/office2019/microsoft-project-2019-standard-product-key.jpg",
        },
        {
          name: "Office 2019 Home & Business 32 E 64 Bit - Product Key",
          description: "$85.99",
          delprice:"$246.99",
          product_img: "img/subpages/office2019/office-2019-home-business-32-e-64-bit-product-key.jpg",
        },
        {
          name: "Office 2019 Home & Business For MAC - Product Key",
          description: "$85.99",
          delprice:"$310.99",
          product_img: "img/subpages/office2019/office-2019-home-business-for-mac-microsoft-license.jpg",
        },
        {
          name: "Outlook 2019 - Product Key (Double Line)",
          description: "$64.99",
          delprice:"$128.99",
          product_img: "img/subpages/office2019/outlook-2019-product-key.jpg",
        },
        {
          name: "Visio 2019 Professional - Product Key",
          description: "$246.99",
          delprice:"$857.99",
          product_img: "img/subpages/office2019/visio-2019-professional-product-key.jpg",
        },
        {
          name: "Visio 2019 Standard - Product Key",
          description: "$214.999",
          delprice:"$471.99",
          product_img: "img/subpages/office2019/visio-2019-standard-product-key.jpg",
        },
        {
          name: "Visual Studio 2019 Enterprise - Product Key",
          description: "$535.99",
          delprice:"$750.99",
          product_img: "img/subpages/office2019/visual-studio-2019-enterprise-product-key.jpg",
        },
        {
          name: "Visual Studio 2019 Professional - Product Key",
          description: "$267.99",
          delprice:"$535.99",
          product_img: "img/subpages/office2019/visual-studio-2019-professional-product-key.jpg",
        },
        
        
      ];

      setProducts(MicrosoftOfc2019Products);
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

export default MicrosoftOfc2019Products;
