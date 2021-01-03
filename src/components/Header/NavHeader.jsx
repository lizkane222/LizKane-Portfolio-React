import React from "react";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenuLiz from "./DropdownMenuLiz"
import DropdownMenuResume from "./DropdownMenuResume"
import DropdownMenuProjects from "./DropdownMenuProjects"
import DropdownMenuWork from "./DropdownMenuWork"
import DropdownMenuEducation from "./DropdownMenuEducation"
import DropdownMenuInterests from "./DropdownMenuInterests"
import DropdownMenuContact from "./DropdownMenuContact"
// import DropdownMenu from "./DropdownMenu"

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
                <DropdownMenuLiz></DropdownMenuLiz>
            </NavItem>
            <NavItem icon="Resume" id="navResume">
                {/* dropdown menu  */}
                {/* <p>ZACK</p> */}
                <DropdownMenuResume>
                    

                </DropdownMenuResume>
            </NavItem>
            <NavItem icon="Projects" >
                <DropdownMenuProjects></DropdownMenuProjects>
            </NavItem>
            <NavItem icon="Education" >
                <DropdownMenuEducation></DropdownMenuEducation>
            </NavItem>
            <NavItem icon="Work" >
                <DropdownMenuWork></DropdownMenuWork>
            </NavItem>
            <NavItem icon="Interests" >
                <DropdownMenuInterests></DropdownMenuInterests>
            </NavItem>
            <NavItem icon="Contact" >
                <DropdownMenuContact></DropdownMenuContact>
            </NavItem>

        </NavBar>
    )
}

export default NavHeader;