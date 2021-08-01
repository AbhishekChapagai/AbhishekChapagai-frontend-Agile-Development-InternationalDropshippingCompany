import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // wrap

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Gadgets from "../Pages/ProductBrowsing/Gadgets";
import Cosmetics from "../Pages/ProductBrowsing/Cosmetics";
import Nav from "../Header/Header";
import TestPage from '../Header/About';
import Header from '../Header/Header';
import LaptopDetails from '../Pages/Dashboard/Details/Laptopdetails';
import CameraDetails from '../Pages/Dashboard/Details/CameraDetails';
import CosmeticDetails from '../Pages/Dashboard/Details/CosmeticDetails';
import Home from '../Pages';
import Auth from '../Auth/Auth'
import 'react-toastify/dist/ReactToastify.css';

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
      <Route exact path="/about" component={TestPage} />
      <Route exact path="/product/gadgets" component={Gadgets} />
      <Route exact path="/product/cosmetics" component={Cosmetics} />
      <Route exact path="/product/gadget/laptopdetails/:id" component={LaptopDetails} />
      <Route exact path="/product/gadget/cameradetails/:id" component={CameraDetails} />
      <Route exact path="/product/cosmetic/cosmeticdetails/:id" component={CosmeticDetails} />
    </>

  )

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/auth" component={AuthContainer} />
          <Route exact path="/nav" component={Nav} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
