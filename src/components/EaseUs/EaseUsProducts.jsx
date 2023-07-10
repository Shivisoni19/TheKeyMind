import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import product from 'img/product/product-1.png'

const EaseUsProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const EaseUsproducts = [
        {
          name: "EaseUS Data Recovery Wizard Bootable Media For Mac",
          description: "$171.99",
          delprice:"$182.99",
          product_img: "img/subpages/EaseUs/buy-easeus-data-recovery-wizard-bootable-media-for-mac.jpg",
        },
        {
          name: "EaseUS Data Recovery Wizard Bootable Media",
          description: "$150.99",
          delprice:"$160.99",
          product_img: "img/subpages/EaseUs/buy-easeus-data-recovery-wizard-bootable-media.jpg",
        },
        {
          name: "EaseUS Data Recovery Wizard Technician",
          description: "$310.99",
          delprice:"$321.99",
          product_img: "img/subpages/EaseUs/buy-easeus-data-recovery-wizard-for-mac-technician.jpg",
        },
        {
          name: "EaseUS Data Recovery Wizard For Mac",
          description: "$91.99",
          delprice:"$96.99",
          product_img: "img/subpages/EaseUs/buy-easeus-data-recovery-wizard-for-mac.jpg",
        },
        {
          name: "EaseUS Data Recovery Wizard Professional",
          description: "$70.99",
          delprice:"$75.99",
          product_img: "img/subpages/EaseUs/buy-easeus-data-recovery-wizard-professional.jpg",
        },
        {
          name: "EaseUS Data Recovery Wizard For Mac Technician",
          description: "$310.99",
          delprice:"$321.99",
          product_img: "img/subpages/EaseUs/buy-easeus-data-recovery-wizard-technician.jpg",
        },
        {
          name: "EaseUS Deploy Manager Server",
          description: "$45.99",
          delprice:"$49.99",
          product_img: "img/subpages/EaseUs/buy-easeus-deploy-manager-server.jpg",
        },
        {
          name: "EaseUS Deploy Manager Workstation",
          description: "$11.99",
          delprice:"$13.99",
          product_img: "img/subpages/EaseUs/buy-easeus-deploy-manager-workstation.jpg",
        },
        {
          name: "EaseUS MobiSaver For Android",
          description: "$39.99",
          delprice:"$42.99",
          product_img: "img/subpages/EaseUs/buy-easeus-mobisaver-for-android.jpg",
        },
        {
          name: "EaseUS MobiSaver For Mac",
          description: "$81.99",
          delprice:"$85.99",
          product_img: "img/subpages/EaseUs/buy-easeus-mobisaver-for-mac.jpg",
        },
        {
          name: "EaseUS MobiSaver For Windows",
          description: "$70.99",
          delprice:"$75.99",
          product_img: "img/subpages/EaseUs/buy-easeus-mobisaver-for-windows.jpg",
        },
        {
          name: "EaseUS Partition Master Professional",
          description: "$40.99",
          delprice:"$42.99",
          product_img: "img/subpages/EaseUs/buy-easeus-partition-master-professional.jpg",
        },
        {
          name: "EaseUS Partition Master Server",
          description: "$160.99",
          delprice:"$171.99",
          product_img: "img/subpages/EaseUs/buy-easeus-partition-master-server.jpg",
        },
        {
          name: "EaseUS Partition Master Technician",
          description: "$739.99",
          delprice:"$750.99",
          product_img: "img/subpages/EaseUs/buy-easeus-partition-master-technician.jpg",
        },
        {
          name: "EaseUS Partition Master Unlimited",
          description: "$418.99",
          delprice:"$428.99",
          product_img: "img/subpages/EaseUs/buy-easeus-partition-master-unlimited.jpg",
        },
        {
          name: "EaseUS Todo Backup For Mac",
          description: "$39.99",
          delprice:"$42.99",
          product_img: "img/subpages/EaseUs/buy-easeus-todo-backup-for-mac.jpg",
        },
        // {
        //   name: "EaseUS Todo Backup Home",
        //   description: "$40.99",
        //   delprice:"$42.99",
        //   product_img: "img/subpages/EaseUs/buy-easeus-todo-backup-home.jpg",
        // },
        // {
        //   name: "EaseUS Todo Backup Server",
        //   description: "$203.99",
        //   delprice:"$214.99",
        //   product_img: "img/subpages/EaseUs/buy-easeus-todo-backup-server.jpg",
        // },
        // {
        //   name: "EaseUS Todo Backup Workstation",
        //   description: "$38.99",
        //   delprice:"$42.99",
        //   product_img: "img/subpages/EaseUs/buy-easeus-todo-backup-technician.jpg",
        // },
        // {
        //   name: "EaseUs Partition Assistant Technician",
        //   description: "$814.99",
        //   delprice:"$1,286.99",
        //   product_img: "img/subpages/EaseUs/buy-easeus-todo-backup-workstation.jpg",
        // },
        // {
        //   name: "EaseUs Partition Assistant Technician",
        //   description: "$814.99",
        //   delprice:"$1,286.99",
        //   product_img: "img/subpages/EaseUs/purchase-easeus-todo-backup-advanced-server.jpg",
        // },
        
      ];

      setProducts(EaseUsproducts);
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

export default EaseUsProducts;
