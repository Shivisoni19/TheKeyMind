import React from 'react'
import { Link } from 'react-router-dom'

const AccountButtons = () => {
  return (
    <>
      <div className='account-btn mt20 mb40'>
          <div className="sign-out-btn">
            <Link to="/myaccount">
            <button href="#" className="md-btn button-orange">
              Back to your account
            </button>
            </Link>
          </div>
          <div className="sign-out-btn home-btn">
          <Link to="/">
            <button href="#" className="md-btn button-orange">
              Home
            </button>
            </Link>
          </div>
      </div>
    </>
  )
}

export default AccountButtons
