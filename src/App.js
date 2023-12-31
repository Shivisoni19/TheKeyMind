import './App.css'
import './css/bootstrap.css'
import './css/style.css'
import './css/classic.css'
import './css/flexslider.css'
import './css/font-awesome.css'
import './css/jquery.bxslider.css'
import './css/jquery.countdown.css'
import './css/jquery.fancybox-1.3.4.css'
import './css/jquery.fancybox.css'
import './css/magnific-popup.css'
import './css/responsive.css'
import './css/settings.css'
import './css/fonts/fontawesome-webfontba72.svg'
import './css/fonts/fontawesome-webfontba72.eot'
import './css/fonts/fontawesome-webfontba72.svg'
import './css/fonts/fontawesome-webfontba72.ttf'
import './css/fonts/fontawesome-webfontba72.woff'
import './css/fonts/fontawesome-webfontd41d.eot'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Registration from './pages/Registration'
import MicrosoftOffice from './pages/MicrosoftOffice'
import OperatingSystem from './pages/OperatingSystem'
import Server from './pages/Server'
import BackupRecovery from './pages/BackupRecovery'
import VPN from './pages/VPN'
import Antivirus from './pages/Antivirus'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import MyAccount from './pages/MyAccount'
import PersonalAccount from './pages/PersonalAccount'
import PersonalAddress from './pages/PersonalAddress'
import NewAddress from './components/MyAccount/PersonalAddress/NewAddress'
import UpdateAddress from './components/MyAccount/PersonalAddress/UpdateAddress'
import OrderHistory from './pages/OrderHistory'
import NoOrderHistory from './pages/NoOrderHistory'
import Vouchers from './pages/Vouchers'
import Merchandise from './pages/Merchandise'
import Keys from './pages/Keys'
import MyAlert from './pages/MyAlert'
import MyCart from './pages/MyCart'
import PurchaseCard from './pages/PurchaseCard'
import PendingCard from './pages/PendingCard'
import Page404 from './pages/Page404'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import Shipping from './pages/Shipping'
import ReturnRefund from './pages/ReturnRefund'
import ProductSubPage from './pages/ProductSubPage.jsx'
import { useEffect, useState } from 'react'
import { auth } from './firebase'
import Windows7 from './pages/Windows7'
import Windows8 from './pages/Windows8'
import Windows10 from './pages/Windows10'
import Windows11 from './pages/Windows11'
import AOMEI from './pages/AOMEI'
import EaseUs from './pages/EaseUs'
import MicrosoftOfficeApp from './pages/MicrosoftOfficeApp'
import MicrosoftOfc2021 from './pages/MicrosoftOfc2021'
import MicrosoftOfc2019 from './pages/MicrosoftOfc2019'
import MicrosoftOfc2016 from './pages/MicrosoftOfc2016'
import MicrosoftOfc2013 from './pages/MicrosoftOfc2013'
import MicrosoftOfc2010 from './pages/MicrosoftOfc2010'
import Microsoft365 from './pages/Microsoft365'
import MicrosoftOfcMac from './pages/MicrosoftOfcMac'
import Kaspersky from './pages/Kaspersky'
import ESET from './pages/ESET'
import McAfee from './pages/McAfee'
import Bitdefender from './pages/Bitdefender'
import AVAST from './pages/AVAST'
import Norton from './pages/Norton'
import Blog from './pages/Blog'
import VPNforPC from './pages/VPNforPC'
import VPNforMac from './pages/VPNforMac'
import VPNforMobile from './pages/VPNforMobile'
import HMA_VPN from './pages/HMA_VPN'
import AvastVPN from './pages/AvastVPN'
import MicrosoftSQLServer from './pages/MicrosoftSQLServer'
import WindowsServer from './pages/WindowsServer'
import WindowsServerCal from './pages/WindowsServerCal'
import WindowsServerRdsCal from './pages/WindowsServerRdsCal'
import AddProducts from './admin/AddProducts'
import AddBestSellers from './admin/AddBestSellers'
import AddWindows10 from './admin/AddWindows10'
import AddWindows7 from './admin/AddWindows7'
import AddWindows8 from './admin/AddWindows8'
import Windows10Details from './pages/GetProductDetails/Windows10Details'
import Windows7Details from './pages/GetProductDetails/Windows7Details'
import Windows8Details from './pages/GetProductDetails/Windows8Details'
import AddOffice2021 from './admin/AddOffice2021'
import AddOffice2019 from './admin/AddOffice2019'
import AddOffice2016 from './admin/AddOffice2016'
import AddOffice2013 from './admin/AddOffice2013'
import AddOffice2010 from './admin/AddOffice2010'
import AddOffice365 from './admin/AddOffice365'
import AddOfficeMac from './admin/AddOfficeMac'
import AddOfficeApp from './admin/AddOfficeApp'
import AddKaspersky from './admin/AddKaspersky'
import AddESET from './admin/AddESET'
import AddMcAfee from './admin/AddMcAfee'
import AddBitdefender from './admin/AddBitdefender'
import AddAvast from './admin/AddAvast'
import AddNorton from './admin/AddNorton'
import AddAvastVpn from './admin/AddAvastVpn'
import AddHmaVpn from './admin/AddHmaVpn'
import AddVpnPc from './admin/AddVpnPc'
import AddVpnMobile from './admin/AddVpnMobile'
import AddVpnMac from './admin/AddVpnMac'
import AddWindowsServer from './admin/AddWindowsServer'
import AddWindowsServerCal from './admin/AddWindowsServerCal'
import AddWindowsServerRdsCal from './admin/AddWindowsServerRdsCal'
import AddMicrosoftSqlServer from './admin/AddMicrosoftSqlServer'
import AddEaseUs from './admin/AddEaseUs'
import AddAOMEI from './admin/AddAOMEI'
import MicrosoftOfc2021Details from './pages/GetProductDetails/MicrosoftOfc2021Details'
import MicrosoftOfc2019Details from './pages/GetProductDetails/MicrosoftOfc2019Details'
import MicrosoftOfc2016Details from './pages/GetProductDetails/MicrosoftOfc2016Details'
import MicrosoftOfc2013Details from './pages/GetProductDetails/MicrosoftOfc2013Details'
import MicrosoftOfc2010Details from './pages/GetProductDetails/MicrosoftOfc2010Details'
import MicrosoftOfc365Details from './pages/GetProductDetails/MicrosoftOfc365Details'
import MicrosoftOfcMacDetails from './pages/GetProductDetails/MicrosoftOfcMacDetails'
import MicrosoftOfcAppDetails from './pages/GetProductDetails/MicrosoftOfcAppDetails'
import KasperskyDetails from './pages/GetProductDetails/KasperskyDetails'
import ESETDetails from './pages/GetProductDetails/ESETDetails';
import McAfeeDetails from './pages/GetProductDetails/McAfeeDetails';
import BitdefenderDetails from './pages/GetProductDetails/BitdefenderDetails';
import AvastDetails from './pages/GetProductDetails/AvastDetails';
import NortonDetails from './pages/GetProductDetails/NortonDetails';
import VPNforPCDetails from './pages/GetProductDetails/VPNforPCDetails';
import VPNforMacDetails from './pages/GetProductDetails/VPNforMacDetails';
import VPNforMobileDetails from './pages/GetProductDetails/VPNforMobileDetails';
import HMAVPNDetails from './pages/GetProductDetails/HMAVPNDetails';
import AvastVPNDetails from './pages/GetProductDetails/AvastVPNDetails';
import WindowsServerDetails from './pages/GetProductDetails/WindowsServerDetails';
import WindowsServerCalDetails from './pages/GetProductDetails/WindowsServerCalDetails';
import WindowsServerRdsCalDetails from './pages/GetProductDetails/WindowsServerRdsCalDetails';
import MicrosoftSqlServerDetails from './pages/GetProductDetails/MicrosoftSqlServerDetails';
import AOMEIDetails from './pages/GetProductDetails/AOMEIDetails'
import EaseUsDetails from './pages/GetProductDetails/EaseUsDetails'
import BestSellersDetails from './pages/GetProductDetails/BestSellersDetails.jsx'


