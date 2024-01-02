import React from 'react'
import { Link } from "react-router-dom";

const BestsellerHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			  <Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
        <Link href=""><u> Bestseller </u></Link>
			{/* <span><i>|</i></span>
			<Link class="active" href=""><u> ESET </u></Link> */}
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default BestsellerHeader ;
