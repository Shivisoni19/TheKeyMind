import React from 'react'
import { Link } from "react-router-dom";
import Login from '../../pages/Login';

const Header = ({id}) => {
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
                  <Link to={`tel:${91873268445}`} className='login-window'>
                    <i className="fa fa-phone"></i>
                  </Link>
                  <Link to="/wishlist">
                    <i className='fa fa-heart'></i>
                  </Link>
                </div>
              </div>
              <div className='right-line'>
                <div className='mobile-version'>
                  <div className='cart-icon'>
                    <Link to="/cart">
                      <i className='fa fa-cart-plus fa-lg'></i>
                      <span className='f-600'>8 Items</span>
                    </Link>
                  </div>
                </div>

                <ul className='curr clearfix'>
                  <li>
                    <span>Currency: </span>
                    <Link to="/">$</Link>
                  </li>
                </ul>
              </div>
              <div className='right-line'>
                <ul>
                  <li>
                    <Link to="/">Shipping In Seconds</Link>
                  </li>
                  <li>
                    <Link to="/">Secure Payment:SSL</Link>
                  </li>
                  <li>
                    <Link to="/">
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
                <Link to="/">
                  <img src="img/logo/logo.png" alt=''style={{width:"100%"}}/>
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
                <Link to={`tel:${98562125212}`} className='login-window'>
                  {98562125212}
                </Link>
                {/* <Link to="/signup" className='login-window'>
                  Register
                </Link>
                <span>/</span>
                <Link to="/login" className='login-window'>
                  Login
                </Link> */}
                {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}

                {/* <i className="fa fa-user font-color fa-lg" aria-hidden="true"></i>
                <Link to="/myaccount" className="login-window">User Account</Link> */}
              </div>

              {/* <!-- cart  --> */}
              <div className='cart'>
                <div className='card-icon'>
                  <Link to="/cart"><i
                    className='fa fa-shopping-cart fa-2x font-color'
                    aria-hidden='true'
                  ></i></Link>
                  {/* <div className='shop-items'>10</div> */}
                </div>
                {/* <div className='hover-cart'>
                  <div className='hover-box bd0'>
                    <img src='images/hover2.png' alt='' className='left-hover' />
                    <div className='hover-details'>
                      <p>Grey California Dress</p>
                      <span>$ 3 199.00</span>
                      <div className='quantity'>Quantity: 1</div>
                    </div>

                    <Link to="/cart" className='right-hover'>
                      <img src='images/delete.png' alt='' />
                    </Link>

                    <div className='clear'></div>
                  </div>

                  <div className='subtotal'>
                    Cart Subtotal: <span>$ 4 372</span>
                  </div>

                  <Link to="/cart"><button className='viewcard'>View Cart</button></Link>
                  <Link to="/checkout"><button className='proceedcard'>Proceed</button></Link>
                </div> */}
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
                            <header className='mega-box-heading'><Link to="/windows11">Windows 11</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/productdetails/ColcQ4myR4DzXuQvj65H">Windows 11 Professional</Link>
                              </li>
                              <li>
                                <Link to="/productdetails/VCpUqTovq6BDCeFIsgwl">Windows 11 Home</Link>
                              </li>
                              <li>
                                <Link to="/productdetails/6eVzRHsPvcAgimsAA4ft">Windows 11 Enterprise</Link>
                              </li>
                              <li>
                                <Link to="/productdetails/VnvuVMy4kv4eGHoHczv9">Upgrade to Windows 11 Professional</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/windows10">Windows 10</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/windows10">Windows 10 Professional</Link>
                              </li>
                              <li>
                                <Link to="/windows10">Windows 10 Home</Link>
                              </li>
                              <li>
                                <Link to="/windows10">Upgrade to Windows 10 Professional</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/windows7">Windows 7</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/windows7">Windows 7 Professional</Link>
                              </li>
                              <li>
                                <Link to="/windows7">Windows 7 Ultimate</Link>
                              </li>
                              <li>
                                <Link to="/windows7">Windows 7 Home & Premium</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/windows8">Windows 8</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/windows8">Windows 8.1 Professional</Link>
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
                          <header className='mega-box-heading'><Link to="/microsoftoffice2021">Office 2021</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftoffice2021">Office 2021 Professional</Link>
                              </li>
                              <li>
                                <Link to="/microsoftoffice2021">Office 2021 Home & Business</Link>
                              </li>
                              <li>
                                <Link to="/microsoftoffice2021">Office 2021 Home & Student</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftoffice2019">Office 2019</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftoffice2019">Office 2019 Professional Plus</Link>
                              </li>
                              <li>
                                <Link to="/microsoftoffice2019">Office 2019 Home & Business</Link>
                              </li>
                              <li>
                                <Link to="/microsoftoffice2019">Office 2019 Home & Student</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftoffice2016">Office 2016</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftoffice2016">Office 2016 Professional Plus</Link>
                              </li>
                              <li>
                                <Link to="/microsoftoffice2016">Office 2016 Home & Student</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftoffice2013">Office 2013</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftoffice2013">Office 2013 Professional Plus</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftoffice2010">Office 2010</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftoffice2010">Office 2010 Professional Plus</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoft365">Microsoft<br/>365</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoft365">Microsoft 365 Business</Link>
                              </li>
                              <li>
                                <Link to="/microsoft365">Microsoft 365 Personal</Link>
                              </li>
                              <li>
                                <Link to="/microsoft365">Microsoft 365 Family</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftofficemac">Office for MAC</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftofficemac">Office 2021 Home & Student for Mac</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficemac">Office 2021 Home & Business for Mac</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficemac">Office 2019 Home & Business for MAC</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficemac">Office 2016 Home & Business for MAC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftofficeapp">Microsoft Office App</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Access</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Project</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Visio</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Visual Studio</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Outlook</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft OneNote</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Word</Link>
                              </li>
                              <li>
                                <Link to="/microsoftofficeapp">Microsoft Excel</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/antivirus" className='desktop-item'>
                        Antivirus
                      </Link>
                      <input type='checkbox' id='showMega2' />
                      <label for='showMega2' className='mobile-item'>
                        Antivirus
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/kaspersky">Kaspersky</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/kaspersky">Kaspersky AntiVirus for PC</Link>
                              </li>
                              <li>
                                <Link to="/kaspersky">Kaspersky Internet Security (Kaspersky Standard) for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/kaspersky">Kaspersky Total Security (Kaspersky Plus) for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/kaspersky">Kaspersky Internet Security for ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/eset">ESET</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/eset">Eset Internet Security for PC - MAC - ANDROID</Link>
                              </li>
                              <li>
                                <Link to="/eset">Eset NOD32 Antivirus for PC - MAC</Link>
                              </li>
                              <li>
                                <Link to="/eset">ESET Mobile Security for ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/mcafee">McAfee</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/mcafee">McAfee Total Protection for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/mcafee">McAfee Internet Security for PC - MAC - ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/bitdefender">Bitdefender</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/bitdefender">Bitdefender Total Security for PC - MAC</Link>
                              </li>
                              <li>
                                <Link to="/bitdefender">Bitdefender Internet Security for PC</Link>
                              </li>
                              <li>
                                <Link to="/bitdefender">Bitdefender Antivirus Plus for PC</Link>
                              </li>
                              <li>
                                <Link to="/bitdefender">Bitdefender Antivirus for MAC</Link>
                              </li>
                              <li>
                                <Link to="/bitdefender">Bitdefender Mobile Security for ANDROID</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/avast">AVAST</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/avast">AVAST Premium Security for PC</Link>
                              </li>
                              <li>
                                <Link to="/avast">AVAST Premium Security for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/avast">AVAST Ultimate for PC</Link>
                              </li>
                              <li>
                                <Link to="/avast">AVAST SecureLine VPN for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/avast">AVAST Driver Update for PC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/norton">Norton</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/norton">Norton 360 Deluxe for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/norton">Norton 360 Premium for PC - MAC - ANDROID - IOS</Link>
                              </li>
                              <li>
                                <Link to="/norton">Norton 360 Standard for PC - MAC - ANDROID - IOS</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/vpn" className='desktop-item'>
                        VPN
                      </Link>
                      <input type='checkbox' id='showMega3' />
                      <label for='showMega3' className='mobile-item'>
                        VPN
                      </label>
                      <div className='mega-box'>
                        <div className='content'>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/vpnforpc">VPN for PC</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/vpnforpc">HMA VPN - PC</Link>
                              </li>
                              <li>
                                <Link to="/vpnforpc">AVAST SecureLine VPN - PC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/vpnformac">VPN for MAC</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/vpnformac">HMA VPN - MAC</Link>
                              </li>
                              <li>
                                <Link to="/vpnformac">AVAST SecureLine VPN - MAC</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/vpnformobile">VPN for MOBILE</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/vpnformobile">HMA VPN - ANDROID / IOS</Link>
                              </li>
                              <li>
                                <Link to="/vpnformobile">AVAST SecureLine VPN - ANDROID / IOS</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/hmavpn">HMA VPN </Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/hmavpn">HMA VPN</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/avastvpn">Avast VPN</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/avastvpn">AVAST SecureLine VPN</Link>
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
                           <header className='mega-box-heading'><Link to="/windowsserver">Windows Server</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/windowsserver">Windows Server 2022</Link>
                              </li>
                              <li>
                                <Link to="/windowsserver">Windows Server 2019</Link>
                              </li>
                              <li>
                                <Link to="/windowsserver">Windows Server 2016</Link>
                              </li>
                              <li>
                                <Link to="/windowsserver">Windows Server 2012</Link>
                              </li>
                              <li>
                                <Link to="/windowsserver">Windows Storage Server 2016</Link>
                              </li>
                              <li>
                                <Link to="/windowsserver">Windows Storage Server 2012</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/windowsservercal">Windows Server CAL</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/windowsservercal">Windows Server 2022 CAL</Link>
                              </li>
                              <li>
                                <Link to="/windowsservercal">Windows Server 2019 CAL</Link>
                              </li>
                              <li>
                                <Link to="/windowsservercal">Windows Server 2016 CAL</Link>
                              </li>
                              <li>
                                <Link to="/windowsservercal">Windows Server 2012 CAL</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/windowsserverrdscal">Windows Server RDS CAL</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/windowsserverrdscal">Windows Server 2022 RDS CAL</Link>
                              </li>
                              <li>
                                <Link to="/windowsserverrdscal">Windows Server 2019 RDS CAL</Link>
                              </li>
                              <li>
                                <Link to="/windowsserverrdscal">Windows Server 2016 RDS CAL</Link>
                              </li>
                              <li>
                                <Link to="/windowsserverrdscal">Windows Server 2012 RDS CAL</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/microsoftsqlserver">Microsoft SQL Server</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/microsoftsqlserver">Microsoft SQL Server 2019 Standard</Link>
                              </li>
                              <li>
                                <Link to="/microsoftsqlserver">Microsoft SQL Server 2017 Standard</Link>
                              </li>
                              <li>
                                <Link to="/microsoftsqlserver">Microsoft SQL Server 2016 Standard</Link>
                              </li>
                              <li>
                                <Link to="/microsoftsqlserver">Microsoft SQL Server 2014 Standard</Link>
                              </li>
                              <li>
                                <Link to="/microsoftsqlserver">Microsoft SQL Server 2012 Standard</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/backuprecovery" className='desktop-item'>
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
                         <header className='mega-box-heading'><Link to="/aomei">AOMEI</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/aomei">AOMEI Backupper</Link>
                              </li>
                              <li>
                                <Link to="/aomei">AOMEI Partition Assistant</Link>
                              </li>
                              <li>
                                <Link to="/aomei">AOMEI OneKey Recovery</Link>
                              </li>
                            </ul>
                          </div>
                          <div className='row'>
                          <header className='mega-box-heading'><Link to="/easeus">EaseUS</Link></header>
                            <ul className='mega-links'>
                              <li>
                                <Link to="/easeus">EaseUS Data Recovery</Link>
                              </li>
                              <li>
                                <Link to="/easeus">EaseUS Todo Backup</Link>
                              </li>
                              <li>
                                <Link to="/easeus">EaseUS Partition Master</Link>
                              </li>
                              <li>
                                <Link to="/easeus">EaseUS MobiSaver</Link>
                              </li>
                              <li>
                                <Link to="/easeus">EaseUS Deploy Manager</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
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
