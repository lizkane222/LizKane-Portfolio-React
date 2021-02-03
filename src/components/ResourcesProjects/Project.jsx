import React, {Component, setState} from "react";
import FloatBox from "./FloatBox/FloatBox"



import {RiGroup2Fill} from 'react-icons/ri';
import {BsPerson} from 'react-icons/bs';
import {FaBookmark, FaUserCircle} from 'react-icons/fa';
import {AiOutlineFundProjectionScreen} from 'react-icons/ai';


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
        // return style={{"background-image": "url("+this.stockImage+")"}}
        backgroundImage: URL("{{stockImage}}")
    }
    // style={{"background-image": "url("+this.getImage()+")"}}

    render() {
        return(
            
            <>
                {/* <div className="wrapper" onClick={this.setActive} >
                    <div className="projectCard card" >
                        <div className="image-wrapper" getImage>
                        <div className="header">
                            <div className="date">
                                <span className="yearInit">2020 - </span>
                                <span className="yearEnd">2021</span>
                                <span className="stack"></span>
                            </div>
                                <img src={this.props.stockImg} />
                            
                            <ul className="menuContent">
                                <li className="group">
                                    {this.props.stack === "solo" ?
                                    <a href="#" className="fa "><{BsPerson}/>{this.props.stack}</a>
                                    :
                                    <a href="#" className="fa "><{RiGroup2Fill}/>{this.props.stack}</a>
                                    }
                                </li>
                            </ul>
                            <img className="projectLogoInactive" id={this.props.name} src={this.props.logo} alt={this.props.name + "logo"} style={this.props.style}/>
                            </div>
                        </div>
                        <div className="data">
                            <div className="projectCardContent">
                                <span className="author">Liz Kane</span>
                                <h4 className="projectCardTitle"><a href="#">{this.props.name}</a></h4>
                                <p className="projectCardText" >{this.props.github}</p>
                                <a href="#" className="projectButton">Check it out</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className="card projectCard" id="'projectCard'+{{this.props.name}}" onClick={this.setActive}>
                    <div className="wrapper">
                        <div className="projectHeader">
                            <div className="leftTop">
                                <span className="yearInit">2020 - </span>
                                <span className="yearEnd">2021</span>
                            </div>

                            <ul className="menuContent">
                                <li className="rightTop">
                                    <p className="fa rightTopIcons"><AiOutlineFundProjectionScreen/></p>
                                    {/* <p className="fa rightTopIcons"><span>{this.props.group}</span><AiOutlineFundProjectionScreen/></p> */}

                                    {this.props.group === "solo" ?
                                        <p className="fa rightTopIcons" ><span>{this.props.stack}</span><FaUserCircle size={28}/></p>
                                    :
                                        <p className="ri rightTopIcons" ><span>{this.props.stack}</span><RiGroup2Fill size={33}/></p>
                                    }
                                </li>
                            </ul>

                        <div class="logoContainer">
                            <img id={this.props.name+`InactiveImg`} src={this.props.logo} alt={this.props.name + "logo"} style={this.props.style}/>
                        </div>
                        </div>

                        <div className="data">
                            <div className="hiddenContent">
                                <p className="projectCardTitle"><p>{this.props.name}</p></p>
                                <p className="text">{this.props.descReduced}</p>
                                <a className="projectButton">check it out</a>
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
            </>
        )}
}

export default Project;