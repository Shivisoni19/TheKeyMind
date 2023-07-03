import React from 'react'
import { Link } from "react-router-dom";

const SignupHeader = () => {
    return (
        <>
          <div class="lateralnav">
                <Link href=""><u> Home </u></Link>
                <span><i>|</i></span>
                <Link class="active" href=""><u> Registration </u></Link>
            </div>
        </>
      )
}

export default SignupHeader
