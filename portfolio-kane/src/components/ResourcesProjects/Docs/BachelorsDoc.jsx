// EXTERNAL IMPORTS
import React from "react";
// import iFrameResize from 'iframe-resizer'

// INTERNAL IMPORTS
import Resource from "../Resource";

// CHILD COMPONENT IMPORTS
import BachelorsDegree from "../UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf"
import NAULogo from "../UploadPhotosToWeb/docs/nauLogo.png"
import NAUEmblem from "../UploadPhotosToWeb/docs/nauEmblem.png"
// import  from ""

 
const BachelorsDoc = () => {
    const resourceArray = [
        {name: "BachelorsDegree", print:"Bachelors Degree", print2:"Bachelors of Psychology", iframe: BachelorsDegree, document: "./UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf", src:"https://drive.google.com/file/d/1wARDuJk3wWeDnLU8K_ADZl5FIwlOd-qq/view?usp=sharing",  description3: "2009-2013", description1:"Bachelor of Arts in Psychology", description2:"Minor in French", emblem: NAUEmblem, logo: NAULogo, category: "Education"},
    ]

    const resourceItem = resourceArray.map(resource => {return <Resource key={resource.name} name={resource.name} print={resource.print} print2={resource.print2} description1={resource.description1} description2={resource.description2} description3={resource.description3} iframe={resource.iframe} emblem={resource.emblem} logo={resource.logo} category={resource.category}/>
    })

    return(
        <div >
            {resourceItem}
        </div>
    )
}

export default BachelorsDoc;