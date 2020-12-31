// EXTERNAL IMPORTS
import React from "react";
// import iFrameResize from 'iframe-resizer'

// INTERNAL IMPORTS
import Resource from "../Resource";

// CHILD COMPONENT IMPORTS
// import BachelorsDegree from "./UploadPhotosToWeb/docs/bachelors-undergrad-psychdegree-diploma.pdf"
import MastersDegree from "../UploadPhotosToWeb/docs/MastersDegree.pdf"
import NAULogo from "../UploadPhotosToWeb/docs/nauLogo.png"
import NAUEmblem from "../UploadPhotosToWeb/docs/nauEmblem.png"
// import  from ""

 
const MastersDoc = () => {
    const resourceArray = [
        {name: "MastersDegree", iframe: MastersDegree, document: "./UploadPhotosToWeb/docs/MastersDegree.pdf", src:"https://drive.google.com/file/d/1JwA747dDB8VXBDwAIENon5iVt3EQIErr/view?usp=sharing", description3: "2013-2015", description1:"MA of Education- Bilingual & Multicultural Education", description2:"Edorsement: ESL", emblem: NAUEmblem, logo: NAULogo, category: "Education"},
    ]

    const resourceItem = resourceArray.map(resource => {return <Resource name={resource.name} description1={resource.description1} description2={resource.description2} description3={resource.description3} iframe={resource.iframe} emblem={resource.emblem} logo={resource.logo} category={resource.category}/>
    })

    

    return(
        <div >
            {resourceItem}
        </div>
    )
}

export default MastersDoc;