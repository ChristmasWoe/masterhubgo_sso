import React, { useState,useEffect } from "react";
import "./Signup.scss";
import { withTranslation } from "react-i18next";
import SignMethods from "../SignMethods/SignMethods.js";
import ComplexDivider from "../ComplexDivider/ComplexDivider.js";
import SignButton from "../SignButton/SignButton.js";
import ComplexInput from "../ComplexInput/ComplexInput.js";
import HelpLine from "../HelpLine/HelpLine.js";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const Signup = ({ t, ...props }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [passwordR, setPasswordR] = useState("");
  const [passwordRError, setPasswordRError] = useState(null);

  const onEmailBlur = (e) => {
    if (!validateEmail(e.target.value)) {
      setEmailError(t("email_not_allowed_chars"));
    }
  };

  const onEmailFocused = (e) => {
    setEmailError(null);
  };

  useEffect(()=>{
    if(password.trim()){
        if(password.trim()!=passwordR.trim()){
            setPasswordRError(t("password_not_match"))
        }else{
            setPasswordRError(null)
        }
    }
  },[password,passwordR])

  const isSubmitDisabled = name.trim()==""||email.trim()==""||password.trim()==""||passwordR.trim()==""||emailError||nameError||passwordError||passwordRError;

  return (
    <div className="login-wrapper">
      <div className="login">
        <h3>{t("sign_up")}</h3>
        <ComplexInput
          onChange={(e) => setName(e.target.value)}
          label={t("username")}
          value={name}
          isPassword={false}
          placeholder={t("username_placeholder")}
          error={nameError}
          //   onBlur={onEmailBlur}
          //   onFocus={onEmailFocused}
        />

        <ComplexInput
          onChange={(e) => setEmail(e.target.value)}
          label={t("email")}
          value={email}
          isPassword={false}
          placeholder={t("email_placeholder")}
          error={emailError}
          onBlur={onEmailBlur}
          onFocus={onEmailFocused}
        />

        <ComplexInput
          onChange={(e) => setPassword(e.target.value.trim())}
          label={t("password")}
          value={password}
          isPassword={true}
          placeholder={t("password_placeholder")}
          error={passwordError}
        />

        <ComplexInput
          onChange={(e) => setPasswordR(e.target.value.trim())}
          label={t("repeat_password")}
          value={passwordR}
          isPassword={true}
          placeholder={t("repeat_password")}
          error={passwordRError}
          hidePasswordToggle={true}
        />  

        <ComplexDivider t={t} />
        <SignMethods />
        <SignButton disabled={isSubmitDisabled} label={t("sign_up_button")} />
        <HelpLine
          mainText={t("have_account")}
          link_text={t("sign_in")}
          link="/"
        />
        <HelpLine
          shouldBreak={true}
          mainText={t("sign_up_condition")}
          link_text={t("privacy_policy")}
        />
      </div>
    </div>
  );
};

export default withTranslation()(Signup);
