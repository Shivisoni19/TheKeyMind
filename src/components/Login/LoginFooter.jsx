import React from 'react'
import { Link } from 'react-router-dom'

const LoginFooter = () => {
  return (
    <>
      <div className='text-center'>
        <span className='text-dark'>You don't have an account?</span>
        <Link className='text-orange'> Register for free here</Link>
      </div>
    </>
  )
}

export default LoginFooter
