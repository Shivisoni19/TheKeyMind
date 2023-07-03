import React from 'react'
import { Link } from 'react-router-dom'

const ShippingHeader = () => {
  return (
    <>
      <div class="lateralnav">
            <Link href=""><u> Home </u></Link>
            <span><i>|</i></span>
            <Link class="active" href=""><u>Shipping</u></Link>
      </div>
    </>
  )
}

export default ShippingHeader
