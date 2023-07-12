import React from 'react'
import Microsoft365Header from '../components/Microsoft365/Microsoft365Header'
import Microsoft365Heading from '../components/Microsoft365/Microsoft365Heading'
import Microsoft365Products from '../components/Microsoft365/Microsoft365Products'
import Microsoft365Main from '../components/Microsoft365/Microsoft365Main'

const Microsoft365 = () => {
  return (
    <div>
       <Microsoft365Header/>
       <Microsoft365Heading/>
       <Microsoft365Products/>
       <Microsoft365Main/>
    </div>
  )
}

export default Microsoft365
