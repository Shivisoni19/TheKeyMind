import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const MicrosoftSQLServerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const MicrosoftSQLServerProducts = [
        {
          name: "Microsoft SQL Server 2012 Standard - Product Key",
          description: "$301.99",
          delprice:"$1,607.99",
          product_img: "img/subpages/MicrosoftSQLServer/microsoft-sql-server-2012-standard-product-key.jpg",
        },
        {
          name: "Microsoft SQL Server 2014 Standard - Product Key",
          description: "$321.99",
          delprice:"$1,715.99",
          product_img: "img/subpages/MicrosoftSQLServer/microsoft-sql-server-2014-standard-product-key.jpg",
        },
        {
          name: "Microsoft SQL Server 2016 Standard - Product Key",
          description: "$375.99",
          delprice:"$1,822.99",
          product_img: "img/subpages/MicrosoftSQLServer/microsoft-sql-server-2016-standard-product-key.jpg",
        },
        {
          name: "Microsoft SQL Server 2017 Standard - Product Key",
          description: "$482.99",
          delprice:"$2,036.99",
          product_img: "img/subpages/MicrosoftSQLServer/microsoft-sql-server-2017-standard-product-key.jpg",
        },
        {
          name: "Microsoft SQL Server 2019 Standard - Product Key",
          description: "$525.99",
          delprice:"$2,143.99",
          product_img: "img/subpages/MicrosoftSQLServer/microsoft-sql-server-2019-standard-product-key.jpg",
        },
      ];

      setProducts(MicrosoftSQLServerProducts);
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

export default MicrosoftSQLServerProducts;
