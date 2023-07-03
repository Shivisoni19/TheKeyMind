import React from 'react'
import { Link } from "react-router-dom";
import cards from '../../images/icons/cards.png'
import download from '../../images/icons/download.png'
import install from '../../images/icons/install.png'

const SoftwareInstallSteps = () => {
  return (
    <>
      {/* <!-- Get And Install Your Software  --> */}
          <div class="collection clearfix mt50">
            <div class="container bg-secondary border-80 pb50 pt50" id="steps">
              <div class="call-to-action">
                <h1>GET AND INSTALL YOUR SOFTWARE IN 3 EASY AND FAST STEPS</h1>
                <p>
                  more than 350.000 satisfied worldwide customers in 18 years
                </p>
              </div>
              <div class="row">
                <div class="col-md-4" id="steps2">
                  <div class="coll-item-1 clearfix">
                    <div class="coll-text-2">
                      <Link href="#"
                        ><img
                          src={cards}
                          class="coll-img-1"
                          alt=""
                      /></Link>
                      <div class="">
                        <span class="text-orange font-25">1.</span
                        ><span>BUY</span>
                      </div>
                      <p>Secure purchase <br />through SSL encryption.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4" id="steps2">
                  <div class="coll-item-1 clearfix">
                    <div class="coll-text-2">
                      <Link href="#"
                        ><img
                          src={download}
                          class="coll-img-1"
                          alt=""
                      /></Link>
                      <div class="">
                        <span class="text-orange font-25">2.</span
                        ><span>DOWNLOAD</span>
                      </div>
                      <p>
                        Immediately download <br />your software after purchase.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="coll-item-1 clearfix">
                    <div class="coll-text-2">
                      <Link href="#"
                        ><img
                          src={install}
                          class="coll-img-1"
                          alt=""
                      /></Link>
                      <div class="">
                        <span class="text-orange font-25">3.</span
                        ><span>INSTALL</span>
                      </div>
                      <p>
                        Install and activate the software,<br />Free assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Get And Install Your Software--> */}
    </>
  )
}

export default SoftwareInstallSteps
