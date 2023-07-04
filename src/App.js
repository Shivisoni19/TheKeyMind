import "./App.css";
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

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MicrosoftOffice from "./pages/MicrosoftOffice";
import OperatingSystem from './pages/OperatingSystem';
import Server from './pages/Server';
import BackupRecovery from './pages/BackupRecovery';
import VPN from './pages/VPN';
import Antivirus from './pages/Antivirus';
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import PersonalAccount from "./pages/PersonalAccount";
import PersonalAddress from "./pages/PersonalAddress";
import NewAddress from "./components/MyAccount/PersonalAddress/NewAddress";
import UpdateAddress from "./components/MyAccount/PersonalAddress/UpdateAddress";
import OrderHistory from "./pages/OrderHistory";
import NoOrderHistory from "./pages/NoOrderHistory";
import Vouchers from "./pages/Vouchers";
import Merchandise from "./pages/Merchandise";
import Keys from "./pages/Keys";
import MyAlert from "./pages/MyAlert";
import MyCart from "./pages/MyCart";
import PurchaseCard from './pages/PurchaseCard';
import PendingCard from './pages/PendingCard';
import Page404 from "./pages/Page404";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Shipping from "./pages/Shipping";
import ReturnRefund from "./pages/ReturnRefund";
import ProductSubPage from './pages/ProductSubPage.jsx'


function App() { 
  return (
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Registration/>}/>
            <Route exact path="/microsoftoffice" element={<MicrosoftOffice/>}/>
            <Route exact path="/operatingsystem" element={<OperatingSystem/>} />
            <Route exact path="/server" element={<Server/>} />
            <Route exact path="/vpn" element={<VPN/>} />
            <Route exact path="/antivirus" element={<Antivirus/>} />
            <Route exact path="/backuprecovery" element={<BackupRecovery/>} />
            <Route exact path="/productdetails" element={<ProductDetails/>} />
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/myaccount" element={<MyAccount/>}/>
            <Route exact path="/personalaccount" element={<PersonalAccount/>}/>
            <Route exact path="/personaladdress" element={<PersonalAddress/>}/>
            <Route exact path="/newaddress" element={<NewAddress/>}/>
            <Route exact path="/updateaddress" element={<UpdateAddress/>}/>
            <Route exact path="/orderhistory" element={<OrderHistory/>}/>
            <Route exact path="/noorder" element={<NoOrderHistory/>}/>
            <Route exact path="/vouchers" element={<Vouchers/>}/>
            <Route exact path="/merchandise" element={<Merchandise/>}/>
            <Route exact path="/keys" element={<Keys/>}/>
            <Route exact path="/myalert" element={<MyAlert/>}/>
            <Route exact path="/mycart" element={<MyCart/>}/>
            <Route exact path="/purchasecard" element={<PurchaseCard/>}/>
            <Route exact path="/pendingcard" element={<PendingCard/>}/>
            <Route exact path="/pagenotfound" element={<Page404/>}/>
            <Route exact path="/termsconditions" element={<TermsConditions/>}/>
            <Route exact path="/privacypolicy" element={<PrivacyPolicy/>}/>
            <Route exact path="/cookiepolicy" element={<CookiePolicy/>}/>
            <Route exact path="/shipping" element={<Shipping/>}/>
            <Route exact path="/returnrefund" element={<ReturnRefund/>}/>
            <Route exact path="/productsubpage" element={<ProductSubPage/>}/>

          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;