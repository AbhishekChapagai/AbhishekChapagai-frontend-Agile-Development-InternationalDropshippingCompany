import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"; // wrap
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/" component={ } /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
