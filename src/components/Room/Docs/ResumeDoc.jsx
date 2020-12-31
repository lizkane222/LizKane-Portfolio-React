// EXTERNAL IMPORTS
import React from "react";
// import iFrameResize from 'iframe-resizer'

// INTERNAL IMPORTS
import Resource from "../Resource";

// CHILD COMPONENT IMPORTS
import Resume from "../UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf"
import LizLogo from "../UploadPhotosToWeb/docs/seekLogo@4x.png"
import LizPortrait from "../UploadPhotosToWeb/docs/LizKanePortrait.png"
// import  from ""

 
const ResumeDoc = () => {
    const resourceArray = [
        {name: "Resume", iframe: Resume, document: "./UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf", src:"file:///Users/lizkane/Desktop/GA/SEI/Projects/2ReactPortfolio/portfolio-app-2/src/components/Room/UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf", description2:"Full Stack", description1:"Software Engineer", emblem: LizPortrait, logo: LizLogo, category: "Resume"},
    ]

    const resourceItem = resourceArray.map(resource => {return <Resource name={resource.name} description1={resource.description1} description2={resource.description2} description3={resource.description3} iframe={resource.iframe} emblem={resource.emblem} logo={resource.logo} category={resource.category}/>
    })

    

    return(
        <div>
            {resourceItem}
        </div>
    )
}

export default ResumeDoc;