import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // wrap
import "bootstrap/dist/css/bootstrap.min.css";


import Login from "../Pages/LoginRegister/Login";
import Landing from "../Pages/LandingPage/landing"
import Register from "../Pages/LoginRegister/Register";
import Nav from "../Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/nav" component={Nav} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
