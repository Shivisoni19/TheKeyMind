import React from 'react'
import { Link } from "react-router-dom";
import email from '../../images/icons/email.png'
import support from '../../images/icons/support.png'
import payment from '../../images/icons/secure-payment.png'

const ShippingSection = () => {
  return (
    <>
      {/* <!-- Shipping Section Start  --> */}
          <div class="container mb50 shipping-margin-top">
            <div class="row">
              <div class="col-md-4">
                <div class="coll-item clearfix">
                  <div class="coll-text-1 d-flex">
                    <Link href="#"
                      ><img
                        src={email}
                        class="coll-img-1"
                        alt=""
                    /></Link>
                    <span>Shipping in a few seconds by e-mail</span>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="coll-item clearfix">
                  <div class="coll-text-1 d-flex">
                    <Link href="#"
                      ><img
                        src={support}
                        class="coll-img-1"
                        alt=""
                    /></Link>
                    <span>Free Technical Support</span>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="coll-item clearfix">
                  <div class="coll-text-1 d-flex">
                    <Link href="#"
                      ><img
                        src={payment}
                        class="coll-img-1"
                        alt=""
                    /></Link>
                    <span>Shipping in a few seconds by e-mail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shipping Section End  --> */}
    </>
  )
}

export default ShippingSection
