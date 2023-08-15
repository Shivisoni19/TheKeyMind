import React from 'react'
import EaseUsHeader from '../components/EaseUs/EaseUsHeader'
import EaseUsHeading from '../components/EaseUs/EaseUsHeading'
import EaseUsProducts from '../components/EaseUs/EaseUsProducts'
import EaseUsMain from '../components/EaseUs/EaseUsMain'
import { Helmet } from 'react-helmet'

const EaseUS = () => {
  const meta = {
    title: 'Download EaseUs for Data Recovery, Backup ETC.',
    description: 'EaseUS is one of the biggest names in the world of data recovery software, and its Data Recovery',
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
      <EaseUsHeader/>
      <EaseUsHeading/>
      <EaseUsProducts/>
      <EaseUsMain/>
    </>
  )
}

export default EaseUS
