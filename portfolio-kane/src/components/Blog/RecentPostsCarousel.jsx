import React, { useState }from "react";
// import Carousel from 'react-bootstrap/Carousel';
import RecentPostsList from "./RecentPostsList";
import FloatRecPostsBox from "./FloatRecPostsBox";
// import RecentPostText from "./RecentPostText";

import {ImEyeBlocked, ImEye, ImStop, ImPlay2} from "react-icons/im";
import {GiTornado, GiSnail} from "react-icons/gi";
import {CgShapeSquare, CgShapeHexagon} from "react-icons/cg";
import {BsArrowsExpand} from "react-icons/bs";
// import { Children } from "react";

const RecentPostsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [iconVisible, setIconVisible] = useState(false);
  const [iconShape, setIconShape] = useState(false);
  const [textContainerActive, setTextContainerActive] = useState(false);
  const [animationPaused, setAnimationPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [iconText, setIconText] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const hasClassName = (inElement, inClassName) => {
    let regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
    return regExp.test(inElement.className);
  }

  const addClassName = (inElement, inClassName) => {
    if (!hasClassName(inElement, inClassName))
        inElement.className = [inElement.className, inClassName].join(' ');
  }

  const removeClassName = (inElement, inClassName) => {
    if (hasClassName(inElement, inClassName)) {
        let regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
        let curClasses = inElement.className;
        inElement.className = curClasses.replace(regExp, ' ');
    }
  }

  const toggleClassName = (inElement, inClassName) => {
      if (hasClassName(inElement, inClassName))
          removeClassName(inElement, inClassName);
      else
          addClassName(inElement, inClassName);
  }

  const toggleShape= ()=> {
    let shape = document.getElementById('shape');
    if (hasClassName(shape, 'ring')) {
      removeClassName(shape, 'ring');
      addClassName(shape, 'cube');
      setIconShape(!iconShape);
    } else {
      removeClassName(shape, 'cube');
      addClassName(shape, 'ring');
      setIconShape(!iconShape);
    }
    
    // Move the ring back in Z so it's not too close
    let stage = document.getElementById('stage');
    if (hasClassName(shape, 'ring'))
      stage.style.webkitTransform = 'translateZ(-200px)';
    else
      stage.style.webkitTransform = '';
  }
  

  const toggleBackfaces = ()=>{
    let backfacesVisible = document.getElementById('backfaces').checked;
    let shape = document.getElementById('shape');
    if (backfacesVisible){
      addClassName(shape, 'backfaces')
      setIconVisible(!iconVisible);
    }
    else{
        removeClassName(shape, 'backfaces')
        setIconVisible(iconVisible);
    }
  }

  const toggleSpinSpeedQuick = () =>{
    let shape = document.getElementById('shape');
    let tornado = document.getElementById('tornado');
    let snail = document.getElementById('snail');
    if (hasClassName(shape, 'ring') && !hasClassName(shape, 'verySlow')) {
      if (!hasClassName(shape, 'quickSpin')) {
          addClassName(shape, 'quickSpin');
          addClassName(tornado, 'blueText');
          addClassName(snail, 'greyedOutText');
      } else {
          removeClassName(shape, 'quickSpin');
          removeClassName(tornado, 'blueText');
          removeClassName(snail, 'greyedOutText');
      }
    } 
    else {
      if (!hasClassName(shape, 'quickSpin') && !hasClassName(shape, 'verySlow')) {
        addClassName(shape, 'quickSpin');
        addClassName(tornado, 'blueText');
        addClassName(snail, 'greyedOutText');
      } else {
          removeClassName(shape, 'quickSpin');
          removeClassName(tornado, 'blueText');
          removeClassName(snail, 'greyedOutText');
      }
    }
  }

  const toggleSpinSpeedSlow = () => {
    let shape = document.getElementById('shape');
    let snail = document.getElementById('snail');
    let tornado = document.getElementById('tornado');
    if (hasClassName(shape, 'ring')) {
      if (!hasClassName(shape, 'verySlow') && !hasClassName(shape, 'quickSpin')) {
          addClassName(shape, 'verySlow');
          addClassName(snail, 'blueText');
          addClassName(tornado, 'greyedOutText');
      } else {
          removeClassName(shape, 'verySlow');
          removeClassName(snail, 'blueText');
          removeClassName(tornado, 'greyedOutText');
      }
    } else {
      if (!hasClassName(shape, 'verySlow') && !hasClassName(shape, 'quickSpin')) {
        addClassName(shape, 'verySlow');
        addClassName(snail, 'blueText');
        addClassName(tornado, 'greyedOutText');
      } else if(hasClassName(shape, 'verySlow')) {
          removeClassName(shape, 'verySlow');
          removeClassName(snail, 'blueText');
          removeClassName(tornado, 'greyedOutText');
      }
    }
  }

  const pauseAnimation =  () => {
    setAnimationPaused(!animationPaused)
    let snail = document.getElementById('snail');
    let tornado = document.getElementById('tornado');
    const shape = document.getElementById('shape');
    if (!hasClassName(shape, 'pause')) {
      addClassName(shape, 'pause');
      if (hasClassName(shape, 'verySlow')) {
          removeClassName(shape, 'verySlow');
          addClassName(snail, 'greyedOutText');
      } else if (hasClassName(shape, 'quickSpin')) {
          removeClassName(shape, 'quickSpin');
          addClassName(tornado, 'greyedOutText');
      }}
    else {
          removeClassName(shape, 'pause');
          removeClassName(snail, 'greyedOutText');
          removeClassName(tornado, 'greyedOutText');
    }
  }

  
  const activateFullScreen = () => {
              setFullscreen(!fullscreen)
          }

  

  const showIconText = (e) => {
    if(e.target.id === "ringIcon"){
      setIconText(iconText => iconText="View Posts As Cube")
    }
    else if(e.target.id === "cubeIcon" ){
      setIconText(iconText => iconText="View Posts As Ring")
    }
    else if(e.target.id === "invisibleIcon" ){
      setIconText(iconText => iconText="Make Background Visible")
    }
    else if(e.target.id === "visibleIcon" ){
      setIconText(iconText => iconText="Make Background Invisible")
    }
    else if(e.target.id === "tornado" ){
      setIconText(iconText => iconText="Speed Up Spinning")
    }
    else if(e.target.id === "snail" ){
      setIconText(iconText => iconText="Slow Down Spinning")
    }
    else if(e.target.id === "stop" ){
      setIconText(iconText => iconText="Stop Spinning")
    }
    else if(e.target.id === "go" ){
      setIconText(iconText => iconText="Start Spinning")
    }
    else if(e.target.id === "recPostsFullScreen" ){
      setIconText(iconText => iconText="View Posts In Fullscreen")
    }
    else if(e.target.className === "controls" ){
      setIconText(iconText => iconText="")
    }
    // if(e.target.id === ""){
    //   iconText = <p></p>
    //   setIconText(iconText)
    // }
  }
 

  return (
    <>
    {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
        {/* <RecentPostsList/> */}
    {/* </Carousel> */}
      <div id="recentPostsContainer" >
        <section className="controls" onMouseOver={showIconText}>
        {iconShape===true ?
          <i className="controlsIcon" id="ringIcon" onClick={toggleShape} onMouseOver={showIconText} ><CgShapeHexagon/></i>
          :
          <i className="controlsIcon" id="cubeIcon" onClick={toggleShape} onMouseOver={showIconText}><CgShapeSquare/></i>

        }
          <span onClick={toggleBackfaces} id="backfacesContainer">
              <input type="checkbox" id="backfaces"  checked="false" />
              {iconVisible===true?
                <>
                  <label for="backfaces" className="invisibleIcon"  onMouseOver={showIconText}>
                    <i className="controlsIcon" id="invisibleIcon"><ImEyeBlocked/></i>
                  </label>
                </>
                : 
                <>
                  <label for="backfaces" className="visibleIcon"  onMouseOver={showIconText}>
                    <i className="controlsIcon" id="visibleIcon"><ImEye/></i>
                  </label>
                </>
              }
          </span>
          <i className="controlsIcon" id="tornado" onClick={toggleSpinSpeedQuick} onMouseOver={showIconText}><GiTornado/></i>
          <i className="controlsIcon" id="snail" onClick={toggleSpinSpeedSlow} onMouseOver={showIconText}><GiSnail/></i>
        {!animationPaused ? 
          <i className="controlsIcon" id="stop" onClick={pauseAnimation} onMouseOver={showIconText}><ImStop/></i>
        :
          <i className="controlsIcon" id="go" onClick={pauseAnimation} onMouseOver={showIconText}><ImPlay2/></i>
        }
        <i className="controlsIcon" id="recPostsFullScreen" onClick={activateFullScreen} onMouseOver={showIconText}><BsArrowsExpand/></i>
        {fullscreen?<div id="recPostsFullScreen" onClick={activateFullScreen} ><FloatRecPostsBox /></div>:[]}
          
          <div id="iconTextContainer">
            {iconText ==="" ?
            <br/>
            :
            <p>{iconText}</p>
            }
          </div>
        </section>

        <div id="container" >
          <div id="stage" >
              <div id="shape" className="backfaces cube">
                <RecentPostsList textContainerActive={textContainerActive} setTextContainerActive={setTextContainerActive}/>
              </div>
          </div>
        </div>

        {/* <div id="recPostsFullScreen" onClick={activateFullScreen}>
          <FloatRecPostsBox />
        </div> */}
    </div>

    </>
  );
}

export default RecentPostsCarousel;