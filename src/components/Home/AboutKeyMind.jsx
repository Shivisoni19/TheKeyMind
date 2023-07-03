import React from 'react'
import { Link } from "react-router-dom";

const AboutKeyMind = () => {
  return (
    <>
      {/* <!--about key mind shop --> */}
          <div class="blog">
            <div class="container">
              <div class="title">
                <h1>
                  <i class="fa fa-star"></i>The Key Mind<i
                    class="fa fa-star"
                  ></i>
                </h1>
                <div class="title-border"></div>
              </div>
              <div class="call-to-action">
                <p>
                  <span class="f-900">Mr Key Shop</span> is a brand owned by UK
                  Soft LTD, London, with offices dedicated to our free
                  <span class="f-900">English-speaking Customer Service</span>.
                  We've been operating in the IT market for over 18 years, with
                  350k+ customers served by our team of experts. Mr Key Shop is
                  among the digital market leaders in the global software retail
                  segment. We work hard to offer efficiency, professional
                  service, and protect the environment. Our business model is
                  100% digitalized and our products are only delivered via email
                  to cut pollution and packaging waste.
                  <span class="f-900"
                    >Mr Key Shop is an Eco-Friendly Company!
                  </span>
                </p>
                <p>
                  <span class="f-900"
                    >Competitive prices, instant delivery, secure payments, and
                    our free specialized support in ENGLISH </span
                  >are our key strengths and source of pride across our team.
                </p>
                <p>Check our great offers and help us make the world Greener</p>
                <p>
                  Enjoy your shopping on
                  <Link href="#" class="text-orange"> mrkeyshop.com</Link>
                </p>
              </div>
            </div>
          </div>
          {/* <!--about key mind shop end -->  */}
    </>
  )
}

export default AboutKeyMind
