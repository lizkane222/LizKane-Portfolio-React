import React, {Component, setState} from "react";
// import ReactEmbedGist from 'react-embed-gist';
// import Gist from 'super-react-gist';
import InterestsCarousel from "../Carousel/InterestsCarousel";
import BlogList from "../Blog/BlogList";



const FloatBlogBox =(props) => {

    return(
        // <div className="wrapperFloatBlogBox" onClick={this.props.setActive}>
        //     <div className="floatBlogBox" onClick={(e) => e.stopPropagation()}>
        //         <div className="blogContainer animate">                    
                    
        <div className="wrapperFloatBlogBox" onClick={props.toggleBlogIsOn}>
            <div className="floatBlogBox" onClick={(e) => e.stopPropagation()}>
                <div className="blogContainer animate">                    
                    
                <BlogList />    
                    
                    
                    
                    
                    
                    {/* <img src={this.props.imgSrc} className="blogImgActive" alt={this.props.imgDesc}/>
                    <div className="blogTitleActive"><span>{this.props.title}</span></div>
                            
                    <section className="blogSection">
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
                    </section> */}
                </div>
            </div>
        </div>
    )
}

export default FloatBlogBox;