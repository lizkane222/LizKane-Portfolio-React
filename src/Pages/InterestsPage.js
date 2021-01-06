import React, { useState, setState} from "react";
import { useToggle} from "react-use";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';
import BlogList from "../components/Blog/BlogList";

// const InterestsPageStyled = styled.div;
import Obsessions from "../components/Room/UploadPhotosToWeb/docs/obsessions.png";


const InterestsPage=() => {
    const [isOn, toggleIsOn] = useToggle(false);
    const [on, toggle] = useToggle(true);

    
    // const toggleIsActive = () => {

        
        
        // {!isActive ?
            //     setIsActive(isActive => (
        //         {isActive: !isActive}
        //     ))
        // :
        //     setIsActive(
        //         {isActive: {BlogList}}
        //     )
        // }
    // };



    return(
        <section id="interestsPage">
            <Wrapper>
                <p>My Interests & Hobbies</p>
                <div className="redbox">
                    <img src={Obsessions} alt="" id="obessionsImg" className="thematicImg responsive-img"/>
                </div>

                    <div id="callBlog" onClick={toggleIsOn}>
                        <h4>Blog</h4>
                    </div>
                    <div>
                        {isOn ? <BlogList/> : []}
                    </div>
                    <div>
                <div>{on ? 'ON' : 'OFF'}</div>
                <button onClick={toggle}>Toggle</button>
                <button onClick={() => toggle(true)}>set ON</button>
                <button onClick={() => toggle(false)}>set OFF</button>
                </div>
            </Wrapper>
        </section>
    )
}

export default InterestsPage;