import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PopularPosts = () => (
  <ul>
    <li>
      <Link to="#">
        <img src="upload/tabswidget1.jpg" alt="" />
        <p>Sweet Pick lorem ipsum is a simple and elegant</p>
        <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
      </Link>
    </li>
    <li>
      <Link to="#">
        <img src="upload/tabswidget2.jpg" alt="" />
        <p>Sweet Pick lorem ipsum is a simple and elegant</p>
        <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
      </Link>
    </li>
  </ul>
);

const LatestPosts = () => (
  <ul>
    <li>
      <Link to="#">
        <img src="upload/tabswidget1.jpg" alt="" />
        <p>Blog Latest Post</p>
        <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
      </Link>
    </li>
    <li>
      <Link to="#">
        <img src="upload/tabswidget2.jpg" alt="" />
        <p>Blog Details</p>
        <span><i className="fa fa-clock-o"></i> 15 June, 2014</span>
      </Link>
    </li>
  </ul>
);

const BlogTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="normal-tabs left-widget mb30">
        <div className="tabs-widget clearfix">
          <ul className="tab-links clearfix">
            <li className={activeTab === 'description' ? 'active' : ''}>
              <Link to="#" onClick={() => handleTabClick('description')}>
                Popular Posts
              </Link>
            </li>
            <li className={activeTab === 'clean' ? 'active' : ''}>
              <Link to="#" onClick={() => handleTabClick('clean')}>
                Latest Posts
              </Link>
            </li>
          </ul>
          <div style={{ display: activeTab === 'description' ? 'block' : 'none' }}>
            <PopularPosts />
          </div>
          <div style={{ display: activeTab === 'clean' ? 'block' : 'none' }}>
            <LatestPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTabs;
