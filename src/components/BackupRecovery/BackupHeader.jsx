import React from 'react'
import { Link } from "react-router-dom";

const BackupHeader = () => {
  return (
    <>
      <div class="lateralnav">
			<Link href=""><u> Home </u></Link>
			<span><i>|</i></span>
			<Link class="active" href=""><u> Backup and Recovery </u></Link>
		</div>
    </>
  )
}

export default BackupHeader ;
