import React, { useState, setState} from "react";
import { useToggle} from "react-use";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import Window from "../components/window"
import BlogList from "../components/Blog/BlogList";
// const InterestsPageStyled = styled.div;
import Obsessions from "../components/ResourcesProjects/UploadPhotosToWeb/docs/obsessions.png";
import FloatBlogBox from "../components/Blog/FloatBlogBox";
import RecentPostsCarousel from "../components/Blog/RecentPostsCarousel";

const InterestsPage=() => {
    const [isBlogOn, toggleBlogIsOn] = useToggle(false);
    const [isArtistOn, toggleArtistIsOn] = useToggle(false);
    const [isMusicianOn, toggleMusicianIsOn] = useToggle(false);
    const [isEngineerOn, toggleEngineerIsOn] = useToggle(false);
    const [isNomadOn, toggleNomadIsOn] = useToggle(false);
    const [isWriterOn, toggleWriterIsOn] = useToggle(false);
    // const [isTechOn, toggleTechIsOn] = useToggle(false);
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
                <section id="interestsLanding">

                    {/* make this a nav link to bloglist for autoscroll on click */}
                    <div className="interestsBody">
                        <div className="interestsContainer">
                            <ul className="Interests-list" id="interestsHeadings" data-offset="10">
                                <li id="callBlog" className="Interests-list-item" onClick={toggleBlogIsOn} data-offset="20">
                                    {/* <h4>Blog</h4> */}
                                    Blog
                                        <span className="InterestMask"><span>Blog</span></span>
                                        <span className="InterestMask"><span>Blog</span></span>
                                </li>
                                <li id="callMusician" className="Interests-list-item" onClick={toggleMusicianIsOn} data-offset="16">
                                    {/* <h4>Musician</h4> */}
                                    Musician
                                        <span className="InterestMask"><span>Musician</span></span>
                                        <span className="InterestMask"><span>Musician</span></span>
                                </li>
                                <li id="callEngineer" className="Interests-list-item" onClick={toggleEngineerIsOn} data-offset="12">
                                    {/* <h4>Engineer</h4> */}
                                    Engineer
                                        <span className="InterestMask"><span>Engineer</span></span>
                                        <span className="InterestMask"><span>Engineer</span></span>
                                </li>
                                <li id="callNomad" className="Interests-list-item" onClick={toggleNomadIsOn} data-offset="8">
                                    {/* <h4>Nomad</h4> */}
                                    Nomad
                                        <span className="InterestMask"><span>Nomad</span></span>
                                        <span className="InterestMask"><span>Nomad</span></span>
                                </li>
                                <li id="callArtist" className="Interests-list-item" onClick={toggleArtistIsOn} data-offset="8">
                                    {/* <h4>Artist</h4> */}
                                    Artist
                                        <span className="InterestMask"><span>Artist</span></span>
                                        <span className="InterestMask"><span>Artist</span></span>
                                </li>
                                <li id="callWriter" className="Interests-list-item" onClick={toggleWriterIsOn} data-offset="8">
                                    {/* <h4>Writer</h4> */}
                                    Writer
                                        <span className="InterestMask"><span>Writer</span></span>
                                        <span className="InterestMask"><span>Writer</span></span>
                                </li>
                                <li id="callAthlete" className="Interests-list-item" onClick={toggleAthleteIsOn} data-offset="8">
                                    {/* <h4>Athlete</h4> */}
                                    Athlete
                                        <span className="InterestMask"><span>Athlete</span></span>
                                        <span className="InterestMask"><span>Athlete</span></span>
                                </li>
                                <li id="callTeacher" className="Interests-list-item" onClick={toggleTeacherIsOn} data-offset="8">
                                    {/* <h4>Teacher</h4> */}
                                    Teacher
                                        <span className="InterestMask"><span>Teacher</span></span>
                                        <span className="InterestMask"><span>Teacher</span></span>
                                </li>
                                <li id="callFeminist" className="Interests-list-item" onClick={toggleFeministIsOn} data-offset="8">
                                    {/* <h4>Feminist</h4> */}
                                    Feminist
                                        <span className="InterestMask"><span>Feminist</span></span>
                                        <span className="InterestMask"><span>Feminist</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div id="obsessionsImgContainer" className="box-shadow"> */}
                    <div id="obsessionsImgContainer" >
                        <ul className="Interests-list"  data-offset="10">
                            <li id="obsessionsHeading" className="Interests-list-item" data-offset="30">
                                Obsessions
                                    <span className="InterestMask"><span>Obsessions</span></span>
                                    <span className="InterestMask"><span>Obsessions</span></span>
                            </li>
                        </ul>
                        
                        {/* <h2 >Obsessions</h2> */}
                        <img src={Obsessions} alt="" id="obsessionsImg" className="thematicImg responsive-img "/>
                    </div>

                    
                </section>
                
                {/* <div className="rollerContainer">
                    <div className="content">
                        <div className="content__container">
                            <h5 className="content__container__text">
                                more than a
                            </h5>

                            <ul className="content__container__list">
                                <li className="content__container__list__item blueRoll">Software Engineer</li>
                                <li className="content__container__list__item yellowRoll">Teacher</li>
                                <li className="content__container__list__item redRoll vowel" id="vowelArtist">Artist</li>
                                <li className="content__container__list__item blueRoll">Musician</li>
                                <li className="content__container__list__item yellowRoll">Writer</li>
                                <li className="content__container__list__item redRoll">Feminist</li>
                                <li className="content__container__list__item yellowRoll vowel">Athlete</li>
                                <li className="content__container__list__item redRoll">Nomad</li>
                                <li className="content__container__list__item yellowRoll">Woman in Tech</li>
                                <li className="content__container__list__item blueRoll">Software Engineer</li>

                            </ul>
                        </div>
                    </div>
                </div> */}
            </Wrapper>
{/* <hr/> */}
            {/* <div id="recentPostsPage" className="box-shadow"> */}
            <div id="recentPostsPage" >
                <div id="linkedInPosts">
                    <ul className="Interests-list"  data-offset="10">
                        <li className="Interests-list-item" id="linkedInPostLi" data-offset="20">
                            {/* <h4>Blog</h4> */}
                            Recent Posts
                                <span className="InterestMask"><span>Recent Posts</span></span>
                                <span className="InterestMask"><span>Recent Posts</span></span>
                        </li>
                    </ul>
                </div>

                <RecentPostsCarousel/>
            </div>

                <div>
                    {isBlogOn ? <FloatBlogBox toggleBlogIsOn={toggleBlogIsOn}/> : []}
                </div>
                {/* <hr/> */}

                {/* <div>
                    {isBlogOn ? <BlogList/> : []}
                </div> */}

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