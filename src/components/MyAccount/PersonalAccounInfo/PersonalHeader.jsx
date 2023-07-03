import React from 'react'
import { Link } from "react-router-dom";

const PersonalHeader = () => {
  return (
    <>
      <div class="lateralnav">
                <Link href=""><u> Home </u></Link>
                <span><i>|</i></span>
                <Link class="active" href=""><u> Your Account </u></Link>
            </div>
    </>
  )
}

export default PersonalHeader;
