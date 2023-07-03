import React from 'react'
import { Link } from 'react-router-dom';

const AntivirusTopArea = () => {
  return (
    <div>
      {/* <!--  head text --> */}
        <div class="blog" id="category">
			<div class="container">
			  <div class="title block-category-top">
				<h1>
				  <i class="fa fa-star"></i> Antivirus<i class="fa fa-star"></i>
				</h1>
				<div class="title-border"></div>
			  </div>
			  <div class="call-to-action">
				<p>
				  The Antivirus is available for any PC model or device on which installation is supported. We aim to always offer our customers the very best market prices on Microsoft licenses. All our software products have a lifetime license, and our customer service is always prepared to assist you in choosing the product that best suits your needs.
				<Link class="text-orange" href="#"> [click for more info]</Link></p>
				<p>
				  <span class="f-900"
					>Competitive prices, instant delivery, secure payments, and
					our free specialized support in ENGLISH </span
				  >are our key strengths and source of pride across our team.
				</p>
				{/* <!-- <p>Check our great offers and help us make the world Greener</p>
				<p>
				  Enjoy your shopping on
				  <a href="#" class="text-orange"> mrkeyshop.com</a>
				</p> --> */}
			  </div>
			</div>
		  </div>
		  {/* <!-- end head text --> */}
    </div>
  )
}

export default AntivirusTopArea ;
