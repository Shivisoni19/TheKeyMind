import React from 'react'
import { Link } from "react-router-dom";

const SystemHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Operating System </u></Link>
		</div>
    </>
  )
}

export default SystemHeader
