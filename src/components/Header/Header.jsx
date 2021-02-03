import React, {useState} from 'react';
import {Link} from 'react-scroll';
// import OnScreenScrolling from './OnScreenScrolling';
import OnScreenScrolling from './OnScreenScrolling';
import WrapperNav from './WrapperNav';
import styled from 'styled-components';
import { useToggle} from "react-use";
import Splash from "../DarkLightTheme/SplashScreen";
// import "./toggle.css";

// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css'
// import {Badge, makeStyles, ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse} from "@material-ui/core"
// import {ExpandLess, ExpandMore} from "@material-ui/icons";
// import "../Header/dropdown.css"

import Resource from '../ResourcesProjects/Resource';
import ResourceList from "../ResourcesProjects/ResourceList";
import ResumeDoc from "../ResourcesProjects/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../ResourcesProjects/Docs/BachelorsDoc.jsx";
import MastersDoc from "../ResourcesProjects/Docs/MastersDoc.jsx";
import GACertDoc from "../ResourcesProjects/Docs/GACertDoc.jsx";

import LandingPage from "../../Pages/LandingPage";
import ResumePage from "../../Pages/ResumePage";
import EducationPage from "../../Pages/EducationPage";
import WorkPage from "../../Pages/WorkPage";
import ProjectsPage from "../../Pages/ProjectsPage";
import InterestsPage from "../../Pages/InterestsPage";
import ContactPage from "../../Pages/ContactPage";



const NavbarStyled = styled.div`
  font-size: 24px;
  font-family: 'Bodoni Moda', serif;
  position: fixed;
  width: 100%;
  z-index: 2990;
  .navbar {
    background: rgba(56,56,56,1);
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: #fff;
    z-index: 2990;
    border: none;
    * {
      cursor: pointer;
    }
    .active {
        border-bottom: 3px solid #327E8A;

    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    z-index: 2990;
  }
  .navLinks {
    font-size: 1.7em;
    color:#fff;
    z-index: 2990;
    padding: 0 2.3%;
    z-index: 2990;
  }
  .navLinks:hover {
    filter: brightness(1.5);
    background: rgba(56,56,56,.5);
    z-index: 2990;
    text-decoration: none;
}
`;
// text-shadow: -1px 1px 3px #242526;
// color:#8B0124;

const Header = (props) => {
  
        return (
            <WrapperNav style={{"max-height": "7vh"}}>
                <NavbarStyled className="header">
                    {/* <header className="header"> */}
                            {/* <Splash theme={props.theme} setTheme={props.setTheme}/> */}
                        <nav className="navbar">
                            <Link activeClass="active" className="navLinks" to="landingPage" spy={true} smooth={true} duration={1000}>
                                LK
                            </Link>

                            <Link activeClass="active" className="navLinks" to="resumePage" spy={true} smooth={true} duration={1000}>
                                Resume
                            </Link>

                            <Link activeClass="active" className="navLinks" to="educationPage" spy={true} smooth={true} duration={1000}>
                                Education
                            </Link>

                            <Link activeClass="active" className="navLinks" to="projectsPage" spy={true} smooth={true} duration={1000}>
                                Projects
                            </Link>

                            <Link activeClass="active" className="navLinks" to="workPage" spy={true} smooth={true} duration={1000}>
                                Work
                            </Link>

                            <Link activeClass="active" className="navLinks" to="interestsPage" spy={true} smooth={true} duration={1000}>
                                Interests
                            </Link>

                            <Link activeClass="active" className="navLinks" to="contactPage" spy={true} smooth={true} duration={1000}>
                                Contact
                            </Link>

                            
                        </nav>
                    {/* </header> */}
                </NavbarStyled>
            </WrapperNav>
    );
}

export default Header;

