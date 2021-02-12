import React, { Component } from "react";
import {TiArrowBackOutline} from "react-icons/ti";
import {GrClose} from "react-icons/gr";

class RecentPostText extends Component {

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

    render(){
        return (
            <>
            {this.state.active ?                   
                <>
                    {/* <div onClick={this.setActive} > */}
                    <div >

                    <div id="recPostEnlarged">
                        
                        <section id="recPostHeader">
                            <a><i id="recPostBackArrow" className="float-left" onClick={this.setActive}><TiArrowBackOutline/> </i></a>
                            <p id="activeTitle">{this.props.title}</p>
                        </section>
                        <div className="recPostBody">
                            <section className="recPostSection">
                                <p className="blogP1">{this.props.blogP1}</p>
                                <p className="blogP2">{this.props.blogP2}</p>
                                <p className="blogP3">{this.props.blogP3}</p>
                                <p className="blogP4">{this.props.blogP4}</p>
                                <p className="blogP5">{this.props.blogP5}</p>
                                <p className="blogP6">{this.props.blogP6}</p>
                                <p className="blogP7">{this.props.blogP7}</p>
                                <p className="blogP8">{this.props.blogP8}</p>
                                <p className="blogP9">{this.props.blogP9}</p>
                                <p className="blogP10">{this.props.blogP10}</p>
                                <p className="blogP11">{this.props.blogP11}</p>
                                <p className="blogP12">{this.props.blogP12}</p>
                                <p className="blogP13">{this.props.blogP13}</p>
                                <p className="blogP14">{this.props.blogP14}</p>
                                <p className="blogP15">{this.props.blogP15}</p>
                                <p className="blogP16">{this.props.blogP16}</p>
                                <p className="blogP17">{this.props.blogP17}</p>
                                <p className="blogP18">{this.props.blogP18}</p>
                                <p className="blogP19">{this.props.blogP19}</p>
                                <p className="blogP20">{this.props.blogP20}</p>
                            </section>
                            
                            <div className="image-wrapper">
                                <img src={this.props.imgSrc} className="activeRecPostImg" alt={this.props.imgDesc}/>
                            </div>
                        </div>
                        <a><i id="recPostClose" className="float-right" onClick={this.setActive}><GrClose/></i></a>
                    </div>
                </div>

                    {/* <div className="recPostBox">
                        <img src={this.props.imgSrc} className="recPostImg" alt={this.props.imgDesc}/>
                        <div className="recPostTitle" ><span>{this.props.title}</span></div>
                    </div> */}
                </>
                :
                <div className="recPostBox" onClick={this.setActive}>
                    <img src={this.props.imgSrc} className="recPostImg" alt={this.props.imgDesc}/>
                    {/* <div className="recPostTitle" ><span>{this.props.title}</span></div> */}
                </div>
                }
            </> 
        )
    }
}

export default RecentPostText;