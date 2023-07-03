import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import "./Privacy.css"

const PrivacyMain = () => {
  return (
    <>
      <div className="container">
        <div className="privacy-content">
          <div className="privacy-top-heading">
            <h2>Privacy Policy of <strong className='text-orange'>thekeymind.com</strong></h2>
            <span>This Website collects some Personal Data from its Users.</span>
          </div>
          <div className="privacy-mid-content">
            <h3>Personal Data processed for the following purposes and using the following services:</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="left-side-content">
                  <div className="icon-privacy-content">
                  <FontAwesomeIcon icon={faChartLine}/>
                  </div>
                  <div className="privacy-analytics">
                    <h3>Analytics</h3>
                    <p>Meta ads conversion tracking (Meta pixel) and Google Analytics 4</p>
                    <span>Personal Data: Trackers; Usage Data</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faHandshake} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>Commercial affiliation</h3>
                    <p>TradeTracker</p>
                    <span>Personal Data: Trackers; Usage Data</span>
                    <p>CJ Affiliate</p>
                    <span>Personal Data: purchase history; Trackers; Usage Data</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="left-side-content">
                  <div className="icon-privacy-content">
                  <FontAwesomeIcon icon={faEnvelopeOpen}/>
                  </div>
                  <div className="privacy-analytics">
                    <h3>Contacting the User</h3>
                    <p>Contact form</p>
                    <span>Personal Data: address; city; company name; country; county; email address; first name; last name; phone number; state; Tax ID; VAT Number; ZIP/Postal codea</span>
                    <p>Mailing list or newsletter</p>
                    <span>Personal Data: email address</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>Displaying content from external platforms</h3>
                    <p>Font Awesome</p>
                    <span>Personal Data: Usage Data</span>
                    <p>Google Fonts</p>
                    <span>Personal Data: Usage Data; various types of Data as specified in the privacy policy of the service</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="left-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>Handling payments</h3>
                    <p>Stripe</p>
                    <span>Personal Data: various types of Data as specified in the privacy policy of the servicea</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faProjectDiagram} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>Interaction with external social networks and platforms</h3>
                    <p>Facebook Like button and social widgets, Twitter Tweet button and social widgets and Pinterest “Pin it” button and social widgets</p>
                    <span>Personal Data: Cookies; Usage Data</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="left-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faServer} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>Platform services and hosting</h3>
                    <p>PrestaShop</p>
                    <span>Personal Data: various types of Data as specified in the privacy policy of the service</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>SPAM protection</h3>
                    <p>Google reCAPTCHA</p>
                    <span>Personal Data: answers to questions; clicks; keypress events; motion sensor events; mouse movements; scroll position; touch events; Trackers; Usage Dataa</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="left-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>Tag Management</h3>
                    <p>Google Tag Manager</p>
                    <span>Personal Data: Trackers; Usage Data</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-side-content">
                  <div className="icon-privacy-content">
                    <FontAwesomeIcon icon={faDatabase} />
                  </div>
                  <div className="privacy-analytics">
                    <h3>User database management</h3>
                    <p>ActiveCampaign</p>
                    <span>Personal Data: email address; Trackers; various types of Data as specified in the privacy policy of the service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="lower-privacy-content">
            <h2>Information on opting out of interest-based advertising</h2>
            <p>In addition to any opt-out feature provided by any of the services listed in this document, Users may learn more on how to generally opt out of interest-based advertising within the dedicated section of the Cookie Policy.</p>
            <h2>Further information about the processing of Personal Data</h2>
            <div className="left-side-content">
              <div className="icon-privacy-content">
                <FontAwesomeIcon icon={faUserShield} />
              </div>
              <div className="privacy-analytics">
                <p>Selling goods and services online</p>
                <span>The Personal Data collected are used to provide the User with services or to sell goods, including payment and possible delivery.
                  The Personal Data collected to complete the payment may include the credit card, the bank account used for the transfer, or any other means of payment envisaged. The kind of Data collected by this Website depends on the payment system used.</span>
              </div>
            </div>
            <h2>Contact information</h2>
            <div className="left-side-content">
              <div className="icon-privacy-content">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="privacy-analytics">
                <p>Owner and Data Controller</p>
                <span>
                  <ul>
                    <li>UK Soft LTD</li>
                    <li>London</li>
                    <li>8 Gainsborough Road</li>
                    <li>Leytonstone E11 1HT</li>
                    <li>Greater London</li>
                    <li>Company Number 12461399</li>
                    <li>Phone: +44 7732150071</li>
                  </ul>
                </span>
                <span><strong>Owner contact email:</strong>&nbsp;info@thekeymind.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyMain;
