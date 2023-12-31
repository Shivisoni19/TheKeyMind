import React from 'react'
import { Link } from "react-router-dom";

const Windows7Header = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Operating Systems </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Windows 7</u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default Windows7Header ;
