import React, {useState} from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';


import KaneLogo from "../components/KaneLogo/KaneLogo";

import Seek7 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-7.png"
import Seek3 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-3.png"
import Seek5 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-5.png"
import Seek2 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-2.png"
import Seek1 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-1.png"
import Seek4 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-4.png"
import Seek6 from "../components/Room/UploadPhotosToWeb/seek/Seek-1-6.png"




// const LandingPageStyled = styled.div;

const LandingPage=() => {
    // window.onload = function(){ 

        // Init
        // const container = document.getElementById('seekLogoContainer');
        // const inner = document.getElementById('seekPhoto13')

        // Mouse
        // let mouse = {
        //     _x: 0,
        //     _y: 0,
        //     x: 0,
        //     y: 0,
        //     updatePosition: async function(event) {
        //         let e = event || window.event;
        //         this.x = (e.clientX - this._x);
        //         this.y = ((e.clientY - this._y) * -1);
        //     },
        //     setOrigin: async function(e) {
        //         let left = e.offsetLeft;
        //         let width = Math.floor(e.offsetWidth/2);
        //         this._x = left + width;
        //         this._y = (e.offsetTop + (Math.floor(e.offsetHeight/2)));
        //     },
        //     show: async function() { return `(`+ this.x + `,` + this.y `)`;
        //     }
        // }
        // Track the mouse position to the center of the container.
            // mouse.setOrigin(container);

        // let counter = 0;
        // let updateRate = 10;
        // let isTimeToUpdate = async function() {
        //     return counter++ % updateRate === 0;
        // };


        // let onMouseEnterHandler = async function(event) {
        //     await update(event);
        // }

        // let onMouseLeaveHandler = async function() {
        //     inner.style = "";
        // }
        // let onMouseMoveHandler = async function(event) {
        //     if(isTimeToUpdate()) {
        //         update(event);
        //     }
        // }


        // let update = async function(event) {
        //     mouse.updatePosition(event);

            // updateTransformStyle(
                // mouseY = mouse.y,
                // inOffHeight =  inner.offsetHeight,
                // inOffHeight2 = inOffHeight/2
                // (mouseY /inOffHeight2).toFixed(2),
        //         (mouse.y /inner.offsetHeight/2).toFixed(2),
        //         (mouse.x /inner.offsetWidth/2).toFixed(2)
        //     );
        // };

    //     let updateTransformStyle = async function(x,y) {
    //         let style = (`rotateX(` + x + `deg) rotateY` + y + `deg)`);
    //         inner.style.transform = style;
    //         inner.style.webkitTransform = style;
    //         inner.style.mozTransform = style;
    //         inner.style.msTransform = style;
    //         inner.style.oTransform = style;
    //     };
        
    //     container.onmouseenter = onMouseEnterHandler;
    //     container.onmouseleave = onMouseLeaveHandler;
    //     container.onmousemove = onMouseMoveHandler;
    // }

    const [text, setText] = useState("strokes")

    const handleHover = (e) => {
        e.target.className = "solid"
    }

    



    return(
        <section id="landingPage">
            <Wrapper>
                <div className="citeArrival">
                    <div className="lizKaneIntro">
                        <p id="Liz" className="myName" onMouseOver={() => setText(!handleHover)}>
                            Liz Kane
                        </p>
                        <p id="p1" onMouseOver={handleHover}>Moralistically Driven that Everything Should Have a Purpose.</p>
                        <p id="p2" onMouseOver={handleHover}>Realistically Optimistic</p>
                        <p id="p3" onMouseOver={handleHover}>Direct & Patient in Leading Conflict Resolution.</p>
                        <p id="p4" onMouseOver={handleHover}>Gifted in Creating Communities.</p>
                    </div>  

                    <div id="seekLogoContainer">
                        {/* <img src={Seek3} alt="seek logo layer" id="seekPhoto13" className="seekLogo"></img> */}
                        {/* <img src={Seek5} alt="seek logo layer" id="seekPhoto15" className="seekLogo"></img> */}
                        <img src={Seek2} alt="seek logo layer" id="seekPhoto17" className="seekLogo"></img>
                        <img src={Seek1} alt="seek logo layer" id="seekPhoto19" className="seekLogo"></img>
                        {/* <img src={Seek4} alt="seek logo layer" id="seekPhoto21" className="seekLogo"></img> */}
                        {/* <img src={Seek6} alt="seek logo layer" id="seekPhoto23" className="seekLogo"></img> */}
                    </div>

                </div>
                {/* <KaneLogo/> */}
            </Wrapper>
        </section>
    )
}

export default LandingPage;