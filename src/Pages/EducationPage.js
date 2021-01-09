import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import BachelorsDoc from "../components/Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../components/Room/Docs/MastersDoc.jsx";
import GACertDoc from "../components/Room/Docs/GACertDoc.jsx";
import GrandCanyon from "../components/Room/UploadPhotosToWeb/docs/grandCanyon.png";
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
        <section id="educationPage">
            <Wrapper>
                <div className="viewBoxContainer" style={{background: {GrandCanyon}}}>
                    {/* svg line is the filled space */}
                    <svg id="educationSVG" viewbox="0 0 500 500" width="1135" height="600">
                        <defs>
                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                            <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
                            <text className="edFloatText" x="320" text-anchor="middle" y="600" dy="0">E</text>
                            <text className="edFloatText" x="400"  text-anchor="middle" y="600" dy="0">D</text>
                            <text className="edFloatText" x="480" text-anchor="middle" y="600" dy="0">U</text>
                            <text className="edFloatText" x="550" text-anchor="middle" y="600" dy="0">C</text>
                            <text className="edFloatText" x="632" text-anchor="middle" y="600" dy="0">A</text>
                            <text className="edFloatText" x="675" text-anchor="middle" y="600" dy="0">T</text>
                            <text className="edFloatText" x="720" text-anchor="middle" y="600" dy="0">I</text>
                            <text className="edFloatText" x="770" text-anchor="middle" y="600" dy="0">O</text>
                            <text className="edFloatText" x="840" text-anchor="middle" y="600" dy="0">N</text>
                            </mask>
                        </defs>
                        {/* Frame */}
                        <rect x="15" y="15" width="99%" height="100%" mask="url(#mask)" fill-opacity="1" fill="#fff"/>
                    </svg>
                    <h4>{<MastersDoc/>}</h4>
                    <h4>{<BachelorsDoc/>}</h4>
                    <h4>{<GACertDoc/>}</h4>
                </div>
            </Wrapper>
                {<TextCarousel items={itemsArray} active={0}/>}
        </section>
    )
}

export default EducationPage;