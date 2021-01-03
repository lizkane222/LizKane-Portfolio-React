// EXTERNAL IMPORTS
import React from "react";
// import iFrameResize from 'iframe-resizer'

// INTERNAL IMPORTS
import Resource from "./Resource";

// CHILD COMPONENT IMPORTS
import BachelorsDegree from "./UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf"
import MastersDegree from "./UploadPhotosToWeb/docs/MastersDegree.pdf"
import NAULogo from "./UploadPhotosToWeb/docs/nauLogo.png"
import NAUEmblem from "./UploadPhotosToWeb/docs/nauEmblem.png"
import GACertificate from "./UploadPhotosToWeb/docs/GA-Certificate.pdf"
import GALogo from "./UploadPhotosToWeb/docs/gaLogo.png"
import GAEmblem from "./UploadPhotosToWeb/docs/gaEmblem.png"
import Resume from "./UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf"
import LizLogo from "./UploadPhotosToWeb/docs/seekLogo@4x.png"
import LizPortrait from "./UploadPhotosToWeb/docs/LizKanePortrait.png"
// import  from ""
// import  from ""
// import  from ""
// import  from ""

 
const ResourceList = () => {
    const resourceArray = [
        {name: "GACertificate", iframe: GACertificate, document: "./UploadPhotosToWeb/docs/GA-Certificate.pdf", src:"file:///Users/lizkane/Desktop/GA/SEI/Projects/2ReactPortfolio/portfolio-app-2/src/components/Room/UploadPhotosToWeb/docs/GA-Certificate.pdf", description1: "Software Engineering Immersive", description3:"Aug-Nov 2020", description2:"Full-Stack", emblem: GAEmblem, logo: GALogo, category: "Education"},
        {name: "MastersDegree", iframe: MastersDegree, document: "./UploadPhotosToWeb/docs/MastersDegree.pdf", src:"https://drive.google.com/file/d/1JwA747dDB8VXBDwAIENon5iVt3EQIErr/view?usp=sharing", description3: "2013-2015", description1:"MA of Education- Bilingual & Multicultural Education", description2:"Edorsement: ESL", emblem: NAUEmblem, logo: NAULogo, category: "Education"},
        {name: "BachelorsDegree", iframe: BachelorsDegree, document: "./UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf", src:"https://drive.google.com/file/d/1wARDuJk3wWeDnLU8K_ADZl5FIwlOd-qq/view?usp=sharing",  description3: "2009-2013", description1:"BA in Psychology", description2:"Minor in French", emblem: NAUEmblem, logo: NAULogo, category: "Education"},
        {name: "CV", iframe: Resume, document: "./UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf", src:"file:///Users/lizkane/Desktop/GA/SEI/Projects/2ReactPortfolio/portfolio-app-2/src/components/Room/UploadPhotosToWeb/docs/Liz_Kane_Resume.pdf", description1:"Full Stack", description2:"Software Engineer", emblem: LizPortrait, logo: LizLogo, category: "Resume"},
    ]
    // const projectItems = projectArray.map(project => {return <Project name={project.name} logo={project.logo} description={project.proDescription} github={project.github} gallery={project.proGallery} style={{"left":project.x+"px", "top":project.y+"px", "width":project.width+"px", "zindex":project.zindex, "id":project.proId}}/>})

    const resourceItems = resourceArray.map(resource => {return <Resource name={resource.name} description1={resource.description1} description2={resource.description2} description3={resource.description3} iframe={resource.iframe} emblem={resource.emblem} logo={resource.logo} category={resource.category}/>
    })

    

    return(
        <div >
            {resourceItems}
        </div>
    )
}

export default ResourceList;