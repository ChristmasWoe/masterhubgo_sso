import React from "react";
import "../utils/locales/i18n";
import { withTranslation } from "react-i18next";
import "./App.css";
import LeftPanel from "../Components/LeftPanel/LeftPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Components/Login/Login"

const App = ({ t, ...props }) => {
  const [lang,setLang] = useState("ru-RU")

  return (
    <Router>
      <div className="app">
        <LeftPanel />
        <Switch>
          <Route path="/signup">
            {/* <About /> */}
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default withTranslation()(App);
