import React from 'react'
import { Link } from "react-router-dom";

const ESETHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Antivirus </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> ESET </u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default ESETHeader ;
