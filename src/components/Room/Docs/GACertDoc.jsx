// EXTERNAL IMPORTS
import React from "react";
// import iFrameResize from 'iframe-resizer'

// INTERNAL IMPORTS
import Resource from "../Resource";

// CHILD COMPONENT IMPORTS
import GACertificate from "../UploadPhotosToWeb/docs/GA-Certificate.pdf";
import GALogo from "../UploadPhotosToWeb/docs/gaLogo.png";
import GAEmblem from "../UploadPhotosToWeb/docs/gaEmblem.png";
// import  from ""


 
const GACertDoc = () => {
    const resourceArray = [
        {name: "GACertificate", iframe: GACertificate, document: "./UploadPhotosToWeb/docs/GA-Certificate.pdf", src:"file:///Users/lizkane/Desktop/GA/SEI/Projects/2ReactPortfolio/portfolio-app-2/src/components/Room/UploadPhotosToWeb/docs/GA-Certificate.pdf", description1: "Software Engineering Immersive", description3:"Aug-Nov 2020", description2:"Full-Stack", emblem: GAEmblem, logo: GALogo, category: "Education"},
    ]

    const resourceItem = resourceArray.map(resource => {return <Resource name={resource.name} description1={resource.description1} description2={resource.description2} description3={resource.description3} iframe={resource.iframe} emblem={resource.emblem} logo={resource.logo} category={resource.category}/>
    })

    
    return(
        <div >
            {resourceItem}
        </div>
    )
}

export default GACertDoc;