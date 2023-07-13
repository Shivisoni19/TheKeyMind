import React from 'react';
import BlogLeftSide from './BlogLeftSide';

const BlogMain = () => {
  return (
    <div className="blog-container">
      <div className="container">
        <div className="row">
          
          <BlogLeftSide/>
          <div className="col-md-4">
            <aside>
              <div className="blog-search mb30">
                <input type="text" placeholder="Search" />
                <input type="submit" value="" />
              </div>

              <div className="shop-categories mb30">
                <h1 className="asidetitle">Categories</h1>
                <ul>
                  <li><a href="#">Design <span>(25)</span></a></li>
                  <li><a href="#">Typography <span>(235)</span></a></li>
                  <li><a href="#">Business <span>(89)</span></a></li>
                  <li><a href="#">Photography <span>(109)</span></a></li>
                  <li><a href="#">Fashion <span>(129)</span></a></li>
                  <li><a href="#">Hot Trends <span>(123)</span></a></li>
                </ul>
              </div>

              <div className="normal-tabs left-widget mb30">
                <div className="tabs-widget clearfix">
                  <ul className="tab-links clearfix">
                    <li className="active"><a href="#description">Popular Posts</a></li>
                    <li><a href="#clean">Latest Posts</a></li>
                  </ul>
                  <div id="description" style={{ display: 'block' }}>
                    <ul>
                      <li>
                        <a href="#">
                          <img src="upload/tabswidget1.jpg" alt="" />
                          <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                          <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="upload/tabswidget2.jpg" alt="" />
                          <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                          <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div id="clean" style={{ display: 'none' }}>
                    <ul>
                      <li>
                        <a href="#">
                          <img src="upload/tabswidget1.jpg" alt="" />
                          <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                          <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="upload/tabswidget2.jpg" alt="" />
                          <p>Sweet Pick lorem ipsum is a simple and elegant</p>
                          <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flickr mb30">
                <h1 className="asidetitle">Flickr</h1>
                <div className="row mb20">
                  <div className="col-sm-4">
                    <a href="#"><img src="upload/gallery1.jpg" alt="" /></a>
                  </div>
                  <div className="col-sm-4">
                    <a href="#"><img src="upload/gallery2.jpg" alt="" /></a>
                  </div>
                  <div className="col-sm-4">
                    <a href="#"><img src="upload/gallery3.jpg" alt="" /></a>
                  </div>
                </div>
                <div className="row mb20">
                  <div className="col-sm-4">
                    <a href="#"><img src="upload/gallery4.jpg" alt="" /></a>
                  </div>
                  <div className="col-sm-4">
                    <a href="#"><img src="upload/gallery5.jpg" alt="" /></a>
                  </div>
                  <div className="col-sm-4">
                    <a href="#"><img src="upload/gallery1.jpg" alt="" /></a>
                  </div>
                </div>
              </div>

              <div className="tags mb10">
                <h1 className="asidetitle">Tags</h1>
                <ul>
                  <li><a href="#">E-commerce</a></li>
                  <li><a href="#">Elegant</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Clean</a></li>
                  <li><a href="#">Modern</a></li>
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Classic</a></li>
                  <li><a href="#">Beauty</a></li>
                  <li><a href="#">Jeans</a></li>
                  <li><a href="#">Clothing</a></li>
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
