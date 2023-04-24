import React from "react";
import "./ComplexDivider.scss"

const ComplexDivder = ({t,...props}) => {
    return (
        <div style={{ marginTop: "18px" }} className="complex-divider">
        <div className="divider" />
        <p>{t("or")}</p>
        <div className="divider" />
      </div>

    )
}

export default ComplexDivder;