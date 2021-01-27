import React, { useState } from "react";

import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';
import TodoList from "../components/Todos/TodoList";
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

    const selectiveCounter=(e) => {
        e.target.className !='alreadyCounted' ? setCount(count+1) : e.target.className = 'alreadyCounted'
    }


    return(
        <section id="contactPage">
            <Wrapper>
            
            <div className="row">
                <EmailForm onClick={() => setCount(count+1)} id="emailForm"/>

                {/* <TodoList className="todoListGrid"/> */}
                {/* <div className="container" id="socialContainer">     */}
                    <div className="col-lg-5 mx-auto">
                        <div className="card mt-2 mx-auto p-4 lightGrey">
                            <div className="card-body lightGrey">
                                <div className="container ">
                                    <div className="text-center mt-5">
                                        <h2 className="cardTitle">Contact & Follow Liz</h2>
                                    </div>
                    
                                    <div id="socialMedia">
                                        
                                            <div id="linkedIn" className="socItem" onClick={() => setCount(count+1)}>
                                                <a href="https://linkedin.com/in/lizkane" target="_blank" className="social">
                                                <i className="socIcon"><FiLinkedin/></i>
                                                <p className="iconText">linkedin.com/in/lizkane</p></a>
                                            </div>

                                            <div id="github" className="socItem" onClick={() => setCount(count+1)}>
                                                <a href="https://github.com/lizkane222" target="_blank" className="social">
                                                <i className="socIcon"><FiGithub/></i>
                                                <p className="iconText">github.com/lizkane222</p></a>
                                            </div>
                                        
                                            <div id="twitter" className="socItem" onClick={() => setCount(count+1)}>
                                                <a href="https://twitter.com/lizaykay" target="_blank" className="social">
                                                <i className="socIcon"><FiTwitter/></i>
                                                <p className="iconText">twitter.com/lizaykay</p></a>
                                            </div>

                                            <div id="phone" className="socItem" onClick={() => setCount(count+1)}>
                                                <a href="tel:+16692418922" target="_blank" className="social">
                                                <i className="socIcon"><FiSmartphone/></i>
                                                <p className="iconText">669-241-8922</p></a>
                                            </div>
                                        
                                            <div id="email" className="socItem" onClick={() => setCount(count+1)}>
                                                <a href="mailto:lizkane222@gmail.com?subject=Inquire Further- Contact Liz" target="_blank" className="social">
                                                <i className="socIcon"><SiMinutemailer/></i>
                                                <p className="iconText">lizkane222@gmail.com</p></a>
                                            </div>

                                            <div id="location" className="socItem" onClick={() => setCount(count+1)}>
                                                <a href="#" target="_blank" className="social">
                                                <i className="socIcon"><VscLocation/></i>
                                                <p className="iconText">San Francisco, California</p></a>
                                            </div>
                                    </div>
                                </div>
                                <div>
                                    <p> {count} / 7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div id="socialMedia">
                <div id="linkedIn" onClick={() => setCount(count+1)}>
                <a href="https://linkedin.com/in/lizkane" target="_blank" >
                <i className="socIcon"><FiLinkedin/></i>
                <p className="iconText">linkedin.com/in/lizkane</p></a>
                </div>

                <div id="github" onClick={() => setCount(count+1)}>
                <a href="https://github.com/lizkane222" target="_blank" >
                <i className="socIcon"><FiGithub/></i>
                <p className="iconText">https://github.com/lizkane222</p></a>
                </div>

                <div id="twitter" onClick={() => setCount(count+1)}>
                <a href="https://twitter.com/lizaykay" target="_blank" >
                <i className="socIcon"><FiTwitter/></i>
                <p className="iconText">https://twitter.com/lizaykay</p></a>
                </div>

                <div id="phone" onClick={() => setCount(count+1)}>
                <a href="tel:+16692418922" target="_blank" >
                <i className="socIcon"><FiSmartphone/></i>
                <p className="iconText">669-241-8922</p></a>
                </div>

                <div id="email" onClick={() => setCount(count+1)}>
                <a href="mailto:lizkane222@gmail.com?subject=Inquire Further- Contact Liz" target="_blank" >
                <i className="socIcon"><SiMinutemailer/></i>
                <p className="iconText">lizkane222@gmail.com</p></a>
                </div>

                <div id="location" onClick={() => setCount(count+1)}>
                <a href="#" >
                <i className="socIcon"><VscLocation/></i>
                <p className="iconText">San Francisco, California</p></a>
                </div> */}

                {/* <div>
                </>
                <p></p>
                </div> */}

                

            </Wrapper>
            {/* <Footer/> */}
        </section>
    )
}

export default ContactPage;