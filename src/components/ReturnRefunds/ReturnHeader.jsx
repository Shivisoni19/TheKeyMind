import React from 'react'
import { Link } from 'react-router-dom'

const ReturnHeader = () => {
  return (
    <>
      <div class="lateralnav">
            <Link href=""><u> Home </u></Link>
            <span><i>|</i></span>
            <Link class="active" href=""><u>Return and Refunds</u></Link>
      </div>
    </>
  )
}

export default ReturnHeader
