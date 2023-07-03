import React from 'react'
import { Link } from 'react-router-dom';

const AntivirusTopArea = () => {
  return (
    <div>
      {/* <!--  head text --> */}
        <div class="blog mb50" id="category">
			<div class="container">
			  <div class="title block-category-top">
				<h1>
				  <i class="fa fa-star"></i> Antivirus<i class="fa fa-star"></i>
				</h1>
				<div class="title-border"></div>
			  </div>
			  <div class="call-to-action">
				<p>
				Secure your systems with leading antivirus software from TheKeymind. Purchase your antivirus at a competitive price, with genuine subscription licenses, secure payments, and a full money-back warranty. Instantly protect your devices with top-notch antivirus suites. Receive your order via email within seconds and enjoy peace of mind knowing your digital security is in good hands.
				<Link class="text-orange" href="#"> [click for more info]</Link></p>
			  </div>
			</div>
		  </div>
		  {/* <!-- end head text --> */}
    </div>
  )
}

export default AntivirusTopArea ;
