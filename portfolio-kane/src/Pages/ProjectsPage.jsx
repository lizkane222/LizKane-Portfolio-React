import React from "react";
import Wrapper from '../components/Header/Wrapper';
// import styled from 'styled-components';
import {FaBootstrap, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaCodepen, FaHtml5, FaNpm, FaPython, FaSlack, FaTrello, } from 'react-icons/fa';
import {SiTypescript, SiJavascript, SiAdobeaftereffects, SiAtom, SiBabel, SiCss3, SiMongodb, SiFirebase, SiAdobecreativecloud, SiAdobelightroomclassic, SiAdobephotoshop, SiAdobexd, SiAdobe, SiMysql, SiPostgresql, SiVisualstudio, SiNotion, SiAirtable } from 'react-icons/si';
import {DiDjango, DiHeroku, DiJqueryLogo, DiSass, DiMaterializecss, } from 'react-icons/di';



// import "../styles/ProjectStyle/project.css"
import ProjectList from "../components/ResourcesProjects/ProjectList";


// import TeamWork from "../components/ResourcesProjects/UploadPhotosToWeb/docs/teamWork.png";
// import BeeGrid from "../components/ResourcesProjects/UploadPhotosToWeb/docs/projectsBeeGrid.png";



// const ProjectsPageStyled = styled.div;

const ProjectsPage=() => {
    
    return(
        <section id="projectsPage" className="">
                <Wrapper>
                <div className="row">
                    <div className="col-lg-5 mx-auto" id="teamWorkGridParent">
                        {/* <div className="redBox" > */}
                            {/* <img href={BeeGrid} id="beeGrid"/> */}
                            <ul className="social-icons icon-circle icon-rotate list-unstyled" id="teamWorkGrid"> 
                            {/* LANGUAGES */}
                                <li className="skillLi" id="FaReact"> <a><i className="fa"><FaReact/></i></a></li> 
                                <li className="skillLi" id="SiJavascript"> <a><i className="fa"><SiJavascript/></i></a></li>   
                                <li className="skillLi" id="DiDjango"> <a><i className="fa"><DiDjango/></i></a></li>
                                <li className="skillLi" id="SiCss3"> <a><i className="fa"><SiCss3/></i></a></li> 
                                <li className="skillLi" id="SiAtom"> <a><i className="fa"><SiAtom/></i></a></li> 
                                <li className="skillLi" id="DiSass"> <a><i className="fa"><DiSass/></i></a></li> 
                                <li className="skillLi" id="FaHtml5"> <a><i className="fa"><FaHtml5/></i></a></li> 
                                <li className="skillLi" id="FaPython"> <a><i className="fa"><FaPython/></i></a></li> 
                                <li className="skillLi" id="SiMongodb"> <a><i className="fa"><SiMongodb/></i></a></li> 
                                <li className="skillLi" id="SiMysql"> <a><i className="fa"><SiMysql/></i></a></li> 
                                <li className="skillLi" id="SiPostgresql"> <a><i className="fa"><SiPostgresql/></i></a></li> 
                                <li className="skillLi" id="DiJqueryLogo"> <a><i className="fa"><DiJqueryLogo/></i></a></li> 
                                <li className="skillLi" id="SiTypescript"> <a><i className="fa"><SiTypescript/></i></a></li> 
                            {/* LIBRARIES & FRAMEWORKS */}
                                <li className="skillLi" id="Github"> <a><i className="fa"><FaGithub/></i></a></li> 
                                <li className="skillLi" id="Bootstrap"> <a><i className="fa"><FaBootstrap/></i></a></li> 
                                <li className="skillLi" id="FaGitAlt"> <a><i className="fa"><FaGitAlt/></i></a></li> 
                                <li className="skillLi" id="DiMaterializecss"> <a><i className="fa"><DiMaterializecss/></i></a></li> 
                                <li className="skillLi" id="FaNodeJs"> <a><i className="fa"><FaNodeJs/></i></a></li> 
                                <li className="skillLi" id="FaNpm"> <a><i className="fa"><FaNpm/></i></a></li> 
                                <li className="skillLi" id="SiBabel"> <a><i className="fa"><SiBabel/></i></a></li> 
                                <li className="skillLi" id="SiFirebase"> <a><i className="fa"><SiFirebase/></i></a></li> 
                                <li className="skillLi" id="SiVisualstudio"> <a><i className="fa"><SiVisualstudio/></i></a></li> 
                            {/* PERSONAL INTERESTS */}
                                <li className="skillLi" id="FaCodepen"> <a><i className="fa"><FaCodepen/></i></a></li> 
                                <li className="skillLi" id="FaSlack"> <a><i className="fa"><FaSlack/></i></a></li> 
                                <li className="skillLi" id="FaTrello"> <a><i className="fa"><FaTrello/></i></a></li> 
                                <li className="skillLi" id="SiAdobeaftereffects"> <a><i className="fa"><SiAdobeaftereffects/></i></a></li> 
                                <li className="skillLi" id="SiAdobecreativecloud"> <a><i className="fa"><SiAdobecreativecloud/></i></a></li>
                                <li className="skillLi" id="SiAdobelightroomclassic"> <a><i className="fa"><SiAdobelightroomclassic/></i></a></li>
                                <li className="skillLi" id="SiAdobephotoshop"> <a><i className="fa"><SiAdobephotoshop/></i></a></li>
                                <li className="skillLi" id="SiAdobexd"> <a><i className="fa"><SiAdobexd/></i></a></li>
                                <li className="skillLi" id="SiAdobe"> <a><i className="fa"><SiAdobe/></i></a></li>
                                <li className="skillLi" id="SiNotion"> <a><i className="fa"><SiNotion/></i></a></li>
                                <li className="skillLi" id="SiAirtable"> <a><i className="fa"><SiAirtable/></i></a></li>
                                <li className="skillLi" id="DiHeroku"> <a><i className="fa"><DiHeroku/></i></a></li>
                            </ul>
                        </div>
                    {/* </div> */}

                    <div className="col-lg-5 mx-auto" id="projectBoardParent">
                        <ProjectList/>
                    </div>

                </div>
        </Wrapper>
            </section>
    )
}

export default ProjectsPage;