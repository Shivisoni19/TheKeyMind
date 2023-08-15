import React from 'react'
import SystemHeader from '../components/OperatingSystem/SystemHeader'
import SystemTopArea from '../components/OperatingSystem/SystemTopArea'
import SystemMain from '../components/OperatingSystem/SystemMain'
import SystemProducts from '../components/OperatingSystem/SystemProducts'
import { Helmet } from "react-helmet";

const OperatingSystem = () => {

  const meta = {
    title: 'Operating System | The Keymind',
    description: 'I am a description, and I can create multiple tags',
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
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <SystemHeader/>
      <SystemTopArea/>
      <SystemProducts/>
      <SystemMain/>
    </div>
  )
}

export default OperatingSystem
