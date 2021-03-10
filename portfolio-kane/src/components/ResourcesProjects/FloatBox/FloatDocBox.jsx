import React, {Component, setState} from "react";
import Carousel from "../../Carousel/Carousel"

const FloatDocBox =(props) => {

    // const setActive = () => {
    //     {!this.state.active ?
    //         this.setState(state => (
    //             {active: !this.state.active}
    //         ))
    //     :
    //         this.setState(
    //             {active: false}
    //         )
    //     }
    // };

    const stopAnimation= () => {
        let resumeAnima = document.getElementsByClassName("promo")
        return resumeAnima.style={animationPlayState: "paused"} 
    }

    return(
        <div className="wrapperFloatDocBox" onClick={props.setActive}>
            <div className="floatDocBox" onClick={(e) => e.stopPropagation()} onMouseOver={stopAnimation()}>
                <div className="resourceDiv" id={props.name+'ParentDiv'} >
                    <h3 className="resourceCategory">{props.category}</h3>
                    <h2 className="resourceName">{props.print}</h2>
                    {/* <h2 className="resourceName">{props.print}</h2> */}
                    <div className="responsiveIframe">
                        <iframe id={props.name+'iframe'} className="iframeResize" title={props.name} src={props.iframe} width="560" height="315" frameBorder="0" allowFullScreen></iframe>
                    </div>
                    <h6 className="iframeDescription">
                        {props.description1}<br/>
                        {props.description2}<br/>
                        {props.description3}
                    </h6>
                    <img id={props.name+'Emblem'} className="resourceEmblem" src={props.emblem} alt={props.emblem+' emblem'}/>
                    <img id={props.name+'Logo'} className="resourceLogo" src={props.logo} alt={props.logo+' logo'}/>
                </div>
            </div>
        </div>
    )
}

export default FloatDocBox;