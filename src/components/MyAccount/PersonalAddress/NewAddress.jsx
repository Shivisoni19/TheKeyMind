import React from "react";
import { Link } from "react-router-dom";

const NewAddress = () => {
  return (
    <>
      <div className="container">
        <h2 className="mt50">New Address</h2>
        <div className="second-row new-address-form">
          <label>
            Country <span>*</span>
          </label>
          <select className="select">
            <option value="Select Size">Select Country</option>
            <option value="Albania">Albania</option>
            <option value="Australia">Australia</option>
            <option value="UK">Unitend Kingdom</option>
            <option value="US">Unidend States</option>
          </select>

          <div className="row">
            <div className="col-md-6">
              <label>
                First Name <span>*</span>
              </label>
              <input type="text" />
            </div>
            <div className="col-md-6">
              <label>
                Last Name <span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>

          <label>Company Name</label>
          <input type="text" />

          <label>
            Address <span>*</span>
          </label>
          <input type="text" placeholder="Street Address" />
          <input
            type="text"
            placeholder="Apartment. Suite, Unit etc. (optional)"
          />

          <label>
            Town / City <span>*</span>
          </label>
          <select className="select">
            <option value="Select City">Select City</option>
            <option value="Albania">Albania</option>
            <option value="Australia">Australia</option>
            <option value="UK">Unitend Kingdom</option>
            <option value="US">Unidend States</option>
          </select>

          <div className="row">
            <div className="col-md-6">
              <label>Country / State</label>
              <input type="text" />
            </div>
            <div className="col-md-6">
              <label>
                Postcode <span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <label>
                Email Address <span>*</span>
              </label>
              <input type="text" />
            </div>
            <div className="col-md-6">
              <label>
                phone <span>*</span>
              </label>
              <input type="text" />
            </div>
          </div>
          <Link href="#" className="red-check">
            Save Address
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewAddress;
