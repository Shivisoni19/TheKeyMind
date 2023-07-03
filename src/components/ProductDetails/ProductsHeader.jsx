import React from 'react'
import { Link } from "react-router-dom";

const ProductsHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Microsoft Office </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Windows 11</u></Link>
		</div>
    </>
  )
}

export default ProductsHeader ;
