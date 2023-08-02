import React from 'react'
import { Link } from "react-router-dom";

const MicrosoftOfcAppHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Microsoft Office </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u>Microsoft Office App</u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default MicrosoftOfcAppHeader ;
