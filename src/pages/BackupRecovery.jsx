import React from 'react'
import BackupHeader from '../components/BackupRecovery/BackupHeader';
import BackupTopArea from '../components/BackupRecovery/BackupTopArea';
import BackupMain from '../components/BackupRecovery/BackupMain';
import BackupProducts from '../components/BackupRecovery/BackupProducts';
import { Helmet } from "react-helmet";

const BackupRecovery = () => {
  const meta = {
    title: 'Backup and Recovery',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'index,follow', // Add the robots meta tag
      googlebot: 'index,follow' // Add the googlebot meta tag
    }
  };
  return (
    <>
    <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
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
