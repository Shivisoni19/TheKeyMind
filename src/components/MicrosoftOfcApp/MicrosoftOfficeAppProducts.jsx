import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Button } from "semantic-ui-react";

const MicrosoftOfficeAppProducts = () => {
  
  const [officeapp, setOfficeApp] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "officeAppdb"), (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()})
        });
        setOfficeApp(list)
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
    return officeapp && officeapp.map((item) => (
      <div key={item.id} className="col-md-3 columns-height mt30">
        <div className="container-fadeInTop">
          <div className="office-content">
            <img src={item.img} alt={item.name} style={{width:"100%"}}/>
            <div class="office-content-overlay"></div>
            <div className="office-content-details fadeIn-top">
              {/* <Link href="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link> */}
              {/* <Button href="#" className="go-to-product-btn">
                Go To Product
              </Button> */}
              <Button onClick={() => navigate(`/microsoftofficeappdata/${item.id}`,{
                state:{microsoftofficeappId: item.id}
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
                  <del className="delete-price">{item.rprice}</del>
                  <span className="low-price">{item.nprice}</span>
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

export default MicrosoftOfficeAppProducts;
