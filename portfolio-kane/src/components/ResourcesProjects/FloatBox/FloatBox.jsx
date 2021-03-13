import React, {Component, setState, useState} from "react";
// import ReactEmbedGist from 'react-embed-gist';
import Gist from 'super-react-gist';

import Carousel from "../../Carousel/Carousel"

import {FaBootstrap, FaReact, FaGithub, FaGitAlt, FaNodeJs, FaCodepen, FaHtml5, FaNpm, FaPython, FaSlack, FaTrello, } from 'react-icons/fa';
import {SiTypescript, SiJavascript, SiAdobeaftereffects, SiAtom, SiBabel, SiCss3, SiMongodb, SiFirebase, SiAdobecreativecloud, SiAdobelightroomclassic, SiAdobephotoshop, SiAdobexd, SiAdobe, SiMysql, SiPostgresql, SiVisualstudio, SiNotion, SiAirtable, } from 'react-icons/si';
import {DiDjango, DiHeroku, DiJqueryLogo, DiSass, DiMaterializecss, } from 'react-icons/di';

const FloatBox =(props) => {
    const [iconText, setIconText] = useState(" ");
    
    const showName = (e) => {
        let name = e.target.id.toString();
        setIconText(iconText => iconText = name);
    }


    let languages = {
        // <label for="backfaces" className="invisibleIcon"  onMouseOver={showIconText}>
    "React" : <li  className="skillLi"><a><i className="fa" ><FaReact id="React" onMouseOver={showName} /></i></a> </li>, 
    "Javascript" : <li  className="skillLi"><a><i className="fa" ><SiJavascript id="Javascript" onMouseOver={showName} /></i></a> </li>,
    "Django" : <li  className="skillLi"> <a><i className="fa" ><DiDjango id="Django" onMouseOver={showName} /></i></a> </li>,
    "Css3" : <li  className="skillLi"> <a><i className="fa" ><SiCss3 id="Css3" onMouseOver={showName} /></i></a> </li>, 
    "Atom" : <li  className="skillLi"> <a><i className="fa" ><SiAtom id="Atom" onMouseOver={showName} /></i></a> </li>, 
    "Sass" : <li  className="skillLi"> <a><i className="fa" ><DiSass id="Sass" onMouseOver={showName} /></i></a> </li>, 
    "Html5" : <li  className="skillLi"> <a><i className="fa" ><FaHtml5 id="Html5" onMouseOver={showName} /></i></a></li>, 
    "Python" : <li  className="skillLi"> <a><i className="fa" ><FaPython id="Python" onMouseOver={showName} /></i></a></li>, 
    "Mongodb" : <li  className="skillLi"> <a><i className="fa" ><SiMongodb id="Mongodb" onMouseOver={showName} /></i></a></li>, 
    "Mysql" : <li  className="skillLi"> <a><i className="fa" ><SiMysql id="Mysql" onMouseOver={showName} /></i></a></li>, 
    "Postgresql" : <li  className="skillLi"> <a><i className="fa" ><SiPostgresql id="Postgresql" onMouseOver={showName} /></i></a></li>, 
    "Jquery" : <li  className="skillLi"> <a><i className="fa" ><DiJqueryLogo id="Jquery" onMouseOver={showName} /></i></a></li>, 
    "Typescript" : <li  className="skillLi"> <a><i className="fa" ><SiTypescript id="Typescript" onMouseOver={showName} /></i></a></li>, 
    "Github" : <li  className="skillLi"> <a><i className="fa" ><FaGithub id="Github" onMouseOver={showName} /></i></a></li>, 
    "Bootstrap" : <li  className="skillLi"> <a><i className="fa" ><FaBootstrap id="Bootstrap" onMouseOver={showName} /></i></a></li>, 
    "Git" : <li  className="skillLi"> <a><i className="fa" ><FaGitAlt id="Git" onMouseOver={showName} /></i></a></li>, 
    "Materializecss" : <li  className="skillLi"> <a><i className="fa" ><DiMaterializecss id="Materializecss" onMouseOver={showName} /></i></a></li>, 
    "NodeJs" : <li  className="skillLi"> <a><i className="fa" ><FaNodeJs id="NodeJs" onMouseOver={showName} /></i></a></li>, 
    "Npm" : <li  className="skillLi"> <a><i className="fa" ><FaNpm id="Npm" onMouseOver={showName} /></i></a></li>, 
    "Babel" : <li  className="skillLi"> <a><i className="fa" ><SiBabel id="Babel" onMouseOver={showName} /></i></a></li>, 
    "Firebase" : <li  className="skillLi"> <a><i className="fa" ><SiFirebase id="Firebase" onMouseOver={showName} /></i></a></li>, 
    "Visualstudio" : <li  className="skillLi"> <a><i className="fa" ><SiVisualstudio id="Visualstudio" onMouseOver={showName} /></i></a></li>, 
    "Codepen" : <li  className="skillLi"> <a><i className="fa" ><FaCodepen id="Codepen" onMouseOver={showName} /></i></a></li>, 
    "Slack" : <li  className="skillLi"> <a><i className="fa" ><FaSlack id="Slack" onMouseOver={showName} /></i></a></li>, 
    "Trello" : <li  className="skillLi"> <a><i className="fa" ><FaTrello id="Trello" onMouseOver={showName} /></i></a></li>, 
    "Adobeaftereffects" : <li  className="skillLi"> <a><i className="fa" ><SiAdobeaftereffects id="Adobeaftereffects" onMouseOver={showName} /></i></a></li>, 
    "Adobecreativecloud" : <li  className="skillLi"> <a><i className="fa" ><SiAdobecreativecloud id="Adobecreativecloud" onMouseOver={showName} /></i></a></li>,
    "Adobelightroomclassic" : <li  className="skillLi"> <a><i className="fa" ><SiAdobelightroomclassic id="Adobelightroomclassic" onMouseOver={showName} /></i></a></li>,
    "Adobephotoshop" : <li  className="skillLi"> <a><i className="fa" ><SiAdobephotoshop id="Adobephotoshop" onMouseOver={showName} /></i></a></li>,
    "Adobexd" : <li  className="skillLi"> <a><i className="fa" ><SiAdobexd id="Adobexd" onMouseOver={showName} /></i></a></li>,
    "Adobe" : <li  className="skillLi"> <a><i className="fa" ><SiAdobe id="Adobe" onMouseOver={showName} /></i></a></li>,
    "Notion" : <li  className="skillLi"> <a><i className="fa" ><SiNotion id="Notion" onMouseOver={showName} /></i></a></li>,
    "Airtable" : <li  className="skillLi"> <a><i className="fa" ><SiAirtable id="Airtable" onMouseOver={showName} /></i></a></li>,
    "Heroku" : <li  className="skillLi"> <a><i className="fa" ><DiHeroku id="Heroku" onMouseOver={showName} /></i></a></li>,
    // "Heroku" : <li id="Heroku" className="skillLi"  onMouseOver={showName(e.exist())? showName((e)=>e):[]}> <a><i className="fa" ><DiHeroku/></i></a></li>
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
        <>
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
                                        <a href={props.github} target="_blank" rel="noreferrer" className="githubProject float-right"><p id="githubProject1">{props.github}</p></a>
                                        <a href={props.github2} target="_blank" rel="noreferrer" className="githubProject githubProject2 float-right"><p id="githubProject2">{props.github2}</p></a>
                                    </>
                                :
                                <>
                                        <a href={props.github} target="_blank" rel="noreferrer" className="githubProject"><p id="githubProject1">{props.github}</p></a>
                                    </>
                        }
                    </div>
                    <div className="languageIconTextContainer">
                        <p className="languageIconText">{iconText}</p>
                    </div>
                </div>
            </div>
        </div>
            </>
    )
}

export default FloatBox;