function App () {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Registration />} />
          <Route exact path='/microsoftoffice' element={<MicrosoftOffice />} />
          <Route exact path='/operatingsystem' element={<OperatingSystem />} />
          <Route exact path='/server' element={<Server />} />
          <Route exact path='/vpn' element={<VPN />} />
          <Route exact path='/antivirus' element={<Antivirus />} />
          <Route exact path='/backuprecovery' element={<BackupRecovery />} />
          {/* -------------Product Details Fetching Route -----------------------*/}
          <Route path="/bestsellerdata/:id" element={<BestSellersDetails/>} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/windows10data/:id" element={<Windows10Details />} />
          <Route path="/windows7data/:id" element={<Windows7Details/>} />
          <Route path="/windows8data/:id" element={<Windows8Details/>} />
          <Route path="/microsoftoffice2021data/:id" element={<MicrosoftOfc2021Details/>} />
          <Route path="/microsoftoffice2019data/:id" element={<MicrosoftOfc2019Details/>} />
          <Route path="/microsoftoffice2016data/:id" element={<MicrosoftOfc2016Details/>} />
          <Route path="/microsoftoffice2013data/:id" element={<MicrosoftOfc2013Details/>} />
          <Route path="/microsoftoffice2010data/:id" element={<MicrosoftOfc2010Details/>} />
          <Route path="/microsoftoffice365data/:id" element={<MicrosoftOfc365Details/>} />
          <Route path="/microsoftofficemacdata/:id" element={<MicrosoftOfcMacDetails/>} />
          <Route path="/microsoftofficeappdata/:id" element={<MicrosoftOfcAppDetails/>} />
          <Route path="/kasperskydata/:id" element={<KasperskyDetails/>} />
          <Route path="/esetdata/:id" element={<ESETDetails/>} />
          <Route path="/mcafeedata/:id" element={<McAfeeDetails/>} />
          <Route path="/bitdefenderdata/:id" element={<BitdefenderDetails/>} />
          <Route path="/avastdata/:id" element={<AvastDetails/>} />
          <Route path="/nortondata/:id" element={<NortonDetails/>} />
          <Route path="/vpnpcdata/:id" element={<VPNforPCDetails/>} />
          <Route path="/vpnmacdata/:id" element={<VPNforMacDetails/>} />
          <Route path="/vpnmobiledata/:id" element={<VPNforMobileDetails/>} />
          <Route path="/hmavpndata/:id" element={<HMAVPNDetails/>} />
          <Route path="/avastvpndata/:id" element={<AvastVPNDetails/>} />
          <Route path="/windowsserverdata/:id" element={<WindowsServerDetails/>} />
          <Route path="/windowsservercaldata/:id" element={<WindowsServerCalDetails/>} />
          <Route path="/windowsserverrdscaldata/:id" element={<WindowsServerRdsCalDetails/>} />
          <Route path="microsoftsqlserverdata/:id" element={<MicrosoftSqlServerDetails/>} />
          <Route exact path='/aomeidata/:id' element={<AOMEIDetails/>} />
          <Route exact path='/easeusdata/:id' element={<EaseUsDetails />} />
          
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/myaccount' element={<MyAccount />} />
          <Route exact path='/personalaccount' element={<PersonalAccount />} />
          <Route exact path='/personaladdress' element={<PersonalAddress />} />
          <Route exact path='/newaddress' element={<NewAddress />} />
          <Route exact path='/updateaddress' element={<UpdateAddress />} />
          <Route exact path='/orderhistory' element={<OrderHistory />} />
          <Route exact path='/noorder' element={<NoOrderHistory />} />
          <Route exact path='/vouchers' element={<Vouchers />} />
          <Route exact path='/merchandise' element={<Merchandise />} />
          <Route exact path='/keys' element={<Keys />} />
          <Route exact path='/myalert' element={<MyAlert />} />
          <Route exact path='/mycart' element={<MyCart />} />
          <Route exact path='/purchasecard' element={<PurchaseCard />} />
          <Route exact path='/pendingcard' element={<PendingCard />} />
          <Route exact path='/pagenotfound' element={<Page404 />} />
          <Route exact path='/termsconditions' element={<TermsConditions />} />
          <Route exact path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route exact path='/cookiepolicy' element={<CookiePolicy />} />
          <Route exact path='/shipping' element={<Shipping />} />
          <Route exact path='/returnrefund' element={<ReturnRefund />} />
          <Route exact path='/productsubpage' element={<ProductSubPage />} />
          <Route exact path='/windows7' element={<Windows7 />} />
          <Route exact path='/windows8' element={<Windows8 />} />
          <Route exact path='/windows10' element={<Windows10 />} />
          <Route exact path='/windows11' element={<Windows11 />} />
          <Route exact path='/aomei' element={<AOMEI/>} />
          <Route exact path='/easeus' element={<EaseUs />} />
          <Route exact path='/microsoftofficeapp' element={<MicrosoftOfficeApp />} />
          <Route exact path='/microsoftoffice2021' element={<MicrosoftOfc2021/>} />
          <Route exact path='/microsoftoffice2019' element={<MicrosoftOfc2019/>} />
          <Route exact path='/microsoftoffice2016' element={<MicrosoftOfc2016/>} />
          <Route exact path='/microsoftoffice2013' element={<MicrosoftOfc2013/>} />
          <Route exact path='/microsoftoffice2010' element={<MicrosoftOfc2010/>} />
          <Route exact path='/microsoft365' element={<Microsoft365/>} />
          <Route exact path='/microsoftofficemac' element={<MicrosoftOfcMac/>} />
          <Route exact path='/kaspersky' element={<Kaspersky/>} />          
          <Route exact path='/eset' element={<ESET/>} />
          <Route exact path='/mcafee' element={<McAfee/>} />
          <Route exact path='/bitdefender' element={<Bitdefender/>} />
          <Route exact path='/avast' element={<AVAST/>} />
          <Route exact path='/norton' element={<Norton/>} />
          <Route exact path='/blog' element={<Blog/>} />
          <Route exact path="/vpnforpc" element={<VPNforPC/>} />
          <Route exact path="/vpnformobile" element={<VPNforMobile/>} />
          <Route exact path="/vpnformac" element={<VPNforMac/>} />
          <Route exact path="/hmavpn" element={<HMA_VPN/>} />
          <Route exact path="/avastvpn" element={<AvastVPN/>} />
          <Route exact path="/microsoftsqlserver" element={<MicrosoftSQLServer/>} />
          <Route exact path="/windowsserver" element={<WindowsServer/>}/>
          <Route exact path="/windowsservercal" element={<WindowsServerCal/>}/>
          <Route exact path="/windowsserverrdscal" element={<WindowsServerRdsCal/>}/>
          {/* ----------------Add Products by Admin Panel---------------  */}
          <Route exact path="/addproducts" element={<AddProducts/>}/>
          <Route exact path="/addbestsellers" element={<AddBestSellers/>}/>
          <Route exact path="/addwindows10" element={<AddWindows10/>}/>
          <Route exact path="/addwindows7" element={<AddWindows7/>}/>
          <Route exact path="/addwindows8" element={<AddWindows8/>}/>
          <Route exact path="/addoffice2021" element={<AddOffice2021/>}/>
          <Route exact path="/addoffice2019" element={<AddOffice2019/>}/>
          <Route exact path="/addoffice2016" element={<AddOffice2016/>}/>
          <Route exact path="/addoffice2013" element={<AddOffice2013/>}/>
          <Route exact path="/addoffice2010" element={<AddOffice2010/>}/>
          <Route exact path="/addoffice365" element={<AddOffice365/>}/>
          <Route exact path="/addofficemac" element={<AddOfficeMac/>}/>
          <Route exact path="/addofficeapp" element={<AddOfficeApp/>}/>
          <Route exact path="/addkaspersky" element={<AddKaspersky/>}/>
          <Route exact path="/addeset" element={<AddESET/>}/>
          <Route exact path="/addmcafee" element={<AddMcAfee/>}/>
          <Route exact path="/addbitdefender" element={<AddBitdefender/>}/>
          <Route exact path="/addbitdefender" element={<AddBitdefender/>}/>
          <Route exact path="/addnorton" element={<AddNorton/>}/>
          <Route exact path="/addavast" element={<AddAvast/>}/>
          <Route exact path="/addvpnpc" element={<AddVpnPc/>}/>
          <Route exact path="/addvpnmobile" element={<AddVpnMobile/>}/>
          <Route exact path="/addvpnmac" element={<AddVpnMac/>}/>
          <Route exact path="/addhmavpn" element={<AddHmaVpn/>}/>
          <Route exact path="/addavastvpn" element={<AddAvastVpn/>}/>
          <Route exact path="/addwindowsserver" element={<AddWindowsServer/>}/>
          <Route exact path="/addwindowsservercal" element={<AddWindowsServerCal/>}/>
          <Route exact path="/addwindowsserverrdscal" element={<AddWindowsServerRdsCal/>}/>
          <Route exact path="/addmicrosoftsqlserver" element={<AddMicrosoftSqlServer/>}/>
          <Route exact path="/addeaseus" element={<AddEaseUs/>}/>
          <Route exact path="/addaomei" element={<AddAOMEI/>}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
