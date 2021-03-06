import React, {Component, setState} from "react";
// import ReactEmbedGist from 'react-embed-gist';
import Gist from 'super-react-gist';

import Carousel from "../../Carousel/Carousel"

import {FaBootstrap, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaCodepen, FaHtml5, FaNpm, FaPython, FaSlack, FaTrello, } from 'react-icons/fa';
import {SiTypescript, SiJavascript, SiAdobeaftereffects, SiAtom, SiBabel, SiCss3, SiMongodb, SiFirebase, SiAdobecreativecloud, SiAdobelightroomclassic, SiAdobephotoshop, SiAdobexd, SiAdobe, SiMysql, SiPostgresql, SiVisualstudio, SiNotion, SiAirtable, } from 'react-icons/si';
import {DiDjango, DiHeroku, DiJqueryLogo, DiSass, DiMaterializecss, } from 'react-icons/di';

const FloatBox =(props) => {
let languages = {
    "React" : <li className="skillLi" id="FaReact"><a><i className="fa "><FaReact/></i></a> </li>, 
    "Javascript" : <li className="skillLi" id="SiJavascript"><a><i className="fa "><SiJavascript/></i></a> </li>,   
    "Django" : <li className="skillLi" id="DiDjango"> <a><i className="fa "><DiDjango/></i></a> </li>,
    "Css3" : <li className="skillLi" id="SiCss3"> <a><i className="fa "><SiCss3/></i></a> </li>, 
    "Atom" : <li className="skillLi" id="SiAtom"> <a><i className="fa "><SiAtom/></i></a> </li>, 
    "Sass" : <li className="skillLi" id="DiSass"> <a><i className="fa "><DiSass/></i></a> </li>, 
    "Html5" : <li className="skillLi" id="FaHtml5"> <a><i className="fa"><FaHtml5/></i></a></li>, 
    "Python" : <li className="skillLi" id="FaPython"> <a><i className="fa"><FaPython/></i></a></li>, 
    "Mongodb" : <li className="skillLi" id="SiMongodb"> <a><i className="fa"><SiMongodb/></i></a></li>, 
    "Mysql" : <li className="skillLi" id="SiMysql"> <a><i className="fa"><SiMysql/></i></a></li>, 
    "Postgresql" : <li className="skillLi" id="SiPostgresql"> <a><i className="fa"><SiPostgresql/></i></a></li>, 
    "Jquery" : <li className="skillLi" id="DiJqueryLogo"> <a><i className="fa"><DiJqueryLogo/></i></a></li>, 
    "Typescript" : <li className="skillLi" id="SiTypescript"> <a><i className="fa"><SiTypescript/></i></a></li>, 
    "Github" : <li className="skillLi" id="Github"> <a><i className="fa"><FaGithub/></i></a></li>, 
    "Bootstrap" : <li className="skillLi" id="Bootstrap"> <a><i className="fa"><FaBootstrap/></i></a></li>, 
    "Git" : <li className="skillLi" id="FaGitAlt"> <a><i className="fa"><FaGitAlt/></i></a></li>, 
    "Materializecss" : <li className="skillLi" id="DiMaterializecss"> <a><i className="fa"><DiMaterializecss/></i></a></li>, 
    "NodeJs" : <li className="skillLi" id="FaNodeJs"> <a><i className="fa"><FaNodeJs/></i></a></li>, 
    "Npm" : <li className="skillLi" id="FaNpm"> <a><i className="fa"><FaNpm/></i></a></li>, 
    "Babel" : <li className="skillLi" id="SiBabel"> <a><i className="fa"><SiBabel/></i></a></li>, 
    "Firebase" : <li className="skillLi" id="SiFirebase"> <a><i className="fa"><SiFirebase/></i></a></li>, 
    "Visualstudio" : <li className="skillLi" id="SiVisualstudio"> <a><i className="fa"><SiVisualstudio/></i></a></li>, 
    "Codepen" : <li className="skillLi" id="FaCodepen"> <a><i className="fa"><FaCodepen/></i></a></li>, 
    "Slack" : <li className="skillLi" id="FaSlack"> <a><i className="fa"><FaSlack/></i></a></li>, 
    "Trello" : <li className="skillLi" id="FaTrello"> <a><i className="fa"><FaTrello/></i></a></li>, 
    "Adobeaftereffects" : <li className="skillLi" id="SiAdobeaftereffects"> <a><i className="fa"><SiAdobeaftereffects/></i></a></li>, 
    "Adobecreativecloud" : <li className="skillLi" id="SiAdobecreativecloud"> <a><i className="fa"><SiAdobecreativecloud/></i></a></li>,
    "Adobelightroomclassic" : <li className="skillLi" id="SiAdobelightroomclassic"> <a><i className="fa"><SiAdobelightroomclassic/></i></a></li>,
    "Adobephotoshop" : <li className="skillLi" id="SiAdobephotoshop"> <a><i className="fa"><SiAdobephotoshop/></i></a></li>,
    "Adobexd" : <li className="skillLi" id="SiAdobexd"> <a><i className="fa"><SiAdobexd/></i></a></li>,
    "Adobe" : <li className="skillLi" id="SiAdobe"> <a><i className="fa"><SiAdobe/></i></a></li>,
    "Notion" : <li className="skillLi" id="SiNotion"> <a><i className="fa"><SiNotion/></i></a></li>,
    "Airtable" : <li className="skillLi" id="SiAirtable"> <a><i className="fa"><SiAirtable/></i></a></li>,
    "Heroku" : <li className="skillLi" id="DiHeroku"> <a><i className="fa"><DiHeroku/></i></a></li>
}
    // console.log(props.language.length)
    let language = props.language
    const getProjectLanguages = () => {
        let projectLanguages = []
        // for(let lang=0; lang < props.language.length; lang++){
        
        for(let lang of language){
            projectLanguages.push(languages.lang)
        }
        return projectLanguages
    }



    return(
        <div className="wrapperFloatBox" onClick={props.setActive}>
            <div className="floatBox" onClick={(e) => e.stopPropagation()}>
                <div className="projectContainer animate">
                    <div className="projectNameLogo activeProject">
                        {/* <img className="projectLogoActive" src={props.logo} alt={props.name + "logo"} style={props.style}/> */}
                        <img className="projectLogoActive" src={props.logo} alt={props.name + "logo"}/>
                        <h3 className="projectName">{props.name}</h3>
                    </div>
                    <div className="projectDescription"><p >{props.description}</p></div>
                    <div className="projectMore">
                        {/* <h3>MORE</h3> */}
                        <ul className="social-icons icon-circle icon-rotate list-unstyled list-inline"> 
                            {getProjectLanguages()}
                        </ul>
                    </div>
                    <div className="projectGallery">
                        <div className="projectPhotos">
                            <Carousel gallery={props.gallery}/>
                        </div>
                    </div>
                    <div className="projectGithub">   
                        {props.github2 ?
                                    <>
                                        <a href={props.github} className="githubProject float-right"><p id="githubProject1">{props.github}</p></a>
                                        <a href={props.github2} className="githubProject githubProject2 float-right"><p id="githubProject2">{props.github2}</p></a>
                                    </>
                                :
                                    <>
                                        <a href={props.github} className="githubProject"><p>{props.github}</p></a>
                                    </>
                        }
                    </div>
                    {/* <div>
                        <div className="projectCode">
                            <div className="responsiveIframeProject">
                                <a href={props.github} className="githubProject"><p>{props.github}</p></a>
                                <iframe src={props.github} className="githubIFrame"></iframe>
                                <ReactEmbedGist gist={"lizkane222/"+(props.gist)}></ReactEmbedGist>
                                <ReactEmbedGist gist={props.gist}></ReactEmbedGist>
                                <iframe 
                                    width="100%"
                                    height="350"    
                                    src={props.gist} className="githubIFrame"></iframe>
                                <Gist url={props.gist}/>
                                {props.github2 ?
                                    <>
                                        <a href={props.github2} className="githubProject2"><p>{props.github2}</p></a>
                                        <iframe src={props.github2} className="githubIFrame2"></iframe>
                                    </>
                                :[]}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FloatBox;