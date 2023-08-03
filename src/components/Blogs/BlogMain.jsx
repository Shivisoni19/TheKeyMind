import React from 'react';
import BlogLeftSide from './BlogLeftSide';
import BlogTabs from './BlogTabs';
import { Link } from 'react-router-dom';

const BlogMain = () => {
  return (
    <div className="blog-container">
      <div className="container">
        <div className="row">
          
          <BlogLeftSide/>
          <div className="col-md-4">
            <aside>  
              <BlogTabs/>
              <div className="tags mb10">
                <h1 className="asidetitle">Tags</h1>
                <ul>
                  <li><Link href="#">E-commerce</Link></li>
                  <li><Link href="#">Elegant</Link></li>
                  <li><Link href="#">Store</Link></li>
                  <li><Link href="#">Clean</Link></li>
                  <li><Link href="#">Modern</Link></li>
                  <li><Link href="#">Fashion</Link></li>
                  <li><Link href="#">Classic</Link></li>
                  <li><Link href="#">Beauty</Link></li>
                  <li><Link href="#">Jeans</Link></li>
                  <li><Link href="#">Clothing</Link></li>
                </ul>
                <div className="clear"></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
