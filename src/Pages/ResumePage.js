import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';


import ResumeDoc from "../components/Room/Docs/ResumeDoc.jsx";
import Blocks from "../components/Room/UploadPhotosToWeb/docs/blocks.png";


// const ResumePageStyled = styled.div;

const ResumePage=() => {
    return(
        <section id="resumePage">
            <Wrapper>
                <div className="redbox">
                    <img src={Blocks} alt="" id="blocksImg" className="thematicImg responsive-img"/>
                </div>
                {<ResumeDoc/>}
            </Wrapper>
        </section>
    )
}

export default ResumePage;