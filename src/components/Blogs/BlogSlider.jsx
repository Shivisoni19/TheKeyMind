import React from 'react'
import { Link } from 'react-router-dom'

const BlogSlider = () => {
  return (
    <div>
      <div className="blog-post mb50">
              <div className="blog-item">
                <div className="blog-img">
                  <div className="flexslider">
                    <ul className="slides">
                      <li>
                        <img alt="" src="img/upload/blog/blog3.jpg" />
                      </li>
                      <li>
                        <img alt="" src="img/upload/blog/blog2.jpg" />
                      </li>
                      <li>
                        <img alt="" src="img/upload/blog/blog3.jpg" />
                      </li>
                    </ul>
                  </div>
                  <div className="calendar">
                    <p>02</p>
                    <span>dec</span>
                  </div>
                  <div className="blog-content">
                    <h1>This is Gallery post with image</h1>
                    <div className="post-meta">
                      <Link href="#"><i className="fa fa-user"></i> Joeby Ragpa</Link>
                      <Link href="#"><i className="fa fa-bookmark"></i> Design</Link>
                      <Link href="#"><i className="fa fa-comment"></i> 15 Comments</Link>
                    </div>
                    <p>We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
                    <Link href="#" className="small-button button-red mb10">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default BlogSlider
