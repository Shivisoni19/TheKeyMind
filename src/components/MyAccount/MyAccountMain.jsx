import React from "react";
import { Link } from "react-router-dom";

const MyAccountMain = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/personalaccount">
                  <i className="fa fa-user"></i>
                  <h4 className="text-uppercase-none">Information</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link  to="/personaladdress">
                  <i className="fa fa-map-marker"></i>
                  <h4 className="text-uppercase-none">Add Addresses</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/orderhistory">
                  <i className="fa fa-calendar"></i>
                  <h4 className="text-uppercase-none">
                    Order history and details
                  </h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt30">
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/vouchers">
                  <i className="fa fa-tag"></i>
                  <h4 className="text-uppercase-none">Vouchers</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/merchandise">
                  <i className="fa fa-undo"></i>
                  <h4 className="text-uppercase-none">Merchandise returns</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/keys">
                  <i className="fa fa-id-card"></i>
                  <h4 className="text-uppercase-none">GDPR - Personal data</h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt30">
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/keys">
                  <i className="fa fa-key"></i>
                  <h4 className="text-uppercase-none">My Keys</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/myalert">
                  <i className="fa fa-envelope-open"></i>
                  <h4 className="text-uppercase-none">My Alerts</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/myaccount">
                  <i className="fa fa-users"></i>
                  <h4 className="text-uppercase-none">Become affiliate</h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="row mt30">
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/mycart">
                  <i className="fa fa-shopping-cart"></i>
                  <h4 className="text-uppercase-none">My shopping carts</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/purchasecard">
                  <i className="fa fa-money"></i>
                  <h4 className="text-uppercase-none">Purchased Giftcards</h4>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="serv-box">
                <Link to="/pendingcard">
                  <i className="fa fa-credit-card"></i>
                  <h4 className="text-uppercase-none">Pending Giftcards</h4>
                </Link>
              </div>
            </div>
          </div>

          <div className="sign-out-btn mt30">
            <button href="#" className="md-btn button-orange">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccountMain;
