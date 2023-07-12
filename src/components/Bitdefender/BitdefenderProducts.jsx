import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const BitdefenderProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const BitdefenderProducts = [
        {
          name: "Bitdefender Antivirus For Mac 2023",
          description: "$32.99",
          delprice:"$53.99",
          product_img: "img/subpages/Bitdefender/buy-bitdefender-antivirus-for-mac.jpg",
        },
        {
          name: "Bitdefender Antivirus Plus 2023 - PC",
          description: "$21.99",
          delprice:"$32.99",
          product_img: "img/subpages/Bitdefender/buy-bitdefender-antivirus-plus-pc.jpg",
        },
        {
          name: "Bitdefender Internet Security 2023 - PC",
          description: "$28.99",
          delprice:"$42.99",
          product_img: "img/subpages/Bitdefender/buy-bitdefender-internet-security-pc.jpg",
        },
        {
          name: "Bitdefender Mobile Security For Android 2023",
          description: "$13.99",
          delprice:"$16.99",
          product_img: "img/subpages/Bitdefender/buy-bitdefender-mobile-security-for-android.jpg",
        },
        {
          name: "Bitdefender Total Security 2023 - PC / MAC",
          description: "$53.99",
          delprice:"$85.99",
          product_img: "img/subpages/Bitdefender/buy-bitdefender-total-security-pc-mac.jpg",
        },
      ];

      setProducts(BitdefenderProducts);
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

export default BitdefenderProducts;
