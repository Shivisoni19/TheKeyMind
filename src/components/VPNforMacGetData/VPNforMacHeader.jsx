import React from 'react'
import { Link } from "react-router-dom";

const VPNforMacHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> VPN </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> VPN for Mac </u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default VPNforMacHeader ;
