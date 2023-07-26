import React from "react";
import { Link , useParams } from "react-router-dom";
// import ProductDetailLeft from "./ProductDetailLeft";

const Windows10DetailsMain = ({ name, img, rprice, nprice, id }) => {

  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="product-page container">
      <div className="row">
        <div className="col-md-6">
          {/* <ProductDetailLeft/> */}
          <img src={img} />
        </div>
        <div className="col-md-6">
          <div className="single-desc">
            <div className="middle-single">
              <h1>{name}</h1>
            </div>

            <div className="single-price">
              <ul>
                <li>
                  <span className="high-price">${rprice}</span>
                </li>
                <li>
                  <span className="low-price">${nprice}</span>
                </li>
              </ul>
            </div>

            <div className="single-infos">
              <p>
                <span>Availability:</span> In Stock
              </p>
              <p>
                <span>Multilingual:</span> All languages included
              </p>
              <p>
                <span>Support:</span> Specialized and Free
              </p>
              <p>
                <span>Payment:</span> SSL encrypted and secure
              </p>
              <p>
                <span>Shipping:</span> Free instant e-mail delivery 24/24h,
                thus avoiding the environmental impact of shipping physical
              </p>
            </div>

            <div className="prod-end">
              <Link to="#" className="medium-button button-red add-cart">
                Add to Cart
              </Link>
              <input
                type="number"
                id="quantity_wanted"
                placeholder="1"
                defaultValue={1}
              />
              <div className="clear"></div>
            </div>

            {/* <div className="single-descript">
              <p>
                Buying Windows 10 Home you will receive a 100% Original
                Microsoft license that can be activated directly on the official
                Microsoft website. Our secure payment methods give you a total
                guarantee..
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Windows10DetailsMain;
