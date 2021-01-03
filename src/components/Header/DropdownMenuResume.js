import React, {useState, useRef, useEffect} from "react";
import { CSSTransition } from 'react-transition-group';
import { NavLink, Link } from "react-router-dom";

import "./dropdown.css";
// import DropdownItem from "./DropdownItem";

import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai"

import ResumeDoc from "../Room/Docs/ResumeDoc.jsx";
import ResumePage from "../../Pages/ResumePage"

import BachelorsDoc from "../Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../Room/Docs/MastersDoc.jsx";
import GACertDoc from "../Room/Docs/GACertDoc.jsx";
// import { Dropdown } from "materialize-css";




import {GiBookshelf as Book} from "react-icons/gi";
import {GiLargePaintBrush as Brush} from "react-icons/gi";
import {GiScrollUnfurled as Scrollicon} from "react-icons/gi";
import {FaCode as Code} from "react-icons/fa";
import {GrCaretNext as Left} from "react-icons/gr";
import {GrCaretPrevious as Right} from "react-icons/gr";
import {SiHtml5 as HTML} from "react-icons/si";
import {SiJavascript as JS} from "react-icons/si";
import {SiCss3 as CSS} from "react-icons/si";
import {SiPython as Python} from "react-icons/si";
import {SiReact as Reacticon} from "react-icons/si";
import {SiDjango as Django} from "react-icons/si";
import {SiSass as Sass} from "react-icons/si";


const Scroll = (props) => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView();

  return(
    <>
      <div ref={myRef} onClick={executeScroll}>
        {`<`,props.element,`/>`}
      </div>
    </>
  )
}



const DropdownMenuResume = () => {
  const [activeMenu, setActiveMenu] = useState('resume');
  // const [activeMenuResume, setActiveMenuResume] = useState('Liz');
  // const [activeMenuProjects, setActiveMenuProjects] = useState('Liz');
  // const [activeMenuEducation, setActiveMenuEducation] = useState('Liz');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (

        <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button icon-left">{props.leftIcon}</span>
            {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>

    );
  }

  return (
    <>
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'resume'}
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
        unmountOnExit>
        <div className="menu">
          <DropdownItem>
          <Scroll element={ResumePage}/>
          {/* <NavLink className="navlink" to="/resume" ><p className="link">Resume</p></NavLink> */}
          {/* <NavLink className="navlink" to="/resume" ><p className="link">Resume</p></NavLink> */}
            {/* <a href='#'>{<ResumeDoc/>}</a> */}
            </DropdownItem>
          {/* {<ResumeDoc/>} */}
          
          {/* <DropdownItem
            leftIcon={Left}
            rightIcon={<Right />}
            goToMenu="resumeOptions">
            Resume
          </DropdownItem> */}
          {/* <DropdownItem
            leftIcon={Left}
            rightIcon={<Right />}
            goToMenu="bio">
            Bio
          </DropdownItem> */}
          {/* <DropdownItem
            leftIcon={Left}
            rightIcon={<Right />}
            goToMenu="brand">
            Brand
          </DropdownItem> */}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'resumeOptions'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="resume" leftIcon={<Left />}>
            {/* <h2><ResumeDoc/</h2> */}
          </DropdownItem>
          <DropdownItem leftIcon={ <Scrollicon/>}>
          {<ResumeDoc/>}
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'HTMLProjects'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="languages" leftIcon={<Scrollicon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
      
    </div>


    
    {/* <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Liz Kane</DropdownItem>
          <DropdownItem
            leftIcon={<Left />}
            rightIcon={<Right />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Left/>}
            rightIcon={<Right />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Code />}>
            <h2>Languages</h2><br/>
          </DropdownItem>
          <DropdownItem leftIcon={<HTML />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CSS />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JS />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Python />}>Python</DropdownItem>
          <DropdownItem leftIcon={<Reacticon />}>React</DropdownItem>
          <DropdownItem leftIcon={<Django />}>Django</DropdownItem>
          <DropdownItem leftIcon={<Sass />}>Sass!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Scroll />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>*/}

    {/* <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}> 
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Liz Kane</DropdownItem>
          <DropdownItem
            leftIcon={<Left />}
            rightIcon={<Right />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Left/>}
            rightIcon={<Right />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Code />}>
            <h2>Languages</h2><br/>
          </DropdownItem>
          <DropdownItem leftIcon={<HTML />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CSS />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JS />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Python />}>Python</DropdownItem>
          <DropdownItem leftIcon={<Reacticon />}>React</DropdownItem>
          <DropdownItem leftIcon={<Django />}>Django</DropdownItem>
          <DropdownItem leftIcon={<Sass />}>Sass!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Scroll />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div> */}

    {/* <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Liz Kane</DropdownItem>
          <DropdownItem
            leftIcon={<Left />}
            rightIcon={<Right />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Left/>}
            rightIcon={<Right />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Code />}>
            <h2>Languages</h2><br/>
          </DropdownItem>
          <DropdownItem leftIcon={<HTML />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CSS />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JS />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Python />}>Python</DropdownItem>
          <DropdownItem leftIcon={<Reacticon />}>React</DropdownItem>
          <DropdownItem leftIcon={<Django />}>Django</DropdownItem>
          <DropdownItem leftIcon={<Sass />}>Sass!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Scroll />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div> */}

    {/* <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Liz Kane</DropdownItem>
          <DropdownItem
            leftIcon={<Left />}
            rightIcon={<Right />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon={<Left/>}
            rightIcon={<Right />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Code />}>
            <h2>Languages</h2><br/>
          </DropdownItem>
          <DropdownItem leftIcon={<HTML />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<CSS />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<JS />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<Python />}>Python</DropdownItem>
          <DropdownItem leftIcon={<Reacticon />}>React</DropdownItem>
          <DropdownItem leftIcon={<Django />}>Django</DropdownItem>
          <DropdownItem leftIcon={<Sass />}>Sass!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<Scroll />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div> */}
    
    </>
  );
} 

  // function DropdownItem(props){
  //   return(

  //       <a className="menu-item">
  //           <span className="icon-button">{props.leftIcon}</span>
  //               {props.children}
  //           <span className="icon-right">{props.rightIcon}</span>
  //       </a>

  //   )
  // }

//   return (
//     <div>
//         <DropdownItem className="dropdown">
//           My Profile
//         <DropdownItem 
//         leftIcon={<AiFillCaretLeft/>}
//         rightIcon={<AiFillCaretRight/>}
//         >
//         </DropdownItem>
//         </DropdownItem>
//     </div>
//   )
// }

export default DropdownMenuResume;

// const DropdownItem = (props) => {
//   return(
//     <div className="dropdown">
//         <a href="#" className="menu-item">
//             <span className="icon-button">{props.leftIcon}</span>
//             {props.children}

//             <span className="icon-right">{props.rightIcon}</span>

//         </a>
//     </div>
//   )
// }



// THIS WAS BEFORE NESTING THE DROPDOWNITEM INSIDE DROPDOWNMENU

// const DropdownMenu = (props) => {
//   return(
//     <div className="dropdown">
//       <DropdownItem>My Profile</DropdownItem>
//       <DropdownItem
//       leftIcon={AiFillCaretLeft}
//       rightIcon={AiFillCaretRight}
//       >
//         <a style={{color:"white"}}>LIZKANE</a>
//       </DropdownItem>
//     </div>
//   )
// }

// export default DropdownMenu;