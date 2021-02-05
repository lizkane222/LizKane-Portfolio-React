import React, { useState, setState} from "react";
import { useToggle} from "react-use";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import Window from "../components/window"
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

//     var jQmenu = document.getElementsByClassName('Interests-list'),
//     jQitem = document.getElementsByClassName('Interests-list-item'),
//     // w = window.width(), //window width
//     // h = window.height(); //window height
//     interestsBody = document.getElementsByClassName('interestsBody'),
//     // w = interestsBody.width(),
//     // h = interestsBody.height();
//     w = Window.width(),
//     h = Window.height();

//   interestsBody.on('mousemove', function(e) {
//   var offsetX = 0.5 - e.pageX / w, //cursor position X
//       offsetY = 0.5 - e.pageY / h, //cursor position Y
//       dy = e.pageY - h / 2, //@h/2 = center of poster
//       dx = e.pageX - w / 2, //@w/2 = center of poster
//       theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
//       angle = theta * 180 / Math.PI - 90, //convert rad in degrees
//       offsetPoster = jQmenu.data('offset'),
//       transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

//   //get angle between 0-360
//   if (angle < 0) {
//     angle = angle + 360;
//   }

//   //poster transform
//   jQmenu.css('transform', transformPoster);

//   //parallax for each layer
//   jQitem.each(function() {
//     var jQthis = (this),
//         offsetLayer = jQthis.data('offset') || 0,
//         transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

//     jQthis.css('transform', transformLayer);
//   });
// });










    return(
        <section id="interestsPage">
            <Wrapper>
                {/* <p>My Interests & Hobbies</p> */}
                <section id="interestsLanding">

                    {/* make this a nav link to bloglist for autoscroll on click */}
                    <div className="interestsBody">
                        <div className="interestsContainer">
                            <ul className="Interests-list" id="interestsHeadings" data-offset="10">
                                <li id="callBlog" className="Interests-list-item" onClick={toggleBlogIsOn} data-offset="20">
                                    {/* <h4>Blog</h4> */}
                                    Blog
                                        <span class="InterestMask"><span>Blog</span></span>
                                        <span class="InterestMask"><span>Blog</span></span>
                                </li>
                                <li id="callMusician" className="Interests-list-item" onClick={toggleMusicianIsOn} data-offset="16">
                                    {/* <h4>Musician</h4> */}
                                    Musician
                                        <span class="InterestMask"><span>Musician</span></span>
                                        <span class="InterestMask"><span>Musician</span></span>
                                </li>
                                <li id="callEngineer" className="Interests-list-item" onClick={toggleEngineerIsOn} data-offset="12">
                                    {/* <h4>Engineer</h4> */}
                                    Engineer
                                        <span class="InterestMask"><span>Engineer</span></span>
                                        <span class="InterestMask"><span>Engineer</span></span>
                                </li>
                                <li id="callNomad" className="Interests-list-item" onClick={toggleNomadIsOn} data-offset="8">
                                    {/* <h4>Nomad</h4> */}
                                    Nomad
                                        <span class="InterestMask"><span>Nomad</span></span>
                                        <span class="InterestMask"><span>Nomad</span></span>
                                </li>
                                <li id="callArtist" className="Interests-list-item" onClick={toggleArtistIsOn} data-offset="8">
                                    {/* <h4>Artist</h4> */}
                                    Artist
                                        <span class="InterestMask"><span>Artist</span></span>
                                        <span class="InterestMask"><span>Artist</span></span>
                                </li>
                                <li id="callTech" className="Interests-list-item" onClick={toggleTechIsOn} data-offset="8">
                                    {/* <h4>Techie</h4> */}
                                    Techie
                                        <span class="InterestMask"><span>Techie</span></span>
                                        <span class="InterestMask"><span>Techie</span></span>
                                </li>
                                <li id="callWriter" className="Interests-list-item" onClick={toggleWriterIsOn} data-offset="8">
                                    {/* <h4>Writer</h4> */}
                                    Writer
                                        <span class="InterestMask"><span>Writer</span></span>
                                        <span class="InterestMask"><span>Writer</span></span>
                                </li>
                                <li id="callAthlete" className="Interests-list-item" onClick={toggleAthleteIsOn} data-offset="8">
                                    {/* <h4>Athlete</h4> */}
                                    Athlete
                                        <span class="InterestMask"><span>Athlete</span></span>
                                        <span class="InterestMask"><span>Athlete</span></span>
                                </li>
                                <li id="callTeacher" className="Interests-list-item" onClick={toggleTeacherIsOn} data-offset="8">
                                    {/* <h4>Teacher</h4> */}
                                    Teacher
                                        <span class="InterestMask"><span>Teacher</span></span>
                                        <span class="InterestMask"><span>Teacher</span></span>
                                </li>
                                <li id="callFeminist" className="Interests-list-item" onClick={toggleFeministIsOn} data-offset="8">
                                    {/* <h4>Feminist</h4> */}
                                    Feminist
                                        <span class="InterestMask"><span>Feminist</span></span>
                                        <span class="InterestMask"><span>Feminist</span></span>
                                </li>
                            </ul>
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