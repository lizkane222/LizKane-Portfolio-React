import { render } from "@testing-library/react";
import React, {Component} from "react";
import iframe from 'react-iframe';
import Iframe from 'react-iframe';


import Header from "../Header/Header";

import BachelorsDegree from "./UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf"

import MastersDegree from "./UploadPhotosToWeb/docs/MastersDegree.pdf"

import GACertificate from "./UploadPhotosToWeb/docs/GA-Certificate.pdf"

import Resume from "./UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf"


class Resource extends Component {
    state={
        active: true,
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
        return(
            <>
                {this.state.active ? 

<div className="resourceDiv" id={this.props.name+'ParentDiv'}>
    <div className="responsiveIframe">
    <iframe id={this.props.name+'iframe'} title={this.props.name} src={this.props.src} width="80%" height="60%" allow="fullscreen"
    ></iframe>
    </div>
    <h6 class="iframeDescription">{this.props.description}</h6>
    <img id={this.props.name+'Emblem'} className="resourceEmblem" src={this.props.emblem} alt={this.props.emblem+' emblem'}/>
    <img id={this.props.name+'Logo'} className="resourceLogo" src={this.props.logo} alt={this.props.logo+' logo'}/>
</div>
                    :
                <div>
                    {/* {this.props.category == } */}
                    <h3 onClick={this.setActive}>{this.props.name}{this.props.category}</h3>
                </div>
                    }
            </>
        )
    }
}

export default Resource;