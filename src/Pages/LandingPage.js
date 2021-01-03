import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import KaneLogo from "../components/KaneLogo/KaneLogo";

// const LandingPageStyled = styled.div;

const LandingPage=() => {
    return(
        <section id="landingPage">
            <Wrapper>
                <KaneLogo/>
            </Wrapper>
        </section>
    )
}

export default LandingPage;