import React from 'react'
import BackupHeader from '../components/BackupRecovery/BackupHeader';
import BackupTopArea from '../components/BackupRecovery/BackupTopArea';
import BackupMain from '../components/BackupRecovery/BackupMain';
import BackupProducts from '../components/BackupRecovery/BackupProducts';
import { Helmet } from "react-helmet";

const BackupRecovery = () => {
  const meta = {
    title: 'Data Back Up and Recovery - Simple and Secure Recovery ',
    description: 'The Keymind is the preferred choice for data backup & recovery. Try Our Multi-Cloud Solution! Protected, safeguard you data and experiance peace of mind today.',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex, nofollow', // Add the robots meta tag
      googlebot: 'noindex, nofollow' // Add the googlebot meta tag
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
      <BackupHeader/>
      <BackupTopArea/>
      <BackupProducts/>
      <BackupMain/>
    </>
  )
}

export default BackupRecovery
