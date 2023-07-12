import React from 'react'
// import chatbox from '../../images/icons/live-chat.png'
// import hifi from '../../images/icons/hifi.png'
import { Link } from "react-router-dom";
// import '../../js/chatbox'
import ChatBox from '../Home/ChatBox';
import Partners from '../Partners';

const Footer = () => {
  return (
    <div>
      {/* Brands Partner  */}
      <Partners/>
      {/* <!-- footer ================================================== --> */}
      <footer>
        <div class="inner-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <div class="f-about">
                  <h1>ABOUT KEY MIIND</h1>
                  <p class="mb20">
                    We possess within us two minds. So far I have written only
                    of the conscious mind.We further know that the subconscious
                    has recorded every event. This is just perfect theme.
                  </p>
                  <h1>NEWSLETTER</h1>
                  <form action="#">
                    <input type="text" placeholder="Your e-mail" />
                    <input type="submit" value="" />
                  </form>
                </div>
              </div>
              <div class="col-md-3">
                <div class="infos">
                  <h1>Services</h1>
                  <ul>
                    <li><Link to="/operatingsystem">• Operating System</Link></li>
                    <li><Link to="/microsoftoffice">• Microsoft Office</Link></li>
                    <li><Link to="/antivirus">• Antivirus</Link></li>
                    <li><Link to="/vpn">• VPN</Link></li>
                    <li><Link to="/server">• Server</Link></li>
                    <li><Link to="/backuprecovery">• Backup & Recovery</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="account">
                  <h1>USEFUL LINKS</h1>
                  <ul>
                    <li><Link to="/about">• About Us</Link></li>
                    <li><Link to="/termsconditions">• Terms And Conditions</Link></li>
                    <li><Link to="/returnrefund">• Return Refund</Link></li>
                    <li><Link to="/shipping">• Shipping</Link></li>
                    {/* <!-- <li><Link href="#">• Contact Us</Link></li> --> */}
                    <li><Link to="/privacypolicy">• Privacy Policy</Link></li>
                    <li><Link to="/cookiepolicy">• Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3">
                <div class="gettouch">
                  <h1>Get in Touch with us</h1>
                  <p>
                    <i class="fa fa-home"></i> Philippines, PO Box 6200 Talay
                    st. 65, SweetPick inc.
                  </p>
                  <p><i class="fa fa-phone"></i> +63 918 4084 694</p>
                  <p class="mb20">
                    <i class="fa fa-envelope"></i> samokhinteam@gmail.com
                  </p>
                  <h1>FIND US ON</h1>
                  <ul class="footer-socials">
                    <li>
                      <Link to="/"><i class="fa fa-facebook"></i></Link>
                    </li>
                    <li>
                      <Link to="/"><i class="fa fa-twitter"></i></Link>
                    </li>
                    <li>
                      <Link to="/"><i class="fa fa-pinterest"></i></Link>
                    </li>
                    <li>
                      <Link to="/"><i class="fa fa-linkedin"></i></Link>
                    </li>
                    <li>
                      <Link to="/"><i class="fa fa-google-plus"></i></Link>
                    </li>
                    <li>
                      <Link to="/"><i class="fa fa-youtube"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Chat box start  --> */}
          {/* <div class="chat-box">
            <button class="open-button" onClick="openForm()">
              <img src={chatbox} width="35" height="30" />
            </button>

            <div class="chat-popup" id="myForm">
              <form action="" class="form-container">
                <i class="fa-solid fa-chalkboard-user"></i>
                <div>
                  <h2 class="hi-text">
                    Hi there <img src={hifi} width="30" />
                  </h2>
                </div>

                <label for="msg"
                  >Welcome to our website. Ask us anything
                </label>
                <textarea
                  placeholder="Type message.."
                  name="msg"
                  required
                ></textarea>
                <button type="submit" class="btn">Send</button>
                <button type="button" class="btn cancel" onclick="closeForm()">
                  Close
                </button>
              </form>
            </div>
          </div> */}
          <ChatBox/>
          {/* End chat box  */}
        </div>
        {/* <!-- end container & inner-footer --> */}
        <div class="container">
          <div class="last-div">
            <div class="row">
              <div class="copyright">
                © 2023 - All rights reserved |
                <Link to="/"> UK Soft LTD VAT: GB364289273</Link>
              </div>
              <div class="payment">
                <Link to="/"><img src="upload/payments.png" alt="" /></Link>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- End footer --> */}
    </div>
  )
}

export default Footer
