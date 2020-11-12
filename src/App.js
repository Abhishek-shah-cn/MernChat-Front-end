import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Loginpage from "./Components/Loginpage";
import RegisterPage from "./Components/RegisterPage";
import IndexPage from "./Components/IndexPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={Loginpage} exact/>
        <Route path="/register" component={RegisterPage} exact/>
        <Route path="/dashboard" component={Dashboard} exact/>
        <Route path="/chatroom/:id" component={Dashboard} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
