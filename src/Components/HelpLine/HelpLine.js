import React from "react";
import "./HelpLine.scss";

const HelpLine = ({ mainText, link, link_text, shouldBreak, ...props }) => {
  return (
    <div className="login-help-line">
      <p>
        {mainText}
        {shouldBreak ? <br /> : " "}
        <a href={link}>{link_text}</a>
      </p>
    </div>
  );
};

export default HelpLine;
