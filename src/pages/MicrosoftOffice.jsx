import React from 'react'
import OfficeHeader from '../components/MicrosoftOffice/OfficeHeader'
import OfficeMain from '../components/MicrosoftOffice/OfficeMain';
import OfficeTopArea from '../components/MicrosoftOffice/OfficeTopArea';
import OfficeProduct from '../components/MicrosoftOffice/OfficeProduct';
import { Helmet } from "react-helmet";

const MicrosoftOffice = () => {

  const meta = {
    title: 'Get Microsoft offices pack for all device.',
    description: 'Start quickly with the most recent versions of Word, Excel, PowerPoint, Outlook, OneNote and OneDrive —combining the familiarity.',
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
    <>
    <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <OfficeHeader/>
      <OfficeTopArea/>
      <OfficeProduct/>
      <OfficeMain/>
    </>
  )
}

export default MicrosoftOffice;
