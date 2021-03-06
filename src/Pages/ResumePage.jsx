import React from "react";
import Wrapper from '../components/Header/Wrapper';
// import styled from 'styled-components';


import ResumeDoc from "../components/ResourcesProjects/Docs/ResumeDoc.jsx";
import Blocks from "../components/ResourcesProjects/UploadPhotosToWeb/docs/blocks.png";


// const ResumePageStyled = styled.div;

const ResumePage=() => {
    return(
        <section id="resumePage">
            <Wrapper>
                <div className="redbox promo">
                    <div className="image-wrapper">
                        <img src={Blocks} alt="stacked geometric shapes" id="blocksImg" className="thematicImg responsive-img"/>
                    </div>
                    <h2 className="docTitle" data-cta="awesome">Resume / Curriculum Vitae</h2>
                    <h4 className="activeDocTitle">{<ResumeDoc/>}</h4>
                </div>
            </Wrapper>
        </section>
    )
}

export default ResumePage;