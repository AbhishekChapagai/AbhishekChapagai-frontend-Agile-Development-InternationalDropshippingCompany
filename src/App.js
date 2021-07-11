import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // wrap
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Pages/LoginRegister/Login";
import Register from "./components/Pages/LoginRegister/Register";

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
