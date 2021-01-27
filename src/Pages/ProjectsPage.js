import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';
import {FaBootstrap, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaCodepen, FaHtml5, FaNpm, FaPython, FaSlack, FaTrello, } from 'react-icons/fa';
import {SiTypescript, SiJavascript, SiAdobeaftereffects, SiAtom, SiBabel, SiCss3, SiMongodb, SiFirebase, SiAdobecreativecloud, SiAdobelightroomclassic, SiAdobephotoshop, SiAdobexd, SiAdobe, SiMysql, SiPostgresql, SiVisualstudio, SiNotion, SiAirtable, } from 'react-icons/si';
import {DiDjango, DiHeroku, DiJqueryLogo, DiSass, DiMaterializecss, } from 'react-icons/di';



import ProjectList from "../components/Room/ProjectList";


import TeamWork from "../components/Room/UploadPhotosToWeb/docs/teamWork.png";



// const ProjectsPageStyled = styled.div;

const ProjectsPage=() => {
    
    return(
        <section id="projectsPage">
            <Wrapper>
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                        <div className="redbox" id="teamWorkGrid">
                        {/* <img src={TeamWork} alt="" id="teamWorkImg" className="thematicImg responsive-img"/> */}
                        
                            <ul className="social-icons icon-circle icon-rotate list-unstyled list-inline"> 
                            {/* LANGUAGES */}
                                <li><a href="#"><i id="FaReact" className="fa "><FaReact/></i></a> </li> 
                                <li><a href="#"><i id="SiJavascript" className="fa "><SiJavascript/></i></a> </li>   
                                <li> <a href="#"><i id="DiDjango" className="fa "><DiDjango/></i></a> </li>
                                <li> <a href="#"><i id="SiCss3" className="fa "><SiCss3/></i></a> </li> 
                                <li> <a href="#"><i id="SiAtom" className="fa "><SiAtom/></i></a> </li> 
                                <li> <a href="#"><i id="DiSass" className="fa "><DiSass/></i></a> </li> 
                                <li> <a href="#"><i id="FaHtml5" className="fa"><FaHtml5/></i></a></li> 
                                <li> <a href="#"><i id="FaPython" className="fa"><FaPython/></i></a></li> 
                                <li> <a href="#"><i id="SiMongodb" className="fa"><SiMongodb/></i></a></li> 
                                <li> <a href="#"><i id="SiMysql" className="fa"><SiMysql/></i></a></li> 
                                <li> <a href="#"><i id="SiPostgresql" className="fa"><SiPostgresql/></i></a></li> 
                                <li> <a href="#"><i id="DiJqueryLogo" className="fa"><DiJqueryLogo/></i></a></li> 
                                <li> <a href="#"><i id="SiTypescript" className="fa"><SiTypescript/></i></a></li> 
                            {/* LIBRARIES & FRAMEWORKS */}
                                <li> <a href="#"><i id="Github" className="fa"><FaGithub/></i></a></li> 
                                <li> <a href="#"><i id="Bootstrap" className="fa"><FaBootstrap/></i></a></li> 
                                <li> <a href="#"><i id="FaGitAlt" className="fa"><FaGitAlt/></i></a></li> 
                                <li> <a href="#"><i id="DiMaterializecss" className="fa"><DiMaterializecss/></i></a></li> 
                                <li> <a href="#"><i id="FaNodeJs" className="fa"><FaNodeJs/></i></a></li> 
                                <li> <a href="#"><i id="FaNpm" className="fa"><FaNpm/></i></a></li> 
                                <li> <a href="#"><i id="SiBabel" className="fa"><SiBabel/></i></a></li> 
                                <li> <a href="#"><i id="SiFirebase" className="fa"><SiFirebase/></i></a></li> 
                                <li> <a href="#"><i id="SiVisualstudio" className="fa"><SiVisualstudio/></i></a></li> 
                            {/* PERSONAL INTERESTS */}
                                <li> <a href="#"><i id="FaCodepen" className="fa"><FaCodepen/></i></a></li> 
                                <li> <a href="#"><i id="FaSlack" className="fa"><FaSlack/></i></a></li> 
                                <li> <a href="#"><i id="FaTrello" className="fa"><FaTrello/></i></a></li> 
                                <li> <a href="#"><i id="SiAdobeaftereffects" className="fa"><SiAdobeaftereffects/></i></a></li> 
                                <li> <a href="#"><i id="SiAdobecreativecloud" className="fa"><SiAdobecreativecloud/></i></a></li>
                                <li> <a href="#"><i id="SiAdobelightroomclassic" className="fa"><SiAdobelightroomclassic/></i></a></li>
                                <li> <a href="#"><i id="SiAdobephotoshop" className="fa"><SiAdobephotoshop/></i></a></li>
                                <li> <a href="#"><i id="SiAdobexd" className="fa"><SiAdobexd/></i></a></li>
                                <li> <a href="#"><i id="SiAdobe" className="fa"><SiAdobe/></i></a></li>
                                <li> <a href="#"><i id="SiNotion" className="fa"><SiNotion/></i></a></li>
                                <li> <a href="#"><i id="SiAirtable" className="fa"><SiAirtable/></i></a></li>
                                <li> <a href="#"><i id="DiHeroku" className="fa"><DiHeroku/></i></a></li>
                            </ul>
                        </div>
                        <hr />    
                    </div>
                    <div className="col-lg-6 mx-auto" id="projectBoardParent">
                        <ProjectList/>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default ProjectsPage;