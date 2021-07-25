import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // wrap
import "bootstrap/dist/css/bootstrap.min.css";


import Login from "../Pages/LoginRegister/Login";
import Landing from "../Pages/LandingPage/landing"
import Register from "../Pages/LoginRegister/Register";
import Gadgets from "../Pages/ProductBrowsing/Gadgets";
import Cosmetics from "../Pages/ProductBrowsing/Cosmetics";
import Nav from "../Header/Header";
import TestPage from '../Header/About';
import Header from '../Header/Header';
import Laptopdetails from '../Pages/Dashboard/Details/Laptopdetails';
import Cameradetails from '../Pages/Dashboard/Details/CameraDetails';

function App() {

  // it allows to have different component in the different pages. Like login page without navbar.
  // login page without navbar and footer component.
  const LoginContainer = () => (
    <div className="">
      <Route exact path="/login" component={Login} />
    </div>
  )

  const RegisterContainer = () => (
    <div className="">
      <Route exact path="/register" component={Register} />
    </div>
  )

  // Pages with Header/navbar and footer component.
  const DefaultContainer = () => (
    <div>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={TestPage} />
      <Route exact path="/product/gadgets" component={Gadgets} />
      <Route exact path="/product/cosmetics" component={Cosmetics} />
      <Route exact path="/product/gadget/laptopdetails" component={Laptopdetails} />
      <Route exact path="/product/gadget/cameradetails" component={Cameradetails} />


    </div>
  )

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/nav" component={Nav} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
