import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // wrap

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Gadgets from "../Pages/ProductBrowsing/Gadgets";
import Cosmetics from "../Pages/ProductBrowsing/Cosmetics";
import Header from '../Header/Header';
import LaptopDetails from '../Pages/Dashboard/Details/Laptopdetails';
import CameraDetails from '../Pages/Dashboard/Details/CameraDetails';
import CosmeticDetails from '../Pages/Dashboard/Details/CosmeticDetails';
import Home from '../Pages';
import ProductRequest from '../Pages/Dashboard/ProductRequesting/RequestProduct';
import Auth from '../Auth/Auth'
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Pages/Dashboard/UserProfile/userProfile';
import Address from '../Pages/Dashboard/UserProfile/address';
import EditProfile from '../Pages/Dashboard/UserProfile/profileEdit';
import MyOrder from '../Pages/Dashboard/UserProfile/MyOrder';
import Cart from '../Pages/Dashboard/cart/ContextCart';
import VerifyEmail from '../Auth/VerifyEmail';
import EmailVerified from '../Auth/EmailVerified';
import ForgotPassword from '../Pages/LoginRegister/ForgotPassword'
import SimpleRating from '../Pages/Dashboard/Details/rating'

require('dotenv').config();

function App() {

  // it allows to have different component in the different pages. Like login page without navbar.
  // login page without navbar and footer component.
  const LoginContainer = () => (
    <>
      <Route exact path="/login" component={Login} />
    </>
  )

  const RegisterContainer = () => (
    <>
      <Route exact path="/register" component={Register} />
    </>
  )

  const AuthContainer = () => (
    <>
      <Route exact path="/auth" component={Auth} />
    </>
  )

  const VerifyEmailContainer = () => (
    <>
      <Header />
      <Route exact path="/register/email/verify" component={VerifyEmail} />
    </>
  )

  const EmailVerifiedContainer = () => (
    <>
      <Route exact path="/register/email/verify/:token" component={EmailVerified} />
    </>
  )

  const ForgotContainer = () => (
    <>
      <Route exact path="/login/forgot/password" component={ForgotPassword} />
    </>
  )


  // Pages with Header/navbar and footer component.
  const DefaultContainer = () => (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/user/product/request" component={ProductRequest} />
      <Route exact path="/product/gadgets" component={Gadgets} />
      <Route exact path="/user/profile" component={Profile} />
      <Route exact path="/user/address" component={Address} />
      <Route exact path="/user/edit" component={EditProfile} />
      <Route exact path="/user/myorder" component={MyOrder} />
      <Route exact path="/product/cosmetics" component={Cosmetics} />
      <Route exact path="/product/gadget/laptopdetails/:id" component={LaptopDetails} />
      <Route exact path="/product/gadget/cameradetails/:id" component={CameraDetails} />
      <Route exact path="/product/cosmetic/cosmeticdetails/:id" component={CosmeticDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/rating" component={SimpleRating} />
    </>

  )

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/register/email/verify" component={VerifyEmailContainer} />
          <Route exact path="/login/forgot/password" component={ForgotContainer} />
          <Route exact path="/auth" component={AuthContainer} />
          <Route exact path="/register/email/verify/:token" component={EmailVerifiedContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
