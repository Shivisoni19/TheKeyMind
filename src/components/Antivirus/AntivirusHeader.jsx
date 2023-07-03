import React from 'react'
import { Link } from "react-router-dom";

const AntivirusHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Antivirus </u></Link>
		</div>
    </>
  )
}

export default AntivirusHeader
