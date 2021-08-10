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
import Auth from '../Auth/Auth'
import 'react-toastify/dist/ReactToastify.css';
import cart from '../Pages/Dashboard/cart/Cart';
import Profile from '../Pages/Dashboard/UserProfile/userProfile';
import Address from '../Pages/Dashboard/UserProfile/address';
import EditProfile from '../Pages/Dashboard/UserProfile/profileEdit';

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

  // Pages with Header/navbar and footer component.
  const DefaultContainer = () => (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/product/gadgets" component={Gadgets} />
      <Route exact path="/user/profile" component={Profile} />
      <Route exact path="/user/address" component={Address} />
      <Route exact path="/user/edit" component={EditProfile} />
      <Route exact path="/product/cosmetics" component={Cosmetics} />
      <Route exact path="/product/gadget/laptopdetails/:id" component={LaptopDetails} />
      <Route exact path="/product/gadget/cameradetails/:id" component={CameraDetails} />
      <Route exact path="/product/cosmetic/cosmeticdetails/:id" component={CosmeticDetails} />
      <Route exact path="/cart" component={cart} />
    </>

  )

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/auth" component={AuthContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
