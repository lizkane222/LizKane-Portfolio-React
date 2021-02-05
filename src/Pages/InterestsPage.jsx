import React, { useState, setState} from "react";
import { useToggle} from "react-use";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';
import BlogList from "../components/Blog/BlogList";

// const InterestsPageStyled = styled.div;
import Obsessions from "../components/ResourcesProjects/UploadPhotosToWeb/docs/obsessions.png";


const InterestsPage=() => {
    const [isBlogOn, toggleBlogIsOn] = useToggle(false);
    const [isArtistOn, toggleArtistIsOn] = useToggle(false);
    const [isMusicianOn, toggleMusicianIsOn] = useToggle(false);
    const [isEngineerOn, toggleEngineerIsOn] = useToggle(false);
    const [isNomadOn, toggleNomadIsOn] = useToggle(false);
    const [isWriterOn, toggleWriterIsOn] = useToggle(false);
    const [isTechOn, toggleTechIsOn] = useToggle(false);
    const [isAthleteOn, toggleAthleteIsOn] = useToggle(false);
    const [isTeacherOn, toggleTeacherIsOn] = useToggle(false);
    const [isFeministOn, toggleFeministIsOn] = useToggle(false);
    // const [is2On, toggle2IsOn] = useToggle(false);
    // const [on, toggle] = useToggle(true);

    
    let redColor = "#8B0124";
    let blueColor = "#327E8A";
    let yellowColor = "#EDC168";

    return(
        <section id="interestsPage">
            <Wrapper>
                {/* <p>My Interests & Hobbies</p> */}
                <section id="interestsLanding">

                    {/* make this a nav link to bloglist for autoscroll on click */}
                    <div id="interestsHeadings">
                        <div id="callBlog" onClick={toggleBlogIsOn}>
                            <h4>Blog</h4>
                        </div>
                        <div id="callMusician" onClick={toggleMusicianIsOn}>
                            <h4>Musician</h4>
                        </div>
                        <div id="callEngineer" onClick={toggleEngineerIsOn}>
                            <h4>Engineer</h4>
                        </div>
                        <div id="callNomad" onClick={toggleNomadIsOn}>
                            <h4>Nomad</h4>
                        </div>
                        <div id="callArtist" onClick={toggleArtistIsOn}>
                            <h4>Artist</h4>
                        </div>
                        <div id="callTech" onClick={toggleTechIsOn}>
                            <h4>Techie</h4>
                        </div>
                        <div id="callWriter" onClick={toggleWriterIsOn}>
                            <h4>Writer</h4>
                        </div>
                        <div id="callAthlete" onClick={toggleAthleteIsOn}>
                            <h4>Athlete</h4>
                        </div>
                        <div id="callTeacher" onClick={toggleTeacherIsOn}>
                            <h4>Teacher</h4>
                        </div>
                        <div id="callFeminist" onClick={toggleFeministIsOn}>
                            <h4>Feminist</h4>
                        </div>
                    </div>

                    <div id="obsessionsImgContainer box-shadow">
                        <img src={Obsessions} alt="" id="obsessionsImg" className="thematicImg responsive-img "/>
                        
                    </div>
                
                </section>
                
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
                {/*  */}
                <div>
                    {isBlogOn ? <BlogList/> : []}
                </div>

                {/* <div>
                    <div>{on ? 'ON' : 'OFF'}</div>
                    <button onClick={toggle}>Toggle</button>
                    <button onClick={() => toggle(true)}>set ON</button>
                    <button onClick={() => toggle(false)}>set OFF</button>
                </div> */}

                

        </section>
    )
}

export default InterestsPage;