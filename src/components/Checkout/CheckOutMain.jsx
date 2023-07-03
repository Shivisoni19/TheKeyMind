import React, { useState } from 'react';
import './Checkout.css';
import CheckoutAside from './CheckoutAside';
import { Link } from 'react-router-dom';

const CheckOutMain = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleAccordionClick = (sectionNumber) => {
    setActiveSection(sectionNumber === activeSection ? 0 : sectionNumber);
  };

  return (
    <div className="checkout-container">
      <div className="row">
        <div className="col-md-8">
          <div className="checkout-accordion">
            <div className="accordion">
              <h2
                className={`accordion-header ${
                  activeSection === 1 ? 'active' : ''
                }`}
                onClick={() => handleAccordionClick(1)}
              >
                1. Personal Information
              </h2>
              {activeSection === 1 && (
                <div className="accordion-content show">
                    <div className="row fisrt-row">
                      <div className="col-md-6">
                        <h6>New Customer</h6>
                        <form className="form-p">
                          <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked
                          />
                          <p>Register Account</p>
                          <br />
                          <input type="radio" name="sex" value="female" />
                          <p>Checkout as Guest</p>
                        </form>
                        <p>
                          Register and save time! You will be able to shop
                          faster, fast and easy checkout, easy access to your
                          order history and status.
                        </p>
                        <Link href="#" className="red-check">
                          Continue
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <h6>Returning Customer</h6>
                        <form>
                          <label>
                            Name<span>*</span>
                          </label>
                          <input type="text" />
                          <label>
                            Password<span>*</span>
                          </label>
                          <input type="text" />
                        </form>
                        <Link href="#" className="red-check2">
                          Login
                        </Link>
                        <Link href="#" className="forgot">
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                </div>
              )}

              <h2
                className={`accordion-header ${
                  activeSection === 2 ? 'active' : ''
                }`}
                onClick={() => handleAccordionClick(2)}
              >
                2. Shipping Information
              </h2>
              {activeSection === 2 && (
                <div className="accordion-content second-row show">
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
              )}

              <h2
                className={`accordion-header ${
                  activeSection === 3 ? 'active' : ''
                }`}
                onClick={() => handleAccordionClick(3)}
              >
                3. Review and Payment
              </h2>
              {activeSection === 3 && (
                <div className="accordion-content third-row show">
                <ul>
                  <li>
                    <Link href="#">
                      <p>FedEx</p> <span>100$</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p>DHL</p> <span>76$</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p>US Express</p> <span>120$</span>
                    </Link>
                  </li>
                </ul>
              </div>
              )}

              {/* <h2
                className={`accordion-header ${
                  activeSection === 4 ? 'active' : ''
                }`}
                onClick={() => handleAccordionClick(4)}
              >
                4. Review and Payment
              </h2>
              {activeSection === 4 && (
                <div className="accordion-content third-row show">
                <ul>
                  <li>
                    <Link href="#">
                      <p>FedEx</p> <span>100$</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p>DHL</p> <span>76$</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p>US Express</p> <span>120$</span>
                    </Link>
                  </li>
                </ul>
              </div>
              )} */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
           <CheckoutAside/>
        </div>
      </div>
    </div>
  );
};

export default CheckOutMain;
