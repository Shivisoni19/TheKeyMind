import React from 'react'
import { Link } from "react-router-dom";

const WindowsServerHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Microsoft Server</u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Microsoft Windows Server</u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default WindowsServerHeader ;
