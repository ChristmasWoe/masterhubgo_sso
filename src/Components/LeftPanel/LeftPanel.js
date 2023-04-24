import React from "react";
import "./LeftPanel.css"
import logo from './assets/left-panel-logo.png'

const LeftPanel = ({...props}) => {
    return (<div className="left-panel">
        <img src={logo} />
    </div>)
}

export default LeftPanel;