import React, { useState } from "react";
import "./Login.scss";
import { withTranslation } from "react-i18next";
import SignMethods from "../SignMethods/SignMethods";
import ComplexDivider from "../ComplexDivider/ComplexDivider";
import SignButton from "../SignButton/SignButton";
import ComplexInput from "../ComplexInput/ComplexInput";
import HelpLine from "../HelpLine/HelpLine";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const Login = ({ t, ...props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const onEmailBlur = (e) => {
    if (!validateEmail(e.target.value)) {
      setEmailError(t("email_not_allowed_chars"));
    }
  };

  const onEmailFocused = (e) => {
    setEmailError(null);
  };
  const isSubmitDisabled = email.trim()==""||password.trim()==""||emailError||passwordError;
  return (
    <div className="login-wrapper">
      <div className="login">
        <h3>{t("login")}</h3>
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
          onChange={(e) => setPassword(e.target.value)}
          label={t("password")}
          value={password}
          isPassword={true}
          placeholder={t("password_placeholder")}
          error={passwordError}
        />
        <ComplexDivider t={t} />
        <SignMethods />
        <SignButton disabled={isSubmitDisabled} label={t("sign_in")} />
        <HelpLine
          mainText={t("forgot_password")}
          link_text={t("reset_password")}
        />
        <HelpLine   link="/signup" mainText={t("no_account")} link_text={t("signup")} />
      </div>
    </div>
  );
};

export default withTranslation()(Login);
