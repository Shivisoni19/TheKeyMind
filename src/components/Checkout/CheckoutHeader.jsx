import React from "react";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <>
      <div className="checkout">
        <div className="container">
          <div className="check-anchor clearfix">
            <div className="holder">
              <ul>
                <li className="active">
                  <Link to="/">
                    <i className="fa fa-star"></i> CheckOut
                    <i className="fa fa-star"></i>
                  </Link>
                </li>
              </ul>
              <div className="holder-border"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutHeader;
