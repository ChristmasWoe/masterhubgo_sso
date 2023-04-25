import React,{ useState,useEffect }  from "react";
import "../utils/locales/i18n";
import i18n from "../utils/locales/i18n";
import { withTranslation } from "react-i18next";
import "./App.css";
import LeftPanel from "../Components/LeftPanel/LeftPanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Components/Login/Login"
import LangSelect from "../Components/LangSelect/LangSelect";
import Signup from "../Components/Signup/Signup";

const App = ({ t, ...props }) => {
  const [lang,setLang] = useState(i18n.language)

  useEffect(()=>{
    i18n.changeLanguage(lang);
    localStorage.setItem("lang",lang)
  },[lang])

 
  return (
    <Router>
      <div className="app">
        <LeftPanel />
        <LangSelect setValue={setLang} value={lang} />
        <Switch>
          <Route path="/signup">
            <Signup />
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
