import React from 'react'
import WindowsServerCalHeader from '../components/WindowsServerCal/WindowsServerCalHeader'
import WindowsServerCalHeading from '../components/WindowsServerCal/WindowsServerCalHeading'
import WindowsServerCalProducts from '../components/WindowsServerCal/WindowsServerCalProducts'
import WindowsServerCalMain from '../components/WindowsServerCal/WindowsServerCalMain'
import { Helmet } from 'react-helmet'

const WindowsServerCal = () => {
  const meta = {
    title: 'Windows Server CAL licenses for your Business',
    description: 'Windows Server CAL licenses, namely Client Access Licenses for your instance of Windows Server you’re in the right place! Order your CAL licenses for devices.',
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
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
       <WindowsServerCalHeader/>
       <WindowsServerCalHeading/>
       <WindowsServerCalProducts/>
       <WindowsServerCalMain/>
    </div>
  )
}

export default WindowsServerCal
