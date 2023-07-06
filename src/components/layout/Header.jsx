import React from 'react'
import { Link } from "react-router-dom";
import Login from '../../pages/Login';

const Header = (props) => {
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
                  <Link to="/login" className='login-window'>
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
                {/* <span>{props.name ? `Welcome - ${props.name}` : "Login Please"}</span> */}
                {/* <i className="fa fa-user font-color fa-lg" aria-hidden="true"></i>
                <Link to="/myaccount" className="login-window">User Account</Link> */}
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
                      <Link to="/about" >About</Link>
                    </li>
                    <li>
                      <Link to="/operatingsystem" className='desktop-item'>
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
                            <header>Windows 7</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Windows 7 Professional</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows 7 Ultimate</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows 7 Home & Premium</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Windows 8</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Windows 8.1 Professional</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/microsoftoffice" className='desktop-item'>
                        Microsoft Office
                      </Link>
                      <input type='checkbox' id='showMega1' />
                      <label for='showMega1' className='mobile-item'>
                        Microsoft Office
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <header>Office 2021</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Office 2021 Professional</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2021 Home & Business</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2021 Home & Student</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Office 2019</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Office 2019 Professional Plus</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2019 Home & Business</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2019 Home & Student</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Office 2016</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Office 2016 Professional Plus</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2016 Home & Student</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Office 2013</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Office 2013 Professional Plus</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Office 2010</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Office 2010 Professional Plus</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Microsoft 365</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Microsoft 365 Business</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft 365 Personal</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft 365 Family</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Office for MAC</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Office 2021 Home & Student for Mac</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2021 Home & Business for Mac</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2019 Home & Business for MAC</Link>
                              </li>
                              <li>
                                <Link href='#'>Office 2016 Home & Business for MAC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Microsoft Office App</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Microsoft Access</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft Project</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft Visio</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft Visual Studio</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft Outlook</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft OneNote</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft Word</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft Excel</Link>
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
                      <input type='checkbox' id='showMega2' />
                      <label for='showMega2' className='mobile-item'>
                        Antivirus
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <header>Kaspersky</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Kaspersky AntiVirus for PC</Link>
                              </li>
                              <li>
                                <Link href='#'>Kaspersky Internet Security (Kaspersky Standard) for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>Kaspersky Total Security (Kaspersky Plus) for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>Kaspersky Internet Security for ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>ESET</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Eset Internet Security for PC - MAC - ANDROID</Link>
                              </li>
                              <li>
                                <Link href='#'>Eset NOD32 Antivirus for PC - MAC</Link>
                              </li>
                              <li>
                                <Link href='#'>ESET Mobile Security for ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>McAfee</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>McAfee Total Protection for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>McAfee Internet Security for PC - MAC - ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Bitdefender</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Bitdefender Total Security for PC - MAC</Link>
                              </li>
                              <li>
                                <Link href='#'>Bitdefender Internet Security for PC</Link>
                              </li>
                              <li>
                                <Link href='#'>Bitdefender Antivirus Plus for PC</Link>
                              </li>
                              <li>
                                <Link href='#'>Bitdefender Antivirus for MAC</Link>
                              </li>
                              <li>
                                <Link href='#'>Bitdefender Mobile Security for ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>AVAST</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>AVAST Premium Security for PC</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST Premium Security for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST Ultimate for PC</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST SecureLine VPN for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST Driver Update for PC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Norton</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Norton 360 Deluxe for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>Norton 360 Premium for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>Norton 360 Standard for PC - MAC - ANDROID - IOS</Link>
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
                      <input type='checkbox' id='showMega3' />
                      <label for='showMega3' className='mobile-item'>
                        VPN
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <header>VPN for PC</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>HMA VPN - PC</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST SecureLine VPN - PC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>VPN for MAC</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>HMA VPN - MAC</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST SecureLine VPN - MAC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>VPN for MOBILE</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>HMA VPN - ANDROID / IOS</Link>
                              </li>
                              <li>
                                <Link href='#'>AVAST SecureLine VPN - ANDROID / IOS</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>HMA VPN</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>HMA VPNl</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Avast VPN</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>AVAST SecureLine VPN</Link>
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
                      <input type='checkbox' id='showMega4' />
                      <label for='showMega4' className='mobile-item'>
                        Server
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                           <div className='row'>
                            <header>Windows Server</header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/productsubpage">Windows Server 2022</Link>
                              </li>
                              <li>
                                <Link to="/productsubpage">Windows Server 2019</Link>
                              </li>
                              <li>
                                <Link to="/productsubpage">Windows Server 2016</Link>
                              </li>
                              <li>
                                <Link to="/productsubpage">Windows Server 2012</Link>
                              </li>
                              <li>
                                <Link to="/productsubpage">Windows Storage Server 2016</Link>
                              </li>
                              <li>
                                <Link to="/productsubpage">Windows Storage Server 2012</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Windows Server CAL</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Windows Server 2022 CAL</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows Server 2019 CAL</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows Server 2016 CAL</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows Server 2012 CAL</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Windows Server RDS CAL</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Windows Server 2022 RDS CAL</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows Server 2019 RDS CAL</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows Server 2016 RDS CAL</Link>
                              </li>
                              <li>
                                <Link href='#'>Windows Server 2012 RDS CAL</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>Microsoft SQL Server</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>Microsoft SQL Server 2019 Standard</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft SQL Server 2017 Standard</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft SQL Server 2016 Standard</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft SQL Server 2014 Standard</Link>
                              </li>
                              <li>
                                <Link href='#'>Microsoft SQL Server 2012 Standard</Link>
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
                      <input type='checkbox' id='showMega5' />
                      <label for='showMega5' className='mobile-item'>
                        Backup & Recovery
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                            <div>
                              <img src='img/products/product-6.png'/>
                            </div>
                          </div>
                         <div className='row'>
                            <header>AOMEI</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>AOMEI Backupper</Link>
                              </li>
                              <li>
                                <Link href='#'>AOMEI Partition Assistant</Link>
                              </li>
                              <li>
                                <Link href='#'>AOMEI OneKey Recovery</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                            <header>EaseUS</header>
                            <ul className='mega-links'>
                              <li>
                                <Link href='#'>EaseUS Data Recovery</Link>
                              </li>
                              <li>
                                <Link href='#'>EaseUS Todo Backup</Link>
                              </li>
                              <li>
                                <Link href='#'>EaseUS Partition Master</Link>
                              </li>
                              <li>
                                <Link href='#'>EaseUS MobiSaver</Link>
                              </li>
                              <li>
                                <Link href='#'>EaseUS Deploy Manager</Link>
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
