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
                        <a href={props.github}><p>{props.github}</p></a>
                    </div>
                    <div className="projectDescription"><p >{props.description}</p></div>
                    <div className="projectMore">MORE</div>
                    <div className="projectGallery">
                        <div className="projectPhotos"><Carousel gallery={props.gallery}/></div>
                        <div className="projectCode">Code Photos</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatBox;