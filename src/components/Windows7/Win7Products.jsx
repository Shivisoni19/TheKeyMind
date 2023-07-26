import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";

const Win7Products = () => {
 
  const [windows7, setwindows7] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
     setLoading(true);
     const unsub = onSnapshot(collection(db, "windows7db"), (snapshot) => {
         let list = [];
         snapshot.docs.forEach((doc) => {
             list.push({id: doc.id, ...doc.data()})
         });
         setwindows7(list)
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
  //     const win7products = [
  //       {
  //         name: "Microsoft Windows 7 Ultimate 32/64 Bit - Product Key",
  //         description: "$26.99",
  //         delprice:"$117.99",
  //         product_img: "img/subpages/windows7/microsoft-windows-7-ultimate-32-64-bit-product-key.jpg",
  //       },
  //       {
  //         name: "Microsoft Windows 7 Home & Premium 32/64 Bit - Product Keyy",
  //         description: "$21.99",
  //         delprice:"$117.99",
  //         product_img: "img/subpages/windows7/microsoft-windows-7-home-premium-32-64-bit-product-key.jpg",
  //       },
  //       {
  //         name: "Microsoft Windows 7 Professional 32/64 Bit - Product Key",
  //         description: "$26.99",
  //         delprice:"$123.99",
  //         product_img: "img/subpages/windows7/microsoft-windows-7-professional-32-64-bit-product-key.jpg",
  //       },
        
  //     ];

  //     setProducts(win7products);
  //   };

  //   fetchData();
  // }, []);

  const renderProducts = () => {
    return windows7 && windows7.map((item) => (
      <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
        <div className="container-fadeInTop">
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
              <Button onClick={() => navigate(`/windows7data/${item.id}`,{
                state:{windows7productId: item.id}
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

export default Win7Products;
