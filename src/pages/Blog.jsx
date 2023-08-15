import React from 'react'
// import BlogHeader from '../components/Blogs/BlogHeader'
import BlogMain from '../components/Blogs/BlogMain'
import BlogHeading from '../components/Blogs/BlogHeading'
import { Helmet } from "react-helmet";

const Blog = () => {
  const meta = {
    title: 'Blogs | The Keymind',
    description: 'I am a description, and I can create multiple tags',
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
      {/* <BlogHeader/> */}
      <BlogHeading/>
      <BlogMain/>
    </>
  )
}

export default Blog
