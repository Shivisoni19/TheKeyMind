import React from 'react'
import WindowsServerHeader from '../components/WindowsServer/WindowsServerHeader'
import WindowsServerHeading from '../components/WindowsServer/WindowsServerHeading'
import WindowsServerProducts from '../components/WindowsServer/WindowsServerProducts'
import WindowsServerMain from '../components/WindowsServer/WindowsServerMain'
import { Helmet } from 'react-helmet'

const WindowsServer = () => {
  const meta = {
    title: 'Buy Microsoft Windows Server from The Keymind',
    description: 'Our products are always digitally delivered after each transaction, with SSL-secured payments, and a full money-back warranty. Windows Server are still in active use today.',
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
       <WindowsServerHeader/>
       <WindowsServerHeading/>
       <WindowsServerProducts/>
       <WindowsServerMain/>
    </div>
  )
}

export default WindowsServer
