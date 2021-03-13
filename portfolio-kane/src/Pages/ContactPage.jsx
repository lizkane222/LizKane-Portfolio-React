import React, { useState } from "react";

import Wrapper from '../components/Header/Wrapper';
// import styled from 'styled-components';
// import TodoList from "../components/Todos/TodoList";
import Footer from "../components/Footer/Footer";
import EmailForm from "../components/Forms/EmailForm";
import{ init } from 'emailjs-com';

import {FiTwitter, FiGithub, FiLinkedin, FiSmartphone} from 'react-icons/fi';
import {SiMinutemailer} from 'react-icons/si';
import {VscLocation} from 'react-icons/vsc';

// const ContactPageStyled = styled.div;

const ContactPage=() => {
    init("user_1zjWdxZg6yFodwsuNkOVU");
    const [count, setCount] = useState(0)
    const [iconsClicked, setIconsClicked] = useState(<p></p>)
    let selectiveCounter

    selectiveCounter=(e) => {
        e.target.className !=='alreadyCounted' ? setCount(count+1) &&  (e.target.className +='alreadyCounted'): e.target.className = 'alreadyCounted'
        for(let i = 0; i<e.target.childNodes.length; i++){
            if(e.target.childNodes[i].className === "socIcon"){
                setIconsClicked(
                    iconsClicked.append(e.target.childNodes)
                )
            }
        };
    }



    return(
        <section id="contactPage">
            <Wrapper id="contactPageWrapper">
            
            <div className="contactRow">
                <EmailForm onClick={(e) => selectiveCounter(e)}/>

                {/* <TodoList className="todoListGrid"/> */}
                {/* <div className="container" id="socialContainer">     */}
                    <div className="col-lg-5 mx-auto" id="socialContainer">
                        {/* <div className="card mt-2 mx-auto p-4 grey-very-dark2 box-shadow"> */}
                        <div className="card mt-2 mx-auto p-4 grey-dark2 box-shadow">
                            <div className="card-body ">
                                <div className="container ">
                                    <div className="text-center mt-5" id="cardTitleDiv">
                                        <h2 className="cardTitle textShadow">Contact & Follow Liz</h2>
                                        <hr/>
                                    </div>
                    
                                    <div id="socialMedia">
                                        
                                            <div id="linkedIn" className="socItem" onClick={(e) => selectiveCounter(e)}>
                                                <a href="https://linkedin.com/in/lizkane" target="_blank" rel="noreferrer" className="social">
                                                <i className="socIcon"><FiLinkedin/></i>
                                                <p className="iconText">linkedin.com/in/lizkane</p></a>
                                            </div>

                                            <div id="github" className="socItem" onClick={(e) => selectiveCounter(e)}>
                                                <a href="https://github.com/lizkane222" target="_blank" rel="noreferrer" className="social">
                                                <i className="socIcon"><FiGithub/></i>
                                                <p className="iconText">github.com/lizkane222</p></a>
                                            </div>
                                        
                                            <div id="twitter" className="socItem" onClick={(e) => selectiveCounter(e)}>
                                                <a href="https://twitter.com/lizaykay" target="_blank" rel="noreferrer" className="social">
                                                <i className="socIcon"><FiTwitter/></i>
                                                <p className="iconText">twitter.com/lizaykay</p></a>
                                            </div>

                                            <div id="phone" className="socItem" onClick={(e) => selectiveCounter(e)}>
                                                <a href="tel:+16692418922" target="_blank" rel="noreferrer" className="social">
                                                <i className="socIcon"><FiSmartphone/></i>
                                                <p className="iconText">669-241-8922</p></a>
                                            </div>
                                        
                                            <div id="email" className="socItem" onClick={(e) => selectiveCounter(e)}>
                                                <a href="mailto:lizkane222@gmail.com?subject=Inquire Further- Contact Liz" target="_blank" rel="noreferrer" className="social">
                                                <i className="socIcon"><SiMinutemailer/></i>
                                                <p className="iconText">lizkane222@gmail.com</p></a>
                                            </div>

                                            <div id="location" className="socItem" onClick={(e) => selectiveCounter(e)}>
                                                <a href="https://www.google.com/maps/place/San+Francisco,+CA/@37.7576948,-122.4727051,13z/data=!3m1!4b1!4m5!3m4!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155" target="_blank" rel="noreferrer" className="social">
                                                <i className="socIcon"><VscLocation/></i>
                                                <p className="iconText">San Francisco, California</p></a>
                                            </div>
                                    </div>
                                </div>
                                <div className="float-right" style={{"opacity":".4", "max-height":"2vw", "margin":"2vw 0 -2vw"}}>
                                    <p className="blueText">You've viewed {count} / 7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
            </Wrapper>
        </section>
    )
}

export default ContactPage;