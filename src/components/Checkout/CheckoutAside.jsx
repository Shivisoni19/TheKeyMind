import React from "react";

const CheckoutAside = () => {
  return (
    <>
      <div className="check-aside">
        <div className="orders second-order mb20">
          <h6>Your Orders</h6>

          <div className="order-box">
            <p>
              Grey California Dress <span>$ 3 199</span>
            </p>
            <div className="quantity">Quantity: 1</div>
          </div>

          <div className="order-box">
            <p>
              Brown Leather Hand Bag <span>$ 999</span>
            </p>
            <div className="quantity">Quantity: 1</div>
          </div>

          <div className="order-box">
            <p>
              Cart Subtotal: <span>$ 4 122</span>
            </p>
          </div>

          <div className="order-box mb20">
            <p>
              Shipping and Handling: <span>$ 250</span>
            </p>
          </div>

          <p>
            <strong>
              Total: <span>$ 4 372</span>
            </strong>
          </p>
        </div>

        <div className="payment-method">
          <h6>Payment Method</h6>
          <form>
            <input type="radio" name="pay" value="direct" checked />{" "}
            <p>Direct Bank Transfer</p>
            <p className="mb10">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order wont be shipped
              until the funds have cleared in our account.
            </p>
            <br />
            <input type="radio" name="pay" value="cheque" />
            <p className="mb10">Cheque payment</p>
            <br />
            <input type="radio" name="pay" value="paypal" />
            <p>PayPal</p> <img src="img/upload/paypal.png" alt="" />
            <input type="submit" value="Place Order" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutAside;
