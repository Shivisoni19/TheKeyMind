import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
  const meta = {
    title: 'Page404',
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
      <div className="page-not-found-bg">
        <div className="container">
          <div className="page404text">
            <h1>THIS PAGE DOES NOT EXISTS!</h1>
            <p>You might try searching our site or visit the</p>
            <p>
              <Link to="/">
                <button href="#" className="home-btn button-orange">
                   HomePage
                </button>
              </Link>
            </p>
            {/* <form action="#">
              <input type="text" placeholder="Search" />
              <input type="submit" value="" />
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
