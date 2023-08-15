import React from 'react'
import ServerHeader from '../components/Server/ServerHeader';
import ServerTopArea from '../components/Server/ServerTopArea';
import ServerMain from '../components/Server/ServerMain';
import ServerProducts from '../components/Server/ServerProducts';
import { Helmet } from "react-helmet";

const Server = () => {
  const meta = {
    title: 'Microsoft Server | The Keymind',
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
    <>
    <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
      <ServerHeader/>
      <ServerTopArea/>
      <ServerProducts/>
      <ServerMain/>
    </>
  )
}

export default Server;
