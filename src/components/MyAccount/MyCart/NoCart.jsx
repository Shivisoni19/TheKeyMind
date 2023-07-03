import React from 'react'

const NoCart = () => {
  return (
    <>
      <div className='container'>
        <div className='card no-history-card alert-warning mb50'>
            <h4>No content</h4>
        </div>
        <p className='mt20 text-dark mb20'>Here are the shopping carts you have saved</p>
      </div>
    </>
  )
}

export default NoCart
