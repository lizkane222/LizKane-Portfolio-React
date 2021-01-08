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

    let list = document.getElementsByClassName('content__container__list');
    let items = null;
    const anApple =()=> {
    for (let i=0; i<list.childNodes.length; i++){
        if(list.childNodes[i].className =='vowel') {
            return 'n'
        }
    }}

    let redColor = "#8B0124";
    let blueColor = "#327E8A";
    let yellowColor = "#EDC168";

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

                <div className="rollerContainer">
                    <div class="content">
                        <div class="content__container">
                            <h5 class="content__container__text">
                                more than just a
                                
                            </h5>

                            <ul class="content__container__list">
                                <li class="content__container__list__item blueRoll">Software Engineer</li>
                                <li class="content__container__list__item yellowRoll">Teacher</li>
                                <li class="content__container__list__item redRoll vowel" id="vowelArtist">Artist</li>
                                <li class="content__container__list__item blueRoll">Musician</li>
                                <li class="content__container__list__item yellowRoll">Writer</li>
                                <li class="content__container__list__item redRoll">Feminist</li>
                                <li class="content__container__list__item yellowRoll vowel">Athlete</li>
                                <li class="content__container__list__item redRoll">Nomad</li>
                                <li class="content__container__list__item yellowRoll">Woman in Tech</li>
                                <li class="content__container__list__item blueRoll">Software Engineer</li>

                            </ul>
                        </div>
                    </div>
                </div>

            </Wrapper>
        </section>
    )
}

export default InterestsPage;