import React, { useState } from "react";

import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';
import TodoList from "../components/Todos/TodoList";
import Footer from "../components/Footer/Footer";

import {FiTwitter, FiGithub, FiLinkedin, FiSmartphone} from 'react-icons/fi';
import {SiMinutemailer} from 'react-icons/si';
import {VscLocation} from 'react-icons/vsc';

// const ContactPageStyled = styled.div;

const ContactPage=() => {
    const [count, setCount] = useState(0)

    const selectiveCounter=(e) => {
        e.target.className !='alreadyCounted' ? setCount(count+1) : e.target.className = 'alreadyCounted'
    }


    return(
        <section id="contactPage">
            <Wrapper>
                <TodoList className="todoListGrid"/>

                <div>
            <p>You viewed {count} components on my site. Thanks & Come Back Soon!</p>
                </div>

            <div id="socialMedia">
                <div id="linkedIn" onClick={() => setCount(count+1)}>
                <a href="https://linkedin.com/in/lizkane" target="_blank" >
                <i><FiLinkedin/></i>
                <p className="iconText">linkedin.com/in/lizkane</p></a>
                </div>

                <div id="github" onClick={() => setCount(count+1)}>
                <a href="https://github.com/lizkane222" target="_blank" >
                <i><FiGithub/></i>
                <p className="iconText">https://github.com/lizkane222</p></a>
                </div>

                <div id="twitter" onClick={() => setCount(count+1)}>
                <a href="https://twitter.com/lizaykay" target="_blank" >
                <i><FiTwitter/></i>
                <p className="iconText">https://twitter.com/lizaykay</p></a>
                </div>

                <div id="phone" onClick={() => setCount(count+1)}>
                <a href="tel:+16692418922" target="_blank" >
                <i><FiSmartphone/></i>
                <p className="iconText">669-241-8922</p></a>
                </div>

                <div id="email" onClick={() => setCount(count+1)}>
                <a href="mailto:lizkane222@gmail.com?subject=Inquire Further- Contact Liz" target="_blank" >
                <i><SiMinutemailer/></i>
                <p className="iconText">lizkane222@gmail.com</p></a>
                </div>

                <div id="location" onClick={() => setCount(count+1)}>
                <a href="#" >
                <i><VscLocation/></i>
                <p className="iconText">San Francisco, California</p></a>
                </div>

                {/* <div>
                </>
                <p></p>
                </div> */}


            </div>
            </Wrapper>
            <Footer/>
        </section>
    )
}

export default ContactPage;