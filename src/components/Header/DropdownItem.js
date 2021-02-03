import React, {Component} from "react";
import "./dropdown.css"
import {ReactComponent as AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai"

import ResumeDoc from "../ResourcesProjects/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../ResourcesProjects/Docs/BachelorsDoc.jsx";
import MastersDoc from "../ResourcesProjects/Docs/MastersDoc.jsx";
import GACertDoc from "../ResourcesProjects/Docs/GACertDoc.jsx";
import { Dropdown } from "materialize-css";
import { FaDivide } from "react-icons/fa";

const DropdownItem = (props) => {
    return(

        <a className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
                {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>

  )
}

export default DropdownItem;