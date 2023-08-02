import React from 'react'
import { Link } from "react-router-dom";

const McAfeeHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Antivirus </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> McAfee </u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default McAfeeHeader ;
