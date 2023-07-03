import React from 'react'
import { Link } from 'react-router-dom';

const OfficeTopArea = () => {
  return (
    <div>
      {/* <!--  head text --> */}
        <div class="blog mb50" id="category">
			<div class="container">
			  <div class="title block-category-top">
				<h1>
				  <i class="fa fa-star"></i> MICROSOFT OFFICE<i class="fa fa-star"></i>
				</h1>
				<div class="title-border"></div>
			  </div>
			  <div class="call-to-action">
				<p>
				  Purchase Microsoft Office and benefit from genuine and guaranteed digital licenses, ensuring a seamless and reliable software experience. Our secure payment options offer added peace of mind, and in the rare event of any concerns, rest assured our comprehensive refund policy has you covered. Experience instant delivery of your order straight to your inbox, enabling you to swiftly access and utilize Microsoft Office. Should you encounter any issues or require assistance, our dedicated Customer Service team is just a message away, ready to provide prompt support and guidance.
				{/* <Link class="text-orange" href="#"> [click for more info]</Link> */}
				</p>
			  </div>
			</div>
		  </div>
		  {/* <!-- end head text --> */}
    </div>
  )
}

export default OfficeTopArea ;
