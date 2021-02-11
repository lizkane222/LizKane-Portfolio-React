import React, { useState }from "react";
import Carousel from 'react-bootstrap/Carousel'
import RecentPostsList from "./RecentPostsList";

import {ImEyeBlocked, ImEye} from "react-icons/im";
import {GiTornado, GiSnail} from "react-icons/gi";
import {CgShapeSquare, CgShapeHexagon} from "react-icons/cg";
import { Children } from "react";

const RecentPostsCarousel = () => {
  const [index, setIndex] = useState(0);
  const [iconVisible, setIconVisible] = useState(false);
  const [iconShape, setIconShape] = useState(false);

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





  

 

  return (
    <>
    {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
        {/* <RecentPostsList/> */}
    {/* </Carousel> */}
      <div id="recentPostsContainer">
        <section className="controls">
        {iconShape==true ?
          <i className="controlsIcon" id="ringIcon" onClick={toggleShape}><CgShapeHexagon/></i>
          :
          <i className="controlsIcon" id="cubeIcon" onClick={toggleShape}><CgShapeSquare/></i>

        }
          <span onClick={toggleBackfaces} id="backfacesContainer">
              <input type="checkbox" id="backfaces"  checked="false"/>
              {iconVisible==true?
                <>
                  <label for="backfaces" className="invisibleIcon">
                    <i className="controlsIcon"><ImEyeBlocked/></i>
                  </label>
                </>
                : 
                <>
                  <label for="backfaces" className="visibleIcon">
                    <i className="controlsIcon"><ImEye/></i>
                  </label>
                </>
              }
          </span>
          <i className="controlsIcon" id="tornado" onClick={toggleSpinSpeedQuick}><GiTornado/></i>
          <i className="controlsIcon" id="snail" onClick={toggleSpinSpeedSlow}><GiSnail/></i>
          
        </section>

        <div id="container" >
          <div id="stage" >
              <div id="shape" className="backfaces cube">
                <RecentPostsList/>
              </div>
            </div>
        </div>
      </div>


    </>
  );
}

export default RecentPostsCarousel;