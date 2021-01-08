import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import BachelorsDoc from "../components/Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../components/Room/Docs/MastersDoc.jsx";
import GACertDoc from "../components/Room/Docs/GACertDoc.jsx";
import GrandCanyon from "../components/Room/UploadPhotosToWeb/docs/grandCanyon.png";

// const EducationPageStyled = styled.div;

const EducationPage=() => {
    return(
        <section id="educationPage">
            <Wrapper>
                <div className="viewBoxContainer">
                    {/* svg line is the filled space */}
                    <svg id="educationSVG" viewbox="0 0 50 50" width="50" height="50">
                        <defs>
                            <mask id="mask" x="0" y="0" width="97%" height="91%">
                            <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
                            <text className="edFloatText" x="220" text-anchor="middle" y="550" dy="0">E</text>
                            <text className="edFloatText" x="300"  text-anchor="middle" y="550" dy="0">D</text>
                            <text className="edFloatText" x="380" text-anchor="middle" y="550" dy="0">U</text>
                            <text className="edFloatText" x="450" text-anchor="middle" y="550" dy="0">C</text>
                            <text className="edFloatText" x="532" text-anchor="middle" y="550" dy="0">A</text>
                            <text className="edFloatText" x="585" text-anchor="middle" y="550" dy="0">T</text>
                            <text className="edFloatText" x="630" text-anchor="middle" y="550" dy="0">I</text>
                            <text className="edFloatText" x="680" text-anchor="middle" y="550" dy="0">O</text>
                            <text className="edFloatText" x="750" text-anchor="middle" y="550" dy="0">N</text>
                            </mask>
                        </defs>
                        {/* Frame */}
                        <rect x="25" y="25" width="98%" height="100%" mask="url(#mask)" fill-opacity="1" fill="#fff"/>
                    </svg>
                    <h4>{<MastersDoc/>}</h4>
                    <h4>{<BachelorsDoc/>}</h4>
                    <h4>{<GACertDoc/>}</h4>
                </div>
            </Wrapper>
        </section>
    )
}

export default EducationPage;