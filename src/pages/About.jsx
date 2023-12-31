import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import AboutContent from '../components/About/AboutContent'
import { Helmet } from "react-helmet";
import AboutHeading from '../components/About/AboutHeading';

const About = () => {
  const meta = {
    title: 'About Us | The Keymind',
    description: 'We possess within us two minds. So far I have written only of the conscious mind.We further know that the subconscious has recorded every event. This is just perfect theme.',
    // canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      robots: 'noindex,nofollow', // Add the robots meta tag
      googlebot: 'noindex,nofollow' // Add the googlebot meta tag
    }
  };

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <link rel="canonical" href={meta.canonical} /> */}
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <AboutHeader/>
      <AboutHeading/>
      <AboutContent/>
    </>
  )
}

export default About
