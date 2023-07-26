import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";

const Win11Products = () => {
  // const [products, setProducts] = useState([]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
     setLoading(true);
     const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
         let list = [];
         snapshot.docs.forEach((doc) => {
             list.push({id: doc.id, ...doc.data()})
         });
         setUsers(list)
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

  // useEffect(() => {
  //   const fetchData = () => {
  //     const Win11Products = [
  //       {
  //         name: "Upgrade To Windows 11 Professional - Product Key",
  //         description: "$64.99",
  //         delprice:"$192.99",
  //         product_img: "img/subpages/windows11/upgrade-to-windows-11-product-key.jpg",
  //       },
  //       {
  //         name: "Windows 11 Enterprise 64 Bit - Product Key",
  //         description: "$85.99",
  //         delprice:"$246.99",
  //         product_img: "img/subpages/windows11/windows-11-enterprise-32-64-bit-product-key.jpg",
  //       },
  //       {
  //         name: "Windows 11 Home 64 Bit - Product Key",
  //         description: "$53.99",
  //         delprice:"$182.99",
  //         product_img: "img/subpages/windows11/windows-11-home-32-64-bit-product-key.jpg",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         description: "$64.99",
  //         delprice:"$192.99",
  //         product_img: "img/subpages/windows11/windows-11-professional-32-64-bit-product-key.jpg",
  //       },
  //     ];

  //     setProducts(Win11Products);
  //   };

  //   fetchData();
  // }, []);

  const renderProducts = () => {
    return users && users.map((item) => (
      <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
        <div className="container-fadeInTop mt30">
          <div className="office-content">
            <img src={item.img} alt={item.name} style={{width:"100%"}}/>
            <div class="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              {/* <Button href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Button> */}
              <Button onClick={() => navigate(`/productdetails/${item.id}`,{
                state:{productId: item.id}
              })} className="wishlist">
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
      <div className="row">{renderProducts()}</div>
    </div>
  );
};

export default Win11Products;
