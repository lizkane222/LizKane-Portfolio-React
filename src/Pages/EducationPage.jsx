import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import BachelorsDoc from "../components/ResourcesProjects/Docs/BachelorsDoc.jsx";
import MastersDoc from "../components/ResourcesProjects/Docs/MastersDoc.jsx";
import GACertDoc from "../components/ResourcesProjects/Docs/GACertDoc.jsx";
import GrandCanyon from "../components/ResourcesProjects/UploadPhotosToWeb/docs/grandCanyon.png";
import TextCarousel from "../components/Carousel/TextCarousel";


// const EducationPageStyled = styled.div;

const EducationPage=() => {
    const itemsArray = ['“Curiosity is the fuel for discovery, inquiry, and learning.” Anonymous',
     '“Curiosity is the engine of achievement.” Ken Robinson',
     '“I have no special talents. I am only passionately curious.” Albert Einstein',
     '“Curiosity is one of the most valuable characteristics one can possess. When coupled with fearlessness and determination, that’s freedom.” Anonymous',
     '“Creativity grows out of two things: curiosity and imagination.” Benny Goodman',
     '“Curiosity is life.” Mark Parker',
     '“Curiosity is one of the great secrets of happiness.” Bryant H. McGill',
     '“The future belongs to the curious.” Anonymous',
     'The important thing is not to stop questioning. Curiosity has its own reason for existing.” Albert Einstein',
     '“If you can let go of passion and follow your curiosity, your curiosity just might lead you to your passion.” Elizabeth Gilbert',
     '“Curiosity is the hunger of the human mind.” Rose Wilder Lane',
     '“Curiosity about life in all aspects, I think, is still the secret of great creative people.” Leo Burnett',
 ]


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
                    <svg id="educationSVG" viewbox="0 0 500 500" width="850" height="475">
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
                            <text className="edFloatText" x="140" textAnchor="middle" y="475" dy="0">E</text>
                            <text className="edFloatText" x="225"  textAnchor="middle" y="475" dy="0">D</text>
                            <text className="edFloatText" x="300" textAnchor="middle" y="475" dy="0">U</text>
                            <text className="edFloatText" x="385" textAnchor="middle" y="475" dy="0">C</text>
                            <text className="edFloatText" x="470" textAnchor="middle" y="475" dy="0">A</text>
                            <text className="edFloatText" x="530" textAnchor="middle" y="475" dy="0">T</text>
                            <text className="edFloatText" x="580" textAnchor="middle" y="475" dy="0">I</text>
                            <text className="edFloatText" x="635" textAnchor="middle" y="475" dy="0">O</text>
                            <text className="edFloatText" x="720" textAnchor="middle" y="475" dy="0">N</text>
                            </mask>
                        </defs>
                        {/* <rect x="15" y="15" width="99%" height="100%" mask="url(#mask)" fill-opacity="1" fill="#fff"/> */}
                        <rect x="15" y="15" width="99%" height="100%" mask="url(#mask)" fill-opacity="1" fill="#292929"/>
                    </svg>
                </div>
                <div id="edDocContainer">
                    <h4>{<MastersDoc/>}</h4>
                    <h4>{<BachelorsDoc/>}</h4>
                    <h4>{<GACertDoc/>}</h4>
                </div>
                </div>
            </Wrapper>
                {<TextCarousel items={itemsArray} active={0}/>}
        </section>
    )
}

export default EducationPage;