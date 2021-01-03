import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';


import Desert from "../components/Room/UploadPhotosToWeb/docs/desert.png";


// const WorkPageStyled = styled.div;


const WorkPage=() => {
    return(
        <section id="workPage">
            <Wrapper>
                <div className="redbox">
                    <img src={Desert} alt="" id="desertImg" className="thematicImg responsive-img"/>
                </div>
            </Wrapper>
        </section>
    )
}

export default WorkPage;