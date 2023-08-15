import React from 'react'
import Win11Header from '../components/Windows11/Win11Header'
import Win11Heading from '../components/Windows11/Win11Heading'
import Win11Products from '../components/Windows11/Win11Products'
import Win11Main from '../components/Windows11/Win11Main'
import { Helmet } from 'react-helmet'

const Windows11 = () => {
  const meta = {
    title: 'Windows 11 Generic Products Keys for Various Editions',
    description: 'Windows 11 Product Keys For All Versions 32bit+64bit (2023). To permanently activate it Stay Safe Online & Protect, are you looking for the Win11.',
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
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add google bot meta tag */}
      </Helmet>
      <Win11Header/>
      <Win11Heading/>
      <Win11Products/>
      <Win11Main/>
    </>
  )
}

export default Windows11
