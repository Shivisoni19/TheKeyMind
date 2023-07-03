import React from 'react'
import { Link } from 'react-router-dom'

const CookieHeader = () => {
  return (
    <div>
      <div class="lateralnav">
            <Link href=""><u> Home </u></Link>
              <span><i>|</i></span>
            <Link class="active" href=""><u> Cookie Policy </u></Link>
       </div>
    </div>
  )
}

export default CookieHeader
