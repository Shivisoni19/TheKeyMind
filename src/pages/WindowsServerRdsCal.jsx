import React from 'react'
import WindowsServerRdsCalHeader from '../components/WindowsServerRdsCal/WindowsServerRdsCalHeader'
import WindowsServerRdsCalHeading from '../components/WindowsServerRdsCal/WindowsServerRdsCalHeading'
import WindowsServerRdsCalProducts from '../components/WindowsServerRdsCal/WindowsServerRdsCalProducts'
import WindowsServerRdsCalMain from '../components/WindowsServerRdsCal/WindowsServerRdsCalMain'
import { Helmet } from 'react-helmet'

const WindowsServerRdsCal = () => {
  const meta = {
    title: 'Microsoft Windows Server RDS CAL - The Keymind',
    description: 'Buy Windows Server RDS CAL now, at the best price, from the keymind. We only offer genuine and guaranteed licenses, with secure and tracked payment methods.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the google bot meta tag
    }
  };
  return (
    <div>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
       <WindowsServerRdsCalHeader/>
       <WindowsServerRdsCalHeading/>
       <WindowsServerRdsCalProducts/>
       <WindowsServerRdsCalMain/>
    </div>
  )
}

export default WindowsServerRdsCal
