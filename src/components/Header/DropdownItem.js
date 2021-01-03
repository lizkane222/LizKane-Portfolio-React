import React, {Component} from "react";
import "./dropdown.css"
import {ReactComponent as AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai"

import ResumeDoc from "../Room/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../Room/Docs/MastersDoc.jsx";
import GACertDoc from "../Room/Docs/GACertDoc.jsx";
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