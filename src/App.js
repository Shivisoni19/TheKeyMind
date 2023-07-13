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
          <Route exact path='/productdetails' element={<ProductDetails />} />
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
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
