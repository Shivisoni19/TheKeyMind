import React from 'react'
import { Link } from "react-router-dom";

const AOMEIHeader = ({name}) => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
            <Link href=""><u> Backup & Recovery </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> AOMEI </u></Link>
      <span><i>|</i></span>
			<Link class="active" href=""><u>{name}</u></Link>
		</div>
    </>
  )
}

export default AOMEIHeader ;
