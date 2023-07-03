import React from 'react'

const NoKeys = () => {
  return (
    <>
      <div className='container'>
        <div className='card no-history-card alert-warning mb50'>
            <h4>You haven't ordered key.</h4>
        </div>
        {/* <p className='mt20 text-dark mb20'>Here are the orders you've placed since your account was created.</p> */}
      </div>
    </>
  )
}

export default NoKeys
