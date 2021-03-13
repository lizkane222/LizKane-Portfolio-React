import React from "react";
import Wrapper from '../components/Header/Wrapper';

import BachelorsDoc from "../components/ResourcesProjects/Docs/BachelorsDoc.jsx";
import MastersDoc from "../components/ResourcesProjects/Docs/MastersDoc.jsx";
import GACertDoc from "../components/ResourcesProjects/Docs/GACertDoc.jsx";
// import GrandCanyon from "../components/ResourcesProjects/UploadPhotosToWeb/docs/grandCanyon.png";
import TextCarousel from "../components/Carousel/TextCarousel";

import {ImQuotesLeft, ImQuotesRight, ImQuill} from 'react-icons/im';

const EducationPage=() => {
    //  <p> <br/> </p>,
    const itemsArray = [
     <p className="">Curiosity is the fuel for discovery, inquiry, and learning. <br/><ImQuill className="textShadow"/> Anonymous</p>,
     <p className="">Chaos is merely order waiting to be deciphered. <br/><ImQuill className="textShadow"/> José Saramago</p>,
     
     <p className="">Curiosity is the engine of achievement. <br/><ImQuill className="textShadow"/> Ken Robinson</p>,
     <p className="">Life shrinks or expands in proportion to one's courage. <br/><ImQuill className="textShadow"/> Anais Nin</p>,
     
     <p className="">I have no special talents. I am only passionately curious.<br/><ImQuill className="textShadow"/> Albert Einstein</p>,
     <p className="">The optimist sees the donut, the pessimist sees the hole. <br/><ImQuill className="textShadow"/> Oscar Wilde</p>,
     
     <p className="">Curiosity is one of the most valuable characteristics one can possess. When coupled with fearlessness and determination, that’s freedom. <br/><ImQuill className="textShadow"/> Anonymous</p>,
     <p className="">Some people see the glass half full. Others see it half empty. I see a glass that's twice as big as it needs to be. <br/><ImQuill className="textShadow"/> George Carlin</p>,
     
     <p className="">Creativity grows out of two things: curiosity and imagination. <br/><ImQuill className="textShadow"/> Benny Goodman</p>,
     <p className="">Worry is the interest you pay on a debt you may not owe. <br/><ImQuill className="textShadow"/> Keith Caserta</p>,
     
     <p className="">Curiosity is life. <br/><ImQuill className="textShadow"/> Mark Parker</p>,
     <p className="">Every story I create, creates me. I write to create myself. <br/><ImQuill className="textShadow"/>Octavia E. Butler </p>,
     
     <p className="">Curiosity is one of the great secrets of happiness. <br/><ImQuill className="textShadow"/> Bryant H. McGill</p>,
     <p className="">The best way out is always through. <br/><ImQuill className="textShadow"/> Robert Frost</p>,
     
     <p className="">The future belongs to the curious. <br/><ImQuill className="textShadow"/> Anonymous</p>,
     <p className="">It's not that I'm so smart, it's just that I stay with problems longer. <br/><ImQuill className="textShadow"/> Albert Einstein </p>,
     
     <p className="">The important thing is not to stop questioning. Curiosity has its own reason for existing. <br/><ImQuill className="textShadow"/> Albert Einstein</p>,
     <p className="">The only true wisdom is in knowing you know nothing. <br/><ImQuill className="textShadow"/> Socrates</p>,
     
     <p className="">If you can let go of passion and follow your curiosity, your curiosity just might lead you to your passion. <br/><ImQuill className="textShadow"/> Elizabeth Gilbert</p>,
     <p className="">Let me tell you the secret that has led to my goal. My strength lies solely in my tenacity. <br/><ImQuill className="textShadow"/> Louis Pasteur</p>,
     
     <p className="">Curiosity is the hunger of the human mind. <br/><ImQuill className="textShadow"/> Rose Wilder Lane</p>,
     <p className="">Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. <br/><ImQuill className="textShadow"/> Roy T. Bennett</p>,
     
     <p className="">Curiosity about life in all aspects, I think, is still the secret of great creative people. <br/><ImQuill className="textShadow"/> Leo Burnett</p>,
     <p className="">Wealth consists not in having great possessions, but in having few wants. <br/><ImQuill className="textShadow"/> Epictetus</p>,

 ]

    const fillGradient = {
        "background-image": "repeating-linear-gradient(to bottom right, var(--grey-dark), var(--grey-very-dark))"
    }
    return(
        // <section id="educationPage">
        //     <Wrapper>
        //         <div id="educationLanding">

        //             <div id="viewBoxContainer" className="viewBoxContainer" style={{background: {GrandCanyon}}}>
        //                 {/* svg line is the filled space */}
        //                 <svg id="educationSVG" viewbox="0 0 1150 600" width="1150" height="600" >
        //                     <defs >
        //                         <mask id="mask" x="0" y="0" width="1149" height="599">
        //                             <rect x="0" y="0" width="1149" height="599" fill="#aaa"/>
        //                             <text className="edFloatText" x="200" text-anchor="middle" y="600" dy="0">E</text>
        //                             <text className="edFloatText" x="295"  text-anchor="middle" y="600" dy="0">D</text>
        //                             <text className="edFloatText" x="400" text-anchor="middle" y="600" dy="0">U</text>
        //                             <text className="edFloatText" x="500" text-anchor="middle" y="600" dy="0">C</text>
        //                             <text className="edFloatText" x="600" text-anchor="middle" y="600" dy="0">A</text>
        //                             <text className="edFloatText" x="680" text-anchor="middle" y="600" dy="0">T</text>
        //                             <text className="edFloatText" x="750" text-anchor="middle" y="600" dy="0">I</text>
        //                             <text className="edFloatText" x="830" text-anchor="middle" y="600" dy="0">O</text>
        //                             <text className="edFloatText" x="950" text-anchor="middle" y="600" dy="0">N</text>
        //                         </mask>
        //                     </defs>
        //                     <rect x="5" y="5" width="1149" height="599" mask="url(#mask)" fill-opacity="1" fill="#bbb"/>
        //                 </svg>
        //             </div>
        //                 <div id="edDocContainer">
        //                     <div className="edDocs">{<MastersDoc/>}</div>
        //                     <div className="edDocs">{<BachelorsDoc/>}</div>
        //                     <div className="edDocs">{<GACertDoc/>}</div>
        //                 </div>
        //         </div>
        <section id="educationPage">
            <Wrapper>
                <div id="educationLanding">
                    <div id="viewBoxContainer">
                        {/* svg line is the filled space */}
                        <svg id="educationSVG" viewbox="0 0 500 500" width="850" height="490">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%">
                                <rect x="0" y="35" width="100%" height="100%" fill="#fff"/>
                                <linearGradient id="two_hues" >
                                    <stop offset="0%" style={{"stop-color": "rgb(41,41,41)"}}/>
                                    <stop offset="50%" style={{"stop-color": "rgb(36,36,36)"}}/>
                                    <stop offset="100%" style={{"stop-color": "rgb(31,31,31)"}}/>
                                </linearGradient>
                                <text className="edFloatText" x="140" textAnchor="middle" y="490" dy="0">E</text>
                                <text className="edFloatText" x="225"  textAnchor="middle" y="490" dy="0">D</text>
                                <text className="edFloatText" x="300" textAnchor="middle" y="490" dy="0">U</text>
                                <text className="edFloatText" x="385" textAnchor="middle" y="490" dy="0">C</text>
                                <text className="edFloatText" x="470" textAnchor="middle" y="490" dy="0">A</text>
                                <text className="edFloatText" x="530" textAnchor="middle" y="490" dy="0">T</text>
                                <text className="edFloatText" x="580" textAnchor="middle" y="490" dy="0">I</text>
                                <text className="edFloatText" x="635" textAnchor="middle" y="490" dy="0">O</text>
                                <text className="edFloatText" x="720" textAnchor="middle" y="490" dy="0">N</text>
                                </mask>
                            </defs>
                            {/* <rect x="15" y="15" width="99%" height="100%" mask="url(#mask)" fill-opacity="1" fill="#fff"/> */}
                            <rect x="15" y="33" width="100%" height="100%" mask="url(#mask)" fill-opacity="1" style={{"fill": "url(#two_hues)", "stroke":"black"}}/>
                            {/* <rect x="15" y="35" width="99%" height="100%" mask="url(#mask)" fill-opacity="1" fill="#292929,#2d2d2d" id="eduViewBoxFill"/> */}
                            {/* <rect x="15" y="35" width="99%" height="100%" mask="url(#mask)" fill-opacity="1" fill={fillGradient} id="eduViewBoxFill"/> */}
                        </svg>
                    </div>
                    <div id="edDocContainer">
                        <h2 className="edDocName" id="mastersAnima">{<MastersDoc/>}</h2>
                        <h2 className="edDocName" id="bachelorsAnima">{<BachelorsDoc/>}</h2>
                        <h2 className="edDocName" id="gaCertAnima">{<GACertDoc/>}</h2>
                    </div>
                </div>
            </Wrapper>
                {<TextCarousel items={itemsArray} active={0}/>}
        </section>
    )
}

export default EducationPage;