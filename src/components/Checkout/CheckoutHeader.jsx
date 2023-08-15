import React from "react";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <>
      <div className="checkout">
        <div className="container">
          {/* <!--  head text --> */}
          <div class="blog pt10 pb10" id="category">
            <div class="container">
              <div class="title mt0 block-category-top">
                <h1>
                  <i class="fa fa-star"></i>Checkout<i class="fa fa-star"></i>
                </h1>
                <div class="title-border"></div>
              </div>
            </div>
          </div>
          {/* <!-- end head text --> */}
        </div>
      </div>
    </>
  );
};

export default CheckoutHeader;
