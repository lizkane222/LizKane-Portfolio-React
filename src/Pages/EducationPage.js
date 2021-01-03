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
                <div className="redbox">
                    <img src={GrandCanyon} alt="" id="grandCanyonImg" className="thematicImg responsive-img"/>
                </div>
                {<MastersDoc/>}
                {<BachelorsDoc/>}
                {<GACertDoc/>}
            </Wrapper>
        </section>
    )
}

export default EducationPage;