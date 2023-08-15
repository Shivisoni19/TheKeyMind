import React from 'react'
import KasperskyHeader from '../components/Kaspersky/KasperskyHeader'
import KasperskyHeading from '../components/Kaspersky/KasperskyHeading'
import KasperskyProducts from '../components/Kaspersky/KasperskyProducts'
import KasperskyMain from '../components/Kaspersky/KasperskyMain'
import { Helmet } from 'react-helmet'

const Kaspersky = () => {
  const meta = {
    title: ' Kaspersky Antivirus 2023 - Buy Now From The keymind ',
    description: 'Kaspersky Antivirus software available. It protects your devices from malicious programs, spyware, and any kind of malware',
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
       <KasperskyHeader/>
       <KasperskyHeading/>
       <KasperskyProducts/>
       <KasperskyMain/>
    </div>
  )
}

export default Kaspersky
