import React from 'react'
import AVASTHeader from '../components/AVAST/AVASTHeader'
import AVASTHeading from '../components/AVAST/AVASTHeading'
import AVASTProducts from '../components/AVAST/AVASTProducts'
import AVASTMain from '../components/AVAST/AVASTMain'
import { Helmet } from "react-helmet";

const AVAST = () => {
  const meta = {
    title: 'Avast Premium Security 2023 | Antivirus Protection Software',
    description: 'Download Avast virus protection for Windows PC. Avast offers modern antivirus for today complex threats. Fast, simple, and 100% Premium. Try it today!',
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
       <AVASTHeader/>
       <AVASTHeading/>
       <AVASTProducts/>
       <AVASTMain/>
    </div>
  )
}

export default AVAST
