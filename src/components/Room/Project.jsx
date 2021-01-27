import React, {Component, setState} from "react";
import FloatBox from "./FloatBox/FloatBox"

import "./project.css"

import {RiGroup2Fill} from 'react-icons/ri';
import {BsPerson} from 'react-icons/bs';


class Project extends Component {
    state = {
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

    getImage = () => {
        let stockImage = this.props.stockImg
    }
    

    render() {
        return(
            
            <div>
                <div className="wrapper" onClick={this.setActive} style={{"background-image": "url("+this.getImage()+")"}}>
                    <div className="projectCard card" >
                        <div className="header">
                            <div className="date">
                                <span className="yearInit">2020 - </span>
                                <span className="yearEnd">2021</span>
                                <span className="stack"></span>
                            </div>
                            <div className="image-wrapper">
                                <img src={this.props.stockImg} alt="inspirational work quote"/>
                            </div>
                            <ul className="menuContent">
                                <li>
                                    {this.props.stack == "solo" ?
                                    <a href="#" className="fa "><BsPerson/>{this.props.stack}</a>
                                    :
                                    <a href="#" className="fa "><RiGroup2Fill/>{this.props.stack}</a>
                                }
                                </li>
                                {/* <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li> */}
                                {/* <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li> */}
                            </ul>

                            <img className="projectLogoInactive" id={this.props.name} src={this.props.logo} alt={this.props.name + "logo"} style={this.props.style}/>
                        </div>
                        <div className="data">
                            <div className="projectCardContent">
                                <span className="author">Liz Kane</span>
                                <h4 className="projectCardTitle"><a href="#">{this.props.name}</a></h4>
                                <p className="projectCardText" >{this.props.github}</p>
                                <a href="#" className="button">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

                
                
                
                {/* <div className={this.state.visited ? "visitedProject droppable inactiveProject" : "inactiveProject"} onClick={this.setActive}>
                        <img className="projectLogoInactive" id={this.props.name} src={this.props.logo} alt={this.props.name + "logo"} style={this.props.style}/>
                </div> */}







                {this.state.active &&
                <>
                <FloatBox logo={this.props.logo} name={this.props.name} description={this.props.description} github={this.props.github} github2={this.props.github2} gist={this.props.gist} gallery={this.props.gallery} style={this.props.style} setActive={this.setActive}/>
                </>
                }
            </div>
        )}
}

export default Project;