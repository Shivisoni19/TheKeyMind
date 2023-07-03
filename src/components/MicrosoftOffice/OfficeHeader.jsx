import React from 'react'
import { Link } from "react-router-dom";

const OfficeHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Microsoft Office </u></Link>
		</div>
    </>
  )
}

export default OfficeHeader
