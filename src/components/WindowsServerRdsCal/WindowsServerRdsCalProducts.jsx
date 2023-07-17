import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const WindowsServerRdsCalProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const WindowsServerRdsCalProducts = [
        {
          name: "Microsoft Windows Server 2012 RDS DEVICE CAL - Product Key",
          description: "$64.99",
          delprice:"$269.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2012-rds-device-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2012 RDS USER CAL - Product Key",
          description: "$64.99",
          delprice:"$269.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2012-rds-user-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2016 RDS DEVICE CAL - Product Key",
          description: "$107.99",
          delprice:"$428.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2016-rds-device-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2016  RDS USER CAL - Product Key",
          description: "$107.99",
          delprice:"$428.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2016-rds-user-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2019 RDS DEVICE CAL - Product Key",
          description: "$107.99",
          delprice:"$428.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2019-rds-device-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2019 RDS  USER CAL - Product Key",
          description: "$107.99",
          delprice:"$428.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2019-rds-user-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2022 RDS DEVICE CAL - Product Key",
          description: "$160.99",
          delprice:"$535.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2022-rds-device-cal-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2022 RDS USER CAL - Product Key",
          description: "$160.99",
          delprice:"$535.99",
          product_img: "img/subpages/WindowsServerRDSCAL/microsoft-windows-server-2022-rds-user-cal-product-key.jpg",
        },
        
      ];

      setProducts(WindowsServerRdsCalProducts);
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

export default WindowsServerRdsCalProducts;
