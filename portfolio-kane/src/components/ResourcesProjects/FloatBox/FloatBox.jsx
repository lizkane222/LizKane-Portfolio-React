import React, {Component, setState, useState} from "react";
// import ReactEmbedGist from 'react-embed-gist';
import Gist from 'super-react-gist';

import Carousel from "../../Carousel/Carousel"

import {FaBootstrap, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaCodepen, FaHtml5, FaNpm, FaPython, FaSlack, FaTrello, } from 'react-icons/fa';
import {SiTypescript, SiJavascript, SiAdobeaftereffects, SiAtom, SiBabel, SiCss3, SiMongodb, SiFirebase, SiAdobecreativecloud, SiAdobelightroomclassic, SiAdobephotoshop, SiAdobexd, SiAdobe, SiMysql, SiPostgresql, SiVisualstudio, SiNotion, SiAirtable, } from 'react-icons/si';
import {DiDjango, DiHeroku, DiJqueryLogo, DiSass, DiMaterializecss, } from 'react-icons/di';

const FloatBox =(props) => {
let languages = {
    "React" : <li className="skillLi" id="FaReactFB"><a><i className="fa" ><FaReact/></i></a> </li>, 
    "Javascript" : <li className="skillLi" id="SiJavascriptFB"><a><i className="fa" ><SiJavascript/></i></a> </li>,   
    "Django" : <li className="skillLi" id="DiDjangoFB"> <a><i className="fa" ><DiDjango/></i></a> </li>,
    "Css3" : <li className="skillLi" id="SiCss3FB"> <a><i className="fa" ><SiCss3/></i></a> </li>, 
    "Atom" : <li className="skillLi" id="SiAtomFB"> <a><i className="fa" ><SiAtom/></i></a> </li>, 
    "Sass" : <li className="skillLi" id="DiSassFB"> <a><i className="fa" ><DiSass/></i></a> </li>, 
    "Html5" : <li className="skillLi" id="FaHtml5FB"> <a><i className="fa" ><FaHtml5/></i></a></li>, 
    "Python" : <li className="skillLi" id="FaPythonFB"> <a><i className="fa" ><FaPython/></i></a></li>, 
    "Mongodb" : <li className="skillLi" id="SiMongodbFB"> <a><i className="fa" ><SiMongodb/></i></a></li>, 
    "Mysql" : <li className="skillLi" id="SiMysqlFB"> <a><i className="fa" ><SiMysql/></i></a></li>, 
    "Postgresql" : <li className="skillLi" id="SiPostgresqlFB"> <a><i className="fa" ><SiPostgresql/></i></a></li>, 
    "Jquery" : <li className="skillLi" id="DiJqueryLogoFB"> <a><i className="fa" ><DiJqueryLogo/></i></a></li>, 
    "Typescript" : <li className="skillLi" id="SiTypescriptFB"> <a><i className="fa" ><SiTypescript/></i></a></li>, 
    "Github" : <li className="skillLi" id="GithubFB"> <a><i className="fa" ><FaGithub/></i></a></li>, 
    "Bootstrap" : <li className="skillLi" id="BootstrapFB"> <a><i className="fa" ><FaBootstrap/></i></a></li>, 
    "Git" : <li className="skillLi" id="FaGitAltFB"> <a><i className="fa" ><FaGitAlt/></i></a></li>, 
    "Materializecss" : <li className="skillLi" id="DiMaterializecssFB"> <a><i className="fa" ><DiMaterializecss/></i></a></li>, 
    "NodeJs" : <li className="skillLi" id="FaNodeJsFB"> <a><i className="fa" ><FaNodeJs/></i></a></li>, 
    "Npm" : <li className="skillLi" id="FaNpmFB"> <a><i className="fa" ><FaNpm/></i></a></li>, 
    "Babel" : <li className="skillLi" id="SiBabelFB"> <a><i className="fa" ><SiBabel/></i></a></li>, 
    "Firebase" : <li className="skillLi" id="SiFirebaseFB"> <a><i className="fa" ><SiFirebase/></i></a></li>, 
    "Visualstudio" : <li className="skillLi" id="SiVisualstudioFB"> <a><i className="fa" ><SiVisualstudio/></i></a></li>, 
    "Codepen" : <li className="skillLi" id="FaCodepenFB"> <a><i className="fa" ><FaCodepen/></i></a></li>, 
    "Slack" : <li className="skillLi" id="FaSlackFB"> <a><i className="fa" ><FaSlack/></i></a></li>, 
    "Trello" : <li className="skillLi" id="FaTrelloFB"> <a><i className="fa" ><FaTrello/></i></a></li>, 
    "Adobeaftereffects" : <li className="skillLi" id="SiAdobeaftereffectsFB"> <a><i className="fa" ><SiAdobeaftereffects/></i></a></li>, 
    "Adobecreativecloud" : <li className="skillLi" id="SiAdobecreativecloudFB"> <a><i className="fa" ><SiAdobecreativecloud/></i></a></li>,
    "Adobelightroomclassic" : <li className="skillLi" id="SiAdobelightroomclassicFB"> <a><i className="fa" ><SiAdobelightroomclassic/></i></a></li>,
    "Adobephotoshop" : <li className="skillLi" id="SiAdobephotoshopFB"> <a><i className="fa" ><SiAdobephotoshop/></i></a></li>,
    "Adobexd" : <li className="skillLi" id="SiAdobexdFB"> <a><i className="fa" ><SiAdobexd/></i></a></li>,
    "Adobe" : <li className="skillLi" id="SiAdobeFB"> <a><i className="fa" ><SiAdobe/></i></a></li>,
    "Notion" : <li className="skillLi" id="SiNotionFB"> <a><i className="fa" ><SiNotion/></i></a></li>,
    "Airtable" : <li className="skillLi" id="SiAirtableFB"> <a><i className="fa" ><SiAirtable/></i></a></li>,
    "Heroku" : <li className="skillLi" id="DiHerokuFB"> <a><i className="fa" ><DiHeroku/></i></a></li>
}

    const getProjectLanguages = () => {
        let language = props.language
        let ul = []
        for(let i=0; i<language.length; i++){
            Object.entries(languages).forEach(
                ([key, value]) => {
                    console.log(key, value)
                    if(key == language[i]){
                        ul.push(value)
                    }
                }
            )
        }
        console.log(`UL: `,ul)
        return ul
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
                        <ul className="social-icons icon-circle icon-spin list-unstyled list-inline" id="floatBoxSkillList"> 
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