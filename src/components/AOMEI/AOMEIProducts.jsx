import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const AOMEIProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const AOMEIproducts = [
        {
          name: "AOMEI Backupper Professional",
          description: "$42.99",
          delprice:"$55.99",
          product_img: "img/subpages/AOMEI/buy-aomei-backupper-professional.jpg",
        },
        {
          name: "AOMEI Backupper Server",
          description: "$160.99",
          delprice:"$418.99",
          product_img: "img/subpages/AOMEI/buy-aomei-backupper-server.jpg",
        },
        {
          name: "AOMEI Backupper Technician Edition",
          description: "$803.99",
          delprice:"$1,114.99",
          product_img: "img/subpages/AOMEI/buy-aomei-backupper-technician-edition.jpg",
        },
        {
          name: "AOMEI Backupper Technician Plus Edition",
          description: "$750.99",
          delprice:"$1,393.99",
          product_img: "img/subpages/AOMEI/buy-aomei-backupper-technician-plus-edition.jpg",
        },
        {
          name: "AOMEI Backupper WorkStation",
          description: "$53.99",
          delprice:"$69.99",
          product_img: "img/subpages/AOMEI/buy-aomei-backupper-workstation.jpg",
        },
        {
          name: "AOMEI Image Deploy Technician Edition",
          description: "$225.99",
          delprice:"$214.99",
          product_img: "img/subpages/AOMEI/buy-aomei-image-deploy-technician-edition.jpg",
        },
        {
          name: "AOMEI OneKey Recovery Customization",
          description: "$964.99",
          delprice:"$1,672.99",
          product_img: "img/subpages/AOMEI/buy-aomei-onekey-recovery-customization.jpg",
        },
        {
          name: "AOMEI OneKey Recovery Professional",
          description: "$31.99",
          delprice:"$55.99",
          product_img: "img/subpages/AOMEI/buy-aomei-onekey-recovery-professional.jpg",
        },
        {
          name: "AOMEI OneKey Recovery Technician",
          description: "$525.99",
          delprice:"$535.99",
          product_img: "img/subpages/AOMEI/buy-aomei-onekey-recovery-technician.jpg",
        },
        {
          name: "AOMEI Partition Assistant Professional",
          description: "$53.99",
          delprice:"$64.99",
          product_img: "img/subpages/AOMEI/buy-aomei-partition-assistant-professional.jpg",
        },
        {
          name: "AOMEI Backupper Technician Edition",
          description: "$182.99",
          delprice:"$222.99",
          product_img: "img/subpages/AOMEI/buy-aomei-partition-assistant-server-edition.jpg",
        },
        {
          name: "AOMEI Partition Assistant Technician",
          description: "$814.99",
          delprice:"$1,286.99",
          product_img: "img/subpages/AOMEI/buy-aomei-partition-assistant-technician.jpg",
        },
        
      ];

      setProducts(AOMEIproducts);
    };

    fetchData();
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => (
      <div key={index} className="col-md-3">
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
      {/* <div className="row"> */}
        {renderProducts()}
      {/* </div> */}
    </div>
  );
};

export default AOMEIProducts;
