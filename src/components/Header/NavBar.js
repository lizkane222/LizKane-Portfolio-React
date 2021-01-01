import React from 'react';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css'
// import {Badge, makeStyles, ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse} from "@material-ui/core"
// import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Resource from '../Room/Resource';
import NavItem from "./NavItem"
// import "../Header/header.scss"
import ResourceList from "../Room/ResourceList";
import ResumeDoc from "../Room/Docs/ResumeDoc.jsx";
import BachelorsDoc from "../Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../Room/Docs/MastersDoc.jsx";
import GACertDoc from "../Room/Docs/GACertDoc.jsx";
// import { Dropdown } from 'materialize-css';

import Dropdown from "./Dropdown"


const NavBar = (props) => {
        return (
        <nav className="navbar">
            <ul className="navbar-nav">{ props.children }</ul>
        </nav>
        
    );
}

export default NavBar;


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