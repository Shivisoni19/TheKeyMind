import React from 'react'
import { Link } from 'react-router-dom'

const TermsHeader = () => {
  return (
    <div>
      <div class="lateralnav">
                <Link href=""><u> Home </u></Link>
                <span><i>|</i></span>
                <Link class="active" href=""><u> Terms and Conditions </u></Link>
            </div>
    </div>
  )
}

export default TermsHeader
