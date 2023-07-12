import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const KasperskyProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const KasperskyProducts = [
        {
          name: "Kaspersky Anti-Virus 2023 - PC",
          description: "$21.99",
          delprice:"$42.99",
          product_img: "img/subpages/Kaspersky/buy-kaspersky-antivirus-pc.jpg",
        },
        {
          name: "Kaspersky Internet Security For Android 2023",
          description: "$12.99",
          delprice:"$32.99",
          product_img: "img/subpages/Kaspersky/buy-kaspersky-internet-security-for-android.jpg",
        },
        {
          name: "Kaspersky Internet Security 2023 (Kaspersky Standard) - PC / MAC / ANDROID / IOS",
          description: "$21.99",
          delprice:"$48.99",
          product_img: "img/subpages/Kaspersky/buy-kaspersky-internet-security-pc-mac-android.jpg",
        },
        {
          name: "Kaspersky Total Security 2023 (Kaspersky Plus) - PC / MAC / ANDROID / IOS",
          description: "$32.99",
          delprice:"$58.99",
          product_img: "img/subpages/Kaspersky/buy-kaspersky-total-security-pc-mac-android-ios.jpg",
        },
      ];

      setProducts(KasperskyProducts);
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

export default KasperskyProducts;
