import React from 'react';
import "./Shipping.css"

const ShippingMain = () => {
  return (
    <>
      <div className="container">
        <div className="privacy-content">
          <div className="privacy-top-heading">
            <h2>DELIVERY WITHIN <strong className='text-orange'>  SECONDS</strong></h2>
            <span>Mr Key Shop has always paid special attention to the needs and wishes of our customers. In fact, we have always endeavored to find the most effective solutions to meet these needs.</span>
          </div>
          <div className="privacy-mid-content">
            <h3>DELIVERY WITHIN SECONDS OF PURCHASE VALIDATION:</h3>
            <span>By purchasing on our site, you can now receive the purchased product within seconds of payment validation. We have specifically developed a tool that enables us to deliver our licenses within a few seconds.</span>
            <h3>WHERE WILL I RECEIVE MY PURCHASE?</h3>
            <span>The product is delivered within seconds directly via email, thus avoiding the environmental impact of shipping physical goods. You will then receive the product within seconds in your mailbox. You will receive the original license and all the necessary instructions for a quick and easy installation.</span><br/>
                <span>*n/b. Deliveries may be delayed up to a few hours if the product is out of stock. If you do not receive the email, check your spam folder.</span>
            <h3>WHAT WILL I RECEIVE AFTER PURCHASE?</h3>
            <ul className='shipping-ul'>
                <li>-The code (Product Key) valid for 1 PC, with lifetime validity, including updates.</li>
                <li>-Multilingual License</li>
                <li>-Easy and fast installation instructions</li>
                <li>-Free Support</li>
                <li>-Invoice</li>
            </ul>
            <h3>WHAT CAN I DO IF I HAVEN'T RECEIVED MY PURCHASE?</h3>
            <span>No worries, we are always able and ready to provide assistance. Just contact our customer service and our team will be immediately available.</span><br/>
            <span>* Check your spam folder, sometimes emails may end up in your junk mail folder.</span>
            <h3>WHAT ARE YOU WAITING FOR? START SHOPPING AND GET YOUR SOFTWARE NOW.</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingMain;

