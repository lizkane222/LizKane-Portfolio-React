import React, { Component } from "react";
import {Link} from 'react-scroll';
// import BlogPostContainer from "./BlogPostContainer";
// import { useToggle} from "react-use";
// import FloatBlogBox from "./FloatBlogBox";
import {TiArrowBackOutline} from "react-icons/ti";
import {GrClose} from "react-icons/gr";

class BlogPost extends Component {

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
        let Background = this.props.imgSrc
    
        let sectionStyle = {
            backgroundImage: "url("+ Background + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // opacity: "0.2"
            // filter: "brightness(110%)"
            // filter: "grayscale(90%)"
        }

        let bodyOpacity = {
            backgroundColor: "rgba(250,250,250,.8)",
            // filter: "brightness(120%)",
            // opacity: ".5"
        }

        let noDecor = {
            textDecoration: "none;"
        }

        return (
            <>
                {this.state.active ?                   
                <>
                    <div onClick={this.setActive}>

                        <div id="postEnlarged" style={ sectionStyle } onClick={(e) => e.stopPropagation()}>
                            
                            <section id="postHeader">
                                <a><i id="postBackArrow" className="float-left" onClick={this.setActive}><TiArrowBackOutline/> </i></a>
                                <p id={`activeTitle+${this.props.title}`} className="activeTitle">{this.props.title}</p>
                            </section>
                            <div className="blogBody" style={bodyOpacity} >
                                <section className="blogSection">
                                    <p className="blogP1">{this.props.blogP1}</p>
                                {this.props.index === 0 ? 
                                <>
                                    <p className="blogP2 centerText">{this.props.blogP2}</p>
                                    <p className="blogP3 centerText">{this.props.blogP3}</p>
                                    <p className="blogP4 centerText">{this.props.blogP4}</p>
                                    <p className="blogP5 centerText">{this.props.blogP5}</p>
                                    <p className="blogP6 centerText">{this.props.blogP6}</p>
                                    <p className="blogP7 centerText">{this.props.blogP7}</p>
                                    <p className="blogP8 centerText">{this.props.blogP8}</p>
                                    <p className="blogP9 centerText">{this.props.blogP9}</p>
                                    <p className="blogP10 centerText">{this.props.blogP10}</p>
                                    <p className="blogP11 centerText">{this.props.blogP11}</p>
                                </>
                                :
                                <>
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
                                </>
                                }  
                                    <p className="blogP12">{this.props.blogP12}</p>
                                    <p className="blogP13">{this.props.blogP13}</p>
                                    <p className="blogP14">{this.props.blogP14}</p>
                                    <p className="blogP15">{this.props.blogP15}</p>
                                    <p className="blogP16">{this.props.blogP16}</p>
                                    <p className="blogP17">{this.props.blogP17}</p>
                                {this.props.index === 0 ? 
                                    <p className="blogP18 signature" >{this.props.blogP18}</p>
                                :
                                    <p className="blogP18">{this.props.blogP18}</p>
                                }
                                    <p className="blogP19">{this.props.blogP19}</p>
                                    <p className="blogP20">{this.props.blogP20}</p>
                                </section>
                                
                                {/* <div className="image-wrapper">
                                    <img src={this.props.imgSrc} className="activeBlogImg" alt={this.props.imgDesc}/>
                                </div> */}
                            </div>
                            <a><i id="postClose" className="float-right" onClick={this.setActive}><GrClose/></i></a>
                        </div>
                    </div>
                
                    <div className="blogBox">
                        <div className="blogBoxLink">
                            <img src={this.props.imgSrc} className="blogImg" alt={this.props.imgDesc}/>
                            <div className="blogTitle" style={noDecor} ><span style={noDecor}>{this.props.title}</span></div>
                        </div>
                    </div>
                </>
                :
                    <div className="blogBox" >
                        <Link to={`activeTitle+${this.props.title}`} spy={true} smooth={true} duration={1000} style={noDecor} className="blogBoxLink" onClick={this.setActive}>
                            <img src={this.props.imgSrc} className="blogImg" alt={this.props.imgDesc}/>
                            <div className="blogTitle" style={noDecor}><span style={noDecor}>{this.props.title}</span></div>
                        </Link>
                    </div>
                }
            </> 
        )
    }
}

export default BlogPost;