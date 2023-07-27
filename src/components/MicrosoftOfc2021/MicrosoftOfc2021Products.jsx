import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";

const MicrosoftOfc2021Products = () => {
   
  const [office2021, setOffice2021] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "office2021db"), (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()})
        });
        setOffice2021(list)
        setLoading(false);
    },
     (error) => {
       console.log(error);
     } 
    );
    return () => {
     unsub();
    }
 },[])

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = () => {
  //     const MicrosoftOfc2021Products = [
  //       {
  //         name: "Access 2021 - Product Key",
  //         description: "$64.99",
  //         delprice:"$160.99",
  //         product_img: "img/subpages/office2021/access-2021-product-key.jpg",
  //       },
  //       {
  //         name: "Excel 2021 - Product Key",
  //         description: "$64.99",
  //         delprice:"$160.99",
  //         product_img: "img/subpages/office2021/excel-2021-product-key.jpg",
  //       },
  //       {
  //         name: "Office 2021 Home & Business For Mac - Product Key",
  //         description: "$107.99",
  //         delprice:"$321.99",
  //         product_img: "img/subpages/office2021/microsoft-office-2021-home-business-for-mac-product-key.jpg",
  //       },
  //       {
  //         name: "Office 2021 Home & Student For Mac - Product Key",
  //         description: "$107.99",
  //         delprice:"$160.99",
  //         product_img: "img/subpages/office2021/microsoft-office-2021-home-student-for-mac-product-key.jpg",
  //       },
  //       {
  //         name: "Office 2021 Home & Student-Product Key",
  //         description: "$96.99",
  //         delprice:"$160.99",
  //         product_img: "img/subpages/office2021/microsoft-office-2021-home-student-product-key.jpg",
  //       },
  //       {
  //         name: "Office 2021 Home & Business-Product Key",
  //         description: "$117.99",
  //         delprice:"$321.99",
  //         product_img: "img/subpages/office2021/office-2021-home-business-product-key.jpg",
  //       },
  //       {
  //         name: "Office 2021 Professional Plus - Product Key",
  //         description: " $117.99",
  //         delprice:"$546.99",
  //         product_img: "img/subpages/office2021/office-2021-professional-plus-product-key.jpg",
  //       },
  //       {
  //         name: "Visio Professional 2021 - Product Keyt",
  //         description: "$321.99",
  //         delprice:"$953.99",
  //         product_img: "img/subpages/office2021/visio-professional-2021-product-key.jpg",
  //       },
  //       {
  //         name: "Visio Standard 2021 - Product Key",
  //         description: "$235.99",
  //         delprice:"$514.99",
  //         product_img: "img/subpages/office2021/visio-standard-2021-product-key.jpg",
  //       },
  //       {
  //         name: "Word 2021 For Mac - Product Key",
  //         description: "$85.99",
  //         delprice:"$150.99",
  //         product_img: "img/subpages/office2021/word-2021-for-mac-product-key.jpg",
  //       },
  //       {
  //         name: "Word 2021 - Product Key",
  //         description: "$64.99",
  //         delprice:"$160.99",
  //         product_img: "img/subpages/office2021/word-2021-product-key.jpg",
  //       },
        
        
  //     ];

  //     setProducts(MicrosoftOfc2021Products);
  //   };

  //   fetchData();
  // }, []);

  const renderProducts = () => {
    return office2021 && office2021.map((item, index) => (
      <div key={index} className="col-md-3">
        <div className="container-fadeInTop">
          <div className="office-content">
            <img src={item.img} alt={item.name} style={{width:"100%"}}/>
            <div className="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              {/* <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link> */}
              <Button href="#" className="go-to-product-btn">
                Go To Product
              </Button>
            </div>
          </div>
          <div className="arr-content">
            <Link href="#">
              <p>{item.name}</p>
            </Link>
            <ul>
              <li>
                <span className="d-flex">
                  <del className="delete-price">${item.rprice}</del>
                  <span className="low-price">${item.nprice}</span>
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

export default MicrosoftOfc2021Products;
