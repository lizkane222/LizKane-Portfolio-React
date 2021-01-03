import React from 'react';
import {Link} from 'react-scroll';
// import OnScreenScrolling from './OnScreenScrolling';
import OnScreenScrolling from './OnScreenScrolling';
import Wrapper from './Wrapper';
import styled from 'styled-components';

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


// {ResumeDoc}
//             {MastersDoc}
//             {BachelorsDoc}
//             {GACertDoc}


const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    background: black;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    z-index: 299;
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
  }
  .navLinks {
    font-size: 1.7em;
    margin: 2.3%;
    color:#8B0124;
  }
  
  .navLinks:hover {
    filter: brightness(1.5);
    text-shadow: -1px 1px 3px #242526;
  }
`;


const Header = () => {
        return (
        <NavbarStyled>
            {/* <header className="header"> */}
                <nav className="navbar">

                        {/* <h5 id="nameButton">L I Z   K A N E </h5> */}
                        
{/* <ResumePage/>
<EducationPage/>
<WorkPage/>
<ProjectsPage/>
<InterestsPage/>
<ContactPage/> */}

                        {/* <div className="dropbtn" onClick={<ResumeDoc/>}><h5 onClick={<ResumeDoc/>} className="Resume"><ResumeDoc/></h5></div> */}

                    <Link activeClass="active" className="navLinks" to="landingPage" spy={true} smooth={true} duration={1000}>
                        LK
                    </Link>

                    <Link activeClass="active" className="navLinks" to="resumePage" spy={true} smooth={true} duration={1000}>
                        Resume
                    </Link>

                    <Link activeClass="active" className="navLinks" to="projectsPage" spy={true} smooth={true} duration={1000}>
                        Projects
                    </Link>

                    <Link activeClass="active" className="navLinks" to="educationPage" spy={true} smooth={true} duration={1000}>
                        Education
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
        


                        {/* <div className="dropbtn"><h5 className="Projects">Projects</h5></div> */}
                            {/* <h6>Ekseed</h6>
                            <h6>Wayfarer</h6>
                            <h6>Deviant</h6>
                            <h6>MBCrunch</h6>
                            <h6>Minifi</h6>
                            <h6>Femanon</h6>
                    </div> */}

                        {/* <div className="dropbtn"><h5 className="Education">Education</h5></div> */}
                            {/* <h6>Software Engineering</h6>
                            <h6>Masters</h6>
                            <h6>Bachelors</h6>
                    </div> */}

                    {/* <div className="dropdown"> */}
                        {/* <div className="dropbtn"><h5 className="WorkExperience">WorkExperience</h5></div> */}
                            {/* <h6>English Professor - Univeristy - France</h6>
                            <h6>Special Education Teacher - Elementary - New Mexico</h6>
                            <h6>ESL Teacher - PreK-9thGrade - Online</h6>
                    </div> */}

                    {/* <div className="dropdown"> */}
                        {/* <div className="dropbtn"><h5 className="Interests">Interests</h5></div> */}
                    {/* </div> */}

                    {/* <div className="dropdown"> */}
                        {/* <div className="dropbtn"><h5 className="About">MORE+</h5></div> */}
                    {/* </div> */}

                    
                    
                    
                    
                    
                </nav>
                {/* <div className="scrolling-buttons">
                    <Wrapper>
                        <OnScreenScrolling />
                    </Wrapper>
                </div> */}
            {/* </header> */}
        </NavbarStyled>
    );
}

export default Header;


{/* <header>
    <nav className="navbar">
        <div className="dropdown">
            <button className="dropbtn"><h4 className="nameButton">LIZ KANE</h4>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn" onClick={<ResumeDoc/>}><h5 onClick={<ResumeDoc/>} className="Resume"><ResumeDoc/></h5>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
                <h6><ResumeDoc/></h6>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn"><h5 className="Projects">Projects</h5>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
                <h6>Ekseed</h6>
                <h6>Wayfarer</h6>
                <h6>Deviant</h6>
                <h6>MBCrunch</h6>
                <h6>Minifi</h6>
                <h6>Femanon</h6>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn"><h5 className="Education">Education</h5>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
                <h6>Software Engineering</h6>
                <h6>Masters</h6>
                <h6>Bachelors</h6>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn"><h5 className="WorkExperience">WorkExperience</h5>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
                <h6>English Professor - Univeristy - France</h6>
                <h6>Special Education Teacher - Elementary - New Mexico</h6>
                <h6>ESL Teacher - PreK-9thGrade - Online</h6>

            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn"><h5 className="Interests">Interests</h5>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
                <h6></h6>
                <h6></h6>
                <h6></h6>
            </div>
        </div>

        <div className="dropdown">
            <button className="dropbtn"><h5 className="About">MORE+</h5>
                <i className=""></i>
            </button>
            <div className="dropdown-content">
                <h6></h6>
                <h6></h6>
                <h6></h6>
            </div>
        </div>
    </nav>
</header> 
);
}
export default Header;
*/}






                {/*<header>

                <div className="nameButton">LIZ KANE</div>

                <nav>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                        </ListSubheader>
                    }
                    className={classes.root}
                    >
                    <ListItem button>
                    <ListItemText primary={<ResumeDoc/>} className="redText"/>
                    </ListItem>
                     <ListItem button className="redText" onClick={(e)=> handleClick(e)}>
                        <ListItemText primary="Projects" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Ekseed" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Wayfarer" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Femanon" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Minifi" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="MBCrunch" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Deviant" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Nosh" />
                                </ListItem>
                            </List>
                            
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="MORE++" />
                                </ListItem>
                            </List>
                        </Collapse>

                    <ListItem button  onClick={handleClick}>
                        <ListItemText primary="Education" className="redText"/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText primary="Ekseed" />
                                </ListItem>
                            </List>
                        </Collapse>

                    <ListItem button  onClick={handleClick}>
                        <ListItemText primary="Work Experience" className="redText"/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Ekseed" />
                        </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button  onClick={handleClick}>
                        <ListItemText primary="Interests" className="redText"/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Ekseed" />
                        </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button  onClick={handleClick}>
                        <ListItemText primary="MORE++" className="redText"/>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Ekseed" />
                        </ListItem>
                        </List>
                    </Collapse> */}

                    {/* <ListItem button onClick={handleClick}>

                        <ListItemText primary="Projects" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>

                            <ListItemText primary="Ekseed" />
                        </ListItem>
                        </List>
                    </Collapse> */}
                    {/* </List>     */}
                    {/* <h3 onClick={<ResumeDoc/>} className="Resume"><ResumeDoc/></h3> */}
                    {/* <h3 onClick={openResource} className="Projects">Projects</h3>
                    <h3 onClick={openResource} className="Education">Education</h3>
                    <h3 onClick={openResource} className="WorkExperience">WorkExperience</h3>
                    <h3 onClick={openResource} className="Interests">Interests</h3>
                    <h3 onClick={openResource} className="About">About</h3> */}
                {/* </nav> */}
            {/* </div> */}
        {/* </header> */}