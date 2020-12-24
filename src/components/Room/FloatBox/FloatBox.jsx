import React, {Component, setState} from "react";
import Carousel from "../Carousel"

const FloatBox =(props) => {

    return(
        <div className="wrapperFloatBox" onClick={props.setActive}>
            <div className="floatBox" onClick={(e) => e.stopPropagation()}>
                <div className="projectContainer animate">
                    <div className="projectNameLogo activeProject">
                        <img className="projectLogoActive" src={props.logo} alt={props.name + "logo"} style={props.style}/>
                        <h3 className="projectName">{props.name}</h3>
                    </div>
                    <div className="projectDescription"><p >{props.description}</p></div>
                    <div className="projectMore">MORE</div>
                    <div className="projectGallery">
                        <div className="projectPhotos"><Carousel gallery={props.gallery}/></div>
                    </div>
                    <div>
                        <div className="projectCode">
                            <div className="responsiveIframeProject">
                                <a href={props.github} className="githubProject"><p>{props.github}</p></a>
                                <iframe src={props.github} className="githubIFrame"></iframe>

                                {props.github2 ?
                                    <>
                                        <a href={props.github2} className="githubProject2"><p>{props.github2}</p></a>
                                        <iframe src={props.github2} className="githubIFrame2"></iframe>
                                    </>
                                :[]}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatBox;