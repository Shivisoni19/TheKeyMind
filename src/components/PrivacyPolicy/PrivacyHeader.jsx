import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyHeader = () => {
  return (
    <div>
      <div class="lateralnav">
                <Link href=""><u> Home </u></Link>
                <span><i>|</i></span>
                <Link class="active" href=""><u> Privacy Policy </u></Link>
            </div>
    </div>
  )
}

export default PrivacyHeader
