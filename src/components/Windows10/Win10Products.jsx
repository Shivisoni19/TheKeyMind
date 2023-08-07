import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";
// import product from 'img/product/product-1.png'

const Win10Products = () => {
  // const [products, setProducts] = useState([]);

  const [windows10, setwindows10] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
     setLoading(true);
     const unsub = onSnapshot(collection(db, "windows10db"), (snapshot) => {
         let list = [];
         snapshot.docs.forEach((doc) => {
             list.push({id: doc.id, ...doc.data()})
         });
         setwindows10(list)
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
  //     const win10products = [
  //       {
  //         name: "Upgrade To Windows 10 Professional - Product Key",
  //         description: "$45.99",
  //         delprice:"$155.99",
  //         product_img: "img/subpages/windows10/upgrade-to-windows-10-professional-product-key.jpg",
  //       },
  //       {
  //         name: "Windows 10 Professional 32/64 Bit - Product Key",
  //         description: "$42.99",
  //         delprice:"$160.99",
  //         product_img: "img/subpages/windows10/windows-10-professional-32-64-bit-microsoft-product-key.jpg",
  //       },
  //       {
  //         name: "Microsoft Windows 10 Home 32/64 Bit - Product Key",
  //         description: "$37.99",
  //         delprice:"$112.99",
  //         product_img: "img/subpages/windows10/microsoft-windows-10-home-32-64-bit-product-key.jpg",
  //       },
        
  //     ];

  //     setProducts(win10products);
  //   };

  //   fetchData();
  // }, []);

  const renderProducts = () => {
    return windows10 && windows10.map((item) => (
      <div key={item.id} className="col-md-3 columns-height mt30">
        <div className="container-fadeInTop mt30">
          <div className="office-content">
            <img src={item.img} alt={item.name} style={{width:"100%"}}/>
            <div class="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              {/* <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link> */}
              {/* <Button  href="#" className="wishlist go-to-product-btn">
                 Go to Product
              </Button > */}
              <Button onClick={() => navigate(`/windows10data/${item.id}`,{
                state:{windows10productId: item.id}
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

export default Win10Products;
