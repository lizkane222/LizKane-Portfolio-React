import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';


// const InterestsPageStyled = styled.div;
import Obsessions from "../components/Room/UploadPhotosToWeb/docs/obsessions.png";


const InterestsPage=() => {
    return(
        <section id="interestsPage">
            <Wrapper>
                <p>My Interests & Hobbies</p>
                <div className="redbox">
                    <img src={Obsessions} alt="" id="obessionsImg" className="thematicImg responsive-img"/>
                </div>
            </Wrapper>
        </section>
    )
}

export default InterestsPage;