import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Loginpage from "./Components/Loginpage";
import RegisterPage from "./Components/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Loginpage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
