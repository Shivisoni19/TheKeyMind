import React from 'react'

const NoPurchase = () => {
  return (
    <div>
      <div className='container'>
        <div className='card no-history-card alert-warning mb50'>
            <h4>You did not purchased any Gift card yet.</h4>
        </div>
        {/* <p className='mt20 text-dark mb20'>You did not purchased any Gift card yet.</p> */}
      </div>
    </div>
  )
}

export default NoPurchase
