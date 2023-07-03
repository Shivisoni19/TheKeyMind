import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
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
