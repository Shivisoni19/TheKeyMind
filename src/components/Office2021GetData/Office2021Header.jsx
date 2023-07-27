import React from 'react'
import { Link } from "react-router-dom";

const Office2021Header = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Microsoft Office </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u>Microsoft Office 2021</u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default Office2021Header ;
