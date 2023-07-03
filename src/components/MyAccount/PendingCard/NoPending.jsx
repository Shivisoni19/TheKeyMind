import React from 'react'

const NoPending = () => {
  return (
    <div>
      <div className='container'>
        <div className='card no-history-card alert-warning mb50'>
            <h4>You do not have any pending gift cards.</h4>
        </div>
        {/* <p className='mt20 text-dark mb20'>You do not have any pending gift cards.</p> */}
      </div>
    </div>
  )
}

export default NoPending
