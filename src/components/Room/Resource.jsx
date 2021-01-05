import { render } from "@testing-library/react";
import React, {Component, setState} from "react";
import iframe from 'react-iframe';
import Iframe from 'react-iframe';
import iFrameResize from 'iframe-resizer'


import Header from "../Header/Header";
import FloatDocBox from "./FloatBox/FloatDocBox";

import BachelorsDegree from "./UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf"
import BachelorsDoc from "./Docs/BachelorsDoc"

import MastersDegree from "./UploadPhotosToWeb/docs/MastersDegree.pdf"
import MastersDoc from "./Docs/MastersDoc"

import GACertificate from "./UploadPhotosToWeb/docs/GA-Certificate.pdf"
import GACert from "./Docs/GACertDoc"

import Resume from "./UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf"
import ResumeDoc from "./Docs/ResumeDoc"

class Resource extends Component {
    state={
        active: false,
        visited: false,
    }
    
    setActive = () => {
        {!this.state.active ?
            this.setState(state => (
                {active: !this.state.active}
            ))
        :
            this.setState(
                {active: false}
            )
        }
    };

    setVisited = () => {
        {!this.state.visited ?
            this.setState(
                {visited: !this.state.visited})
        :
            this.setState(
                {visited: false})
        }
    }
    
    
    
    render(){
        // iFrameResize = () =>{({ log: true}, '.iframeResize')}
        // <iframe id={this.props.name+'iframe'} title={this.props.name} src={this.props.src} width="560" height="315" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        return(
            <>
                <div className="ResourceListComponent">
                    {this.props.name == 'Curriculum Vitae' ? 
                        // <h2 className="resourceName">Resume</h2>
                        <h5 onClick={this.setActive} className="docName">Resume</h5>
                        :
                        // <h2 className="resourceName">{props.name}</h2>
                        <h5 onClick={this.setActive} className="docName">{this.props.name}</h5>
                    }


                </div>
                {this.state.active &&
                <>
                <FloatDocBox name={this.props.name} print={this.props.print} category={this.props.category} iframe={this.props.iframe} description1={this.props.description1} description2={this.props.description2} description3={this.props.description3} emblem={this.props.emblem} logo={this.props.logo} setActive={this.setActive}/>
                </>
                }
            </>
        )
    }
}

export default Resource;