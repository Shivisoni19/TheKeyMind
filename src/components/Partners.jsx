import React from 'react'
import { Link } from "react-router-dom";
import partner1 from "../images/brands/1.png";
import partner2 from "../images/brands/2.png";
import partner3 from "../images/brands/3.png";
import partner4 from "../images/brands/4.png";
import partner5 from "../images/brands/5.png";
import partner6 from "../images/brands/6.png";

const Partners = () => {
  return (
    <>
       <div className="partners">
          <div className="container">
            <div className="row">
              <div className="col-sm-2">
                <Link to="/microsoftoffice">
                  <img src={partner1} alt="" />
                </Link>
              </div>
              <div className="col-sm-2">
                <Link to="/operatingsystem">
                  <img src={partner2} alt="" />
                </Link>
              </div>
              <div className="col-sm-2">
                <Link to="/server">
                  <img src={partner3} alt="" />
                </Link>
              </div>
              <div className="col-sm-2">
                <Link to="/antivirus">
                  <img src={partner4} alt="" />
                </Link>
              </div>
              <div className="col-sm-2">
                <Link to="/backuprecovery">
                  <img src={partner5} alt="" />
                </Link>
              </div>
              <div className="col-sm-2">
                <Link to="/vpn">
                  <img src={partner6} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div> 
    </>
  )
}

export default Partners
