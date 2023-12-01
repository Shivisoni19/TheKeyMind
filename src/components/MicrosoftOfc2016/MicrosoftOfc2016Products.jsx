import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";

const MicrosoftOfc2016Products = () => {

  const [office2016, setOffice2016] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "office2016db"), (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()})
        });
        setOffice2016(list)
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

  const renderProducts = () => {
    return office2016 && office2016.map((item) => (
      <div key={item.id} className="col-md-3 columns-height mt30">
        <div className="container-fadeInTop">
          <div className="office-content">
            <img src={item.img} alt={item.name} style={{width:"100%"}}/>
            <div className="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              {/* <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link> */}
              {/* <Button href="#" className="go-to-product-btn">
                Go To Product
              </Button> */}
              <Button onClick={() => navigate(`/microsoftoffice2016data/${item.id}`,{
                state:{microsoftoffice2016Id: item.id}
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
      <div className="row">
        {renderProducts()}
      </div>
    </div>
  );
};

export default MicrosoftOfc2016Products;
