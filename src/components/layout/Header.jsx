import React from 'react'
import { Link } from "react-router-dom";
import Login from '../../pages/Login';

const Header = () => {
  return (
    <>
      <div id='container'>
        {/* <!-- Header
		    ================================================== --> */}
        <header className='clearfix'>
          <div className='top-line'>
            <div className='container'>
              <div className='left-line'>
                <div className='mobile-a'>
                  <Link href='#login-box' className='login-window'>
                    <i className='fa fa-user'></i>
                  </Link>
                  <Link href='#'>
                    <i className='fa fa-heart'></i>
                  </Link>
                </div>
              </div>
              <div className='right-line'>
                <div className='mobile-version'>
                  <div className='cart-icon'>
                    <Link href='#'>
                      <i className='fa fa-cart-plus fa-lg'></i>
                      <span className='f-600'>8 Items</span>
                    </Link>
                  </div>
                </div>

                <ul className='curr clearfix'>
                  <li>
                    <span>Currency: </span>
                    <Link href='#'>Dollar $</Link>
                  </li>
                </ul>
              </div>
              <div className='right-line'>
                <ul>
                  <li>
                    <Link href='#'>Shipping In Seconds</Link>
                  </li>
                  <li>
                    <Link href='#'>Secure Payment:SSL</Link>
                  </li>
                  <li>
                    <Link href='#'>
                      Free Support E-mail/Chat (Mon.-Fri. 10-13 14-17)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end top line --> */}

          <div className='upper-header'>
            <div className='container'>
              <div className='main-logo'>
                <Link href='index.html'>
                  <img src="img/logo/logo.png" alt=''/>
                </Link>
              </div>

              <div className='search-input'>
                {/* <!-- The form --> */}
                <form className='example search-form'>
                  <input type='text' placeholder='Search..' name='search' />
                  <button type='submit'>
                    <i className='fa fa-search'></i>
                  </button>
                </form>
              </div>
              {/* <!-- Login/Registration & My Account form  --> */}
              <div className='register-login d-block d-sm-none'>
                {/* <!-- <i className="fa fa-user font-color fa-lg" aria-hidden="true"></i>
                    <Link href="my-account.html" className="login-window">My Account</Link> --> */}
                <Link to="/signup" className='login-window'>
                  Register
                </Link>
                <span>/</span>
                <Link to="/login" className='login-window'>
                  Login
                </Link>
              </div>

              {/* <!-- cart  --> */}
              <div className='cart'>
                <div className='card-icon'>
                  <i
                    className='fa fa-shopping-cart fa-2x font-color'
                    aria-hidden='true'
                  ></i>
                  <div className='shop-items'>10</div>
                </div>
                <div className='hover-cart'>
                  <div className='hover-box'>
                    <Link href='#'>
                      <img src='images/hover1.png' alt='' className='left-hover' />
                    </Link>
                    <div className='hover-details'>
                      <p>Grey California Dress</p>
                      <span>$ 3 199.00</span>
                      <div className='quantity'>Quantity: 1</div>
                    </div>

                    <Link href='#' className='right-hover'>
                      <img src='images/delete.png' alt='' />
                    </Link>

                    <div className='clear'></div>
                  </div>

                  <div className='hover-box bd0'>
                    <img src='images/hover2.png' alt='' className='left-hover' />
                    <div className='hover-details'>
                      <p>Grey California Dress</p>
                      <span>$ 3 199.00</span>
                      <div className='quantity'>Quantity: 1</div>
                    </div>

                    <Link href='#' className='right-hover'>
                      <img src='images/delete.png' alt='' />
                    </Link>

                    <div className='clear'></div>
                  </div>

                  <div className='subtotal'>
                    Cart Subtotal: <span>$ 4 372</span>
                  </div>

                  <Link to="/cart"><button className='viewcard'>View Cart</button></Link>
                  <Link to="/checkout"><button className='proceedcard'>Proceed</button></Link>
                </div>
              </div>
            </div>
            {/* <!-- End container --> */}
          </div>
          {/* <!-- End Upper-header --> */}

          <div className='nav-border'></div>
          <div className='bottom-header'>
            <div className='container'>
              {/* <!-- Navigation --> */}
              <nav>
                <div className='wrapper'>
                  <div className='logo'>
                    {/* <!-- <Link href="index.html"
                        ><img src="./images/logo/nav-logo.jpg" alt=""
                    /></Link> --> */}
                  </div>
                  <input type='radio' name='slider' id='menu-btn' />
                  <input type='radio' name='slider' id='close-btn' />
                  <ul className='nav-links'>
                    <label for='close-btn' className='btn close-btn'>
                      <i className='fa fa-times'></i>
                    </label>
                    <li>
                      <Link to="/" >Home</Link>
                    </li>
                    <li>
                      <Link to="about" >About</Link>
                    </li>
                    <li>
                      <Link to="operatingsystem" className='desktop-item'>
                        Operating System
                      </Link>
                      <input type='checkbox' id='showMega' />
                      <label for='showMega' className='mobile-item'>
                        Operating System
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <header>Windows 11</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Windows 11 Professional</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows 11 Home</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows 11 Enterprise</Link>
                              </li>
                              <li>
                                <Link href='#'>Upgrade to Windows 11 Professional</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Windows 10</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Windows 10 Professional</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows 10 Home</Link>
                              </li>
                              <li>
                                <Link href='#'>Upgrade to Windows 10 Professional</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Email Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Personal Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Business Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Mobile Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Web Marketing</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Security services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Site Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>VPS Hosting</Link>
                              </li>
                              <li>
                                <Link href='#'>Privacy Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>Website design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="microsoftoffice" className='desktop-item'>
                        Microsoft Office
                      </Link>
                      <input type='checkbox' id='showMega' />
                      <label for='showMega' className='mobile-item'>
                        Microsoft Office
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <img
                              src='https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg'
                              alt=''
                            />
                          </div>
                          <div className='row'>
                            <header>Design Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Graphics</Link>
                              </li>
                              <li>
                                <Link href='#'>Vectors</Link>
                              </li>
                              <li>
                                <Link href='#'>Business cards</Link>
                              </li>
                              <li>
                                <Link href='#'>Custom logo</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Email Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Personal Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Business Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Mobile Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Web Marketing</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Security services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Site Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>VPS Hosting</Link>
                              </li>
                              <li>
                                <Link href='#'>Privacy Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>Website design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="antivirus" className='desktop-item'>
                        Antivirus
                      </Link>
                      <input type='checkbox' id='showMega' />
                      <label for='showMega' className='mobile-item'>
                        Antivirus
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <img
                              src='https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg'
                              alt=''
                            />
                          </div>
                          <div className='row'>
                            <header>Design Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Graphics</Link>
                              </li>
                              <li>
                                <Link href='#'>Vectors</Link>
                              </li>
                              <li>
                                <Link href='#'>Business cards</Link>
                              </li>
                              <li>
                                <Link href='#'>Custom logo</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Email Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Personal Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Business Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Mobile Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Web Marketing</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Security services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Site Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>VPS Hosting</Link>
                              </li>
                              <li>
                                <Link href='#'>Privacy Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>Website design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="vpn" className='desktop-item'>
                        VPN
                      </Link>
                      <input type='checkbox' id='showMega' />
                      <label for='showMega' className='mobile-item'>
                        VPN
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <img
                              src='https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg'
                              alt=''
                            />
                          </div>
                          <div className='row'>
                            <header>Design Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Graphics</Link>
                              </li>
                              <li>
                                <Link href='#'>Vectors</Link>
                              </li>
                              <li>
                                <Link href='#'>Business cards</Link>
                              </li>
                              <li>
                                <Link href='#'>Custom logo</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Email Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Personal Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Business Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Mobile Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Web Marketing</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Security services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Site Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>VPS Hosting</Link>
                              </li>
                              <li>
                                <Link href='#'>Privacy Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>Website design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="server" className='desktop-item'>
                        Server
                      </Link>
                      <input type='checkbox' id='showMega' />
                      <label for='showMega' className='mobile-item'>
                        Server
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <img
                              src='https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg'
                              alt=''
                            />
                          </div>
                          <div className='row'>
                            <header>Design Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Graphics</Link>
                              </li>
                              <li>
                                <Link href='#'>Vectors</Link>
                              </li>
                              <li>
                                <Link href='#'>Business cards</Link>
                              </li>
                              <li>
                                <Link href='#'>Custom logo</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Email Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Personal Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Business Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Mobile Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Web Marketing</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Security services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Site Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>VPS Hosting</Link>
                              </li>
                              <li>
                                <Link href='#'>Privacy Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>Website design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="backuprecovery" className='desktop-item'>
                        Backup & Recovery
                      </Link>
                      <input type='checkbox' id='showMega' />
                      <label for='showMega' className='mobile-item'>
                        Backup & Recovery
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <img
                              src='https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg'
                              alt=''
                            />
                          </div>
                          <div className='row'>
                            <header>Design Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Graphics</Link>
                              </li>
                              <li>
                                <Link href='#'>Vectors</Link>
                              </li>
                              <li>
                                <Link href='#'>Business cards</Link>
                              </li>
                              <li>
                                <Link href='#'>Custom logo</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Email Services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Personal Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Business Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Mobile Email</Link>
                              </li>
                              <li>
                                <Link href='#'>Web Marketing</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Security services</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Site Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>VPS Hosting</Link>
                              </li>
                              <li>
                                <Link href='#'>Privacy Seal</Link>
                              </li>
                              <li>
                                <Link href='#'>Website design</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="contact">Contact Us</Link>
                    </li>
                  </ul>
                  <label for='menu-btn' className='btn menu-btn'>
                    <i className='fa fa-bars'></i>
                  </label>
                </div>
              </nav>
              <div className='search-mobile-input'>
                {/* <!-- The form --> */}
                <form className='example search-form'>
                  <input type='text' placeholder='Search..' name='search' />
                  <button type='submit'>
                    <i className='fa fa-search'></i>
                  </button>
                </form>
              </div>
              {/* <!-- <nav id="nav">
                    <ul id="navlist" className="sf-menu clearfix">
                    <li className="current">
                        <Link href="operating-system.html">Operating Systems</Link>
                        <ul className="sub-menu">
                        <li>
                            <Link href="home-boxed.html"><span>--</span>Home Boxed</Link>
                        </li>
                        <li>
                            <Link href="home-transparent.html"
                            ><span>--</span>Home Transparent</a
                            >
                        </li>
                        <li>
                            <Link href="home-leftmenu.html"
                            ><span>--</span>Home Left Menu</a
                            >
                        </li>
                        <li>
                            <Link href="home-bannerboxed.html"
                            ><span>--</span>Home Banner</a
                            >
                        </li>
                        <li>
                            <Link href="home-banner.html"
                            ><span>--</span>Home Banner Fullwidth</a
                            >
                        </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="microsoft-office.html">Microsoft Office</Link>
                        <ul className="sub-menu">
                        <li>
                            <Link href="shop-single.html"
                            ><span>--</span>Single Product</a
                            >
                        </li>
                        <li>
                            <Link href="shop-list.html"><span>--</span>Products List</Link>
                        </li>
                        <li>
                            <Link href="shop-grid.html"><span>--</span>Products Grid</Link>
                        </li>
                        <li>
                            <Link href="cart.html"><span>--</span>Shopping Cart</Link>
                        </li>
                        <li>
                            <Link href="checkout.html"><span>--</span>Checkout</Link>
                        </li>
                        </ul>
                    </li>
                    <li><Link href="antivirus.html">Antivirus</Link></li>
                    <li><Link href="vpn.html">VPN</Link></li>
                    <li><Link href="server.html">Server</Link></li>
                    <li>
                        <Link href="backup-recovery.html">Backup & Recovery</Link>
                        <ul className="sub-menu">
                        <li>
                            <Link href="about.html"><span>--</span>About</Link>
                        </li>
                        <li>
                            <Link href="shortcodes.html"><span>--</span>Shortcodes</Link>
                        </li>
                        <li>
                            <Link href="typography.html"><span>--</span>Typography</Link>
                        </li>
                        <li>
                            <Link href="404.html"><span>--</span>404</Link>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="#">Blog</Link>
                        <ul className="sub-menu">
                        <li>
                            <Link href="blog.html"><span>--</span>Blog</Link>
                        </li>
                        <li>
                            <Link href="blog-single.html"><span>--</span>Blog Single</Link>
                        </li>
                        </ul>
                    </li>
                    <li><Link href="contact.html">Contact</Link></li>
                    <li><Link href="about.html">About Us</Link></li>
                    </ul>
                </nav> --> */}
              {/* <!-- Navigation --> */}
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
