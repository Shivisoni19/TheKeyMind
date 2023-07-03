import React from 'react'
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Login </u></Link>
		</div>
    </>
  )
}

export default LoginHeader
