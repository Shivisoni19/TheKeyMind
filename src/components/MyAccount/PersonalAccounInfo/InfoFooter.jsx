import React from 'react'
import { Link } from 'react-router-dom'

const InfoFooter = () => {
  return (
    <>
      <div className='text-center'>
        {/* <span className='text-dark'>Already have an account?</span>
        <Link className='text-orange' to="/login"> Log in instead!</Link> */}
      </div>
      <div className='text-center' style={{paddingBottom:"4em"}}>
        <input type='checkbox' className='m-0' style={{margin:"0"}}/><span className='text-dark'>I accept the   <Link className='text-orange'> general conditions</Link>  and the<Link className='text-orange'> privacy policy</Link>.</span>
      </div>
    </>
  )
}

export default InfoFooter
