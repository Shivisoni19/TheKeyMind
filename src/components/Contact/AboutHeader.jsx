import React from 'react'
import { Link } from "react-router-dom";

const AboutHeader = () => {
  return (
    <>
     <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> About Us </u></Link>
		</div> 
    </>
  )
}

export default AboutHeader
