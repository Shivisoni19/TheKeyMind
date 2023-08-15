import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartHeading from "../components/Cart/CartHeading";
import CartMain from "../components/Cart/CartMain";
import { Helmet } from "react-helmet";

const Cart = () => {
  const meta = {
    title: 'Cart | The Keymind',
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
    <div className="checkout">
      <div className="container">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta charSet={meta.meta.charset} />
        <meta name="keywords" content={meta.meta.name.keywords} />
        <meta name="robots" content={meta.meta.robots} /> {/* Add robots meta tag */}
        <meta name="googlebot" content={meta.meta.googlebot} /> {/* Add googlebot meta tag */}
      </Helmet>
        <CartHeading/>
        <CartMain/>    
      </div>
    </div>
  );
};

export default Cart;
