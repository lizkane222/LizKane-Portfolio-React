import React from "react";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu"

import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai";

// import ResumeDoc from "../";
import ResumeDoc from "../Room/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../Room/Docs/MastersDoc.jsx";
import GACertDoc from "../Room/Docs/GACertDoc.jsx";

// import {ReactComponent as Liz} from "../Room/UploadPhotosToWeb/badPNGs/SVG/liz.svg"



const NavHeader= () => {


    return (
        <NavBar >
            <NavItem icon="LK" id="navLizKane">
                <DropdownMenu ></DropdownMenu>
            </NavItem>
            <NavItem icon="Resume" id="navResume">
                {/* dropdown menu  */}

                <DropdownMenu>
                    

                </DropdownMenu>
            </NavItem>
            <NavItem icon="Projects" >
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem icon="Education" >
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem icon="Work" >
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem icon="Interests" >
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem icon="Contact" >
                <DropdownMenu></DropdownMenu>
            </NavItem>

        </NavBar>
    )
}

export default NavHeader;