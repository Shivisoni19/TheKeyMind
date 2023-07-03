import React from 'react';
import "./Return.css"

const ReturnMain = () => {
  return (
    <>
      <div className="container">
        <div>
            <h2 className='text-center'>100% CUSTOMER WARRANTY</h2>
            <div className='text-center'>
               <img src='img/upload/return.png' style={{width:"15%"}}/>
            </div>
        </div>
        <div className="privacy-content">
          <div className="privacy-top-heading">
            <h3>Returns, Refunds, and Replacements –<strong className='text-orange'> Mr Key Shop</strong></h3>
            <span>Mr Key Shop follows the “Money-back Warranty” policy with a 100% refund warranty.</span><br/>
            <span>We allow you to return or replace a product at any given time if you made an erroneous purchase or you’re not satisfied with your product. Our Customer Service will process every request from yours, while our Technical Team is always at your disposal for any issue.</span>
          </div>
          <div className="privacy-mid-content mb10">
            <h3>RETURNS & REFUNDS</h3>
            <span><strong>1.1</strong> – Your return or refund request will be immediately approved as long as:</span><br/>
            <span className='font-13'>You declare the product is non-functional (you have to provide proof of the issue)</span>
            <h3>REPLACEMENT</h3>
            <span><strong>1.2</strong>  – Your replacement request will be immediately approved as long as:</span>
            <ul>
                <li className='font-13'>You declare you made an erroneous purchase.</li>
                <li className='font-13'>You declare the product is non-functional (you have to provide proof of the issue).</li>
                <li className='font-13'>You declare the product has not been used and won’t be used in the future.</li>
                <li className='font-13'>You declare the product has not been transferred to third parties and won’t be transferred in the future.</li>  
            </ul>
          </div>
          <span className=''>*Note: Your statements will be deemed as formal, therefore will have full legal validity.</span><br/>
          <span>For any request that is compliant with the requisites outlined in 1.1, the refund will be issued within 24 hours.</span>
          <h3>WHEN A REQUEST WILL NOT BE APPROVED?</h3>
          <ul>
            <li>- A refund or replacement request will be denied by Mr Key Shop if the product has already been activated, and is thus not reusable and remarketable.</li>
            <li>- A refund or replacement request will be denied by Mr Key Shop if you decline assistance from our team.</li>
            <li>- A refund or replacement request will be denied by Mr Key Shop if it is issued 14 days after the purchase or later.</li>
            <li>You must exercise the greatest caution before you install and activate the license. Before you proceed, you must ensure you purchased the correct product for your device, according to software compatibility. All products subject to return or substitution will be locked out and will not be reusable. In case they have already been activated, they will not work anymore on the target devices.</li>
          </ul><br/>
          <span><strong>Our Customer Service will be more than happy to help you and our team will always be at your disposal for any inquiry, any time.</strong></span>
          <h3>WHAT ARE YOU WAITING FOR? <span className='text-orange'>SHOP NOW WITH CONFIDENCE.</span></h3>
        </div>
      </div>
    </>
  );
}

export default ReturnMain;

