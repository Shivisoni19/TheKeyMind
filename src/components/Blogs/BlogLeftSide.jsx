import React from 'react'
import {Link }from 'react-router-dom'

const BlogLeftSide = () => {
  return (
    <>
      <div className="col-md-8">
            <div className="blog-post mb50">
              <div className="blog-item">
                <div className="blog-img">
                  <Link href="#"><img src="img/blog/blog-banner.jpg" alt="" /></Link>
                  <div className="calendar">
                    <p>02</p>
                    <span>dec</span>
                  </div>
                  <div className="blog-content">
                    <h1>This is standard post with image</h1>
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

            {/* <div className="blog-post mb50">
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
            </div> */}

            <div className="blog-post mb50">
              <div className="blog-item">
                <div className="blog-img">
                  <iframe className="videoembed" src="http://www.youtube.com/embed/jwZUjdImZGk"></iframe>
                  <div className="calendar">
                    <p>02</p>
                    <span>dec</span>
                  </div>
                  <div className="blog-content">
                    <h1>This is video post example</h1>
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

            <div className="blog-post mb50">
              <div className="blog-item">
                <div className="blog-img">
                  <div className="calendar">
                    <p>02</p>
                    <span>dec</span>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta quote">
                      <Link href="#"><i className="fa fa-user"></i> Joeby Ragpa</Link>
                      <Link href="#"><i className="fa fa-bookmark"></i> Design</Link>
                      <Link href="#"><i className="fa fa-comment"></i> 15 Comments</Link>
                    </div>
                    <blockquote>“Sometimes life knocks you on your ass... get up, get up, get up!!! Happiness is not the absence of problems, it's the ability to deal with them.”</blockquote>
                    <span className="block-user">— Steve Maraboli</span>
                    <Link href="#" className="small-button button-red mb10">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-post mb20">
              <div className="blog-item">
                <div className="blog-img">
                  <div className="calendar">
                    <p>02</p>
                    <span>dec</span>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta quote">
                      <Link href="#"><i className="fa fa-user"></i> Joeby Ragpa</Link>
                      <Link href="#"><i className="fa fa-bookmark"></i> Design</Link>
                      <Link href="#"><i className="fa fa-comment"></i> 15 Comments</Link>
                    </div>
                    <h1>This is text post example</h1>
                    <p>We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination.</p>
                    <Link href="#" className="small-button button-red mb10">Read More</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pagenation blog-pagenation clearfix">
              <ul>
                <li className="active"><Link href="#">1</Link></li>
                <li><Link href="#">2</Link></li>
                <li><Link href="#">3</Link></li>
                <li><Link href="#">4</Link></li>
                <li><Link href="#">5</Link></li>
                <li><Link href="#">&gt;</Link></li>
              </ul>
            </div>
            <div className="clear"></div>
          </div>
    </>
  )
}

export default BlogLeftSide
