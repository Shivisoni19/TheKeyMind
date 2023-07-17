import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const WindowsServerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const WindowsServerProducts = [
        {
          name: "Microsoft Windows Server 2012 Datacenter - Product Key",
          description: "$964.99",
          delprice:"$1,715.9",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2012-datacenter-product-key.jpg",
        },
        {
          name: "Microsoft SQL Server 2012 Standard - Product Key",
          description: "$301.99",
          delprice:"$1,607.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2012-essentials-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2012 R2 Datacenter - Product Key",
          description: "$1,051.99",
          delprice:"$2,679.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2012-r2-datacenter-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2012 R2 Essentials - Product Key",
          description: "$117.99",
          delprice:"$535.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2012-r2-essentials-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2012 R2 Standard - Product Key",
          description: "$139.99",
          delprice:"$643.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2012-r2-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2012 Standard - Product Key",
          description: "$117.99",
          delprice:"$643.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2012-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2016 Datacenter - Product Key",
          description: "$1,286.99",
          delprice:"$3,215.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2016-datacenter-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2016 Essentials - Product Key",
          description: "$171.99",
          delprice:"$428.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2016-essentials-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2016 Standard - Product Key",
          description: "$214.99",
          delprice:"$535.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2016-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2019 Datacenter - Product Key",
          description: "$2,878.999",
          delprice:"$4,287.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2019-datacenter-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2019 Essentials - Product Key",
          description: "$235.99",
          delprice:"$600.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2019-essentials-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2019 Standard - Product Key",
          description: "$353.99",
          delprice:"$750.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2019-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2022 Datacenter - Product Key",
          description: "$3,322.99",
          delprice:"$6,431.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2022-datacenter-product-key.jpg",
        },
        {
          name: "Microsoft Windows Server 2022 Standard - Product Key",
          description: "$482.99",
          delprice:"$1,071.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-server-2022-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Storage Server 2012 R2 Workgroup - Product Key",
          description: "$428.99",
          delprice:"$750.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-storage-server-2012-r2-workgroup-product-key.jpg",
        },
        {
          name: "Microsoft Windows Storage Server 2012 Standard - Product Key",
          description: "$321.99",
          delprice:"$964.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-storage-server-2012-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Storage Server 2012 Workgroup - Product Key",
          description: "$396.99",
          delprice:"$964.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-storage-server-2012-workgroup-product-key.jpg",
        },
        {
          name: "Microsoft Windows Storage Server 2016 Standard - Product Key",
          description: "$847.99",
          delprice:"$1,393.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-storage-server-2016-standard-product-key.jpg",
        },
        {
          name: "Microsoft Windows Storage Server 2016 Workgroup - Product Key",
          description: "$955.99",
          delprice:"$1,607.99",
          product_img: "img/subpages/WindowsServer/microsoft-windows-storage-server-2016-workgroup-product-key.jpg",
        },
      ];

      setProducts(WindowsServerProducts);
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

export default WindowsServerProducts;
