import React from 'react'
import { Link } from "react-router-dom";

const ServerHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u>Microsoft Server  </u></Link>
		</div>
    </>
  )
}

export default ServerHeader ;
