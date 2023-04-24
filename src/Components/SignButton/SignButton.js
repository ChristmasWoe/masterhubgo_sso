import React from "react";
import "./SignButton.scss"

const SignButton = ({label,...props}) => {
    return (
        <button className="signButton">{label}</button>
    )
}

export default SignButton;