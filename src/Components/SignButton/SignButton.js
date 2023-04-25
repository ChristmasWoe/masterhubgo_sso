import React from "react";
import "./SignButton.scss"

const SignButton = ({label,disabled,...props}) => {
    return (
        <button disabled={disabled} className="signButton">{label}</button>
    )
}

export default SignButton;