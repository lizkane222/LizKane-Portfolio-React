import React, {Component} from "react";
import "./dropdown.css";
import DropdownItem from "./DropdownItem";

import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai"

import ResumeDoc from "../Room/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../Room/Docs/MastersDoc.jsx";
import GACertDoc from "../Room/Docs/GACertDoc.jsx";
import { Dropdown } from "materialize-css";




const DropdownMenu = (props) => {
  return(
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
      leftIcon={AiFillCaretLeft}
      rightIcon={AiFillCaretRight}
      >
        <a>LIZKANE</a>
      </DropdownItem>
    </div>
  )
}

export default DropdownMenu;