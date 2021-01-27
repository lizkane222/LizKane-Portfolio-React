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
import Resource from '../Room/Resource';
// import "../Header/dropdown.css"
import ResourceList from "../Room/ResourceList";
import ResumeDoc from "../Room/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../Room/Docs/MastersDoc.jsx";
import GACertDoc from "../Room/Docs/GACertDoc.jsx";




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
  .navbar {
    background: rgba(23,23,23,1);
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    z-index: 2990;
    * {
      cursor: pointer;
    }
    .active {
        border-bottom: 1px solid white;

    }
  }
  .scrolling-buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .navLinks {
    font-size: 1.7em;
    color:#327E8A;
    z-index: 2990;
    padding: 0 2.3%
  }
  .navLinks:hover {
    filter: brightness(1.5);
    background-color: rgba(10,10,10,.5);
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

