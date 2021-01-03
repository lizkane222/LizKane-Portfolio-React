import React from "react";

import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';
import TodoList from "../components/Todos/TodoList";
import Footer from "../components/Footer/Footer";

import {FiTwitter, FiGithub, FiLinkedin, FiSmartphone} from 'react-icons/fi';
import {SiMinutemailer} from 'react-icons/si';
import {VscLocation} from 'react-icons/vsc';

// const ContactPageStyled = styled.div;

const ContactPage=() => {
    return(
        <section id="contactPage">
            <Wrapper>
                <TodoList className="todoListGrid"/>



            <div id="socialMedia">
                <div id="linkedIn">
                <a href="linkedin.com/in/lizkane">
                <i><FiLinkedin/></i>
                <p className="iconText">linkedin.com/in/lizkane</p></a>
                </div>

                <div id="github">
                <a href="https://github.com/lizkane222">
                <i><FiGithub/></i>
                <p className="iconText">https://github.com/lizkane222</p></a>
                </div>

                <div id="twitter">
                <a href="https://twitter.com/lizaykay">
                <i><FiTwitter/></i>
                <p className="iconText">https://twitter.com/lizaykay</p></a>
                </div>

                <div id="phone">
                <a href="#">
                <i><FiSmartphone/></i>
                <p className="iconText">669-241-8922</p></a>
                </div>

                <div id="email">
                <a href="#">
                <i><SiMinutemailer/></i>
                <p className="iconText">lizkane222@gmail.com</p></a>
                </div>

                <div id="location">
                <a href="#">
                <i><VscLocation/></i>
                <p className="iconText">San Francisco, California</p></a>
                </div>

                {/* <div>
                </>
                <p></p>
                </div> */}

            </div>
            <Footer/>
            </Wrapper>
        </section>
    )
}

export default ContactPage;