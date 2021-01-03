import React from "react";


// import ProjectList from "./ProjectList";
import ProjectList from "../components/Room/ProjectList";

import Obsessions from "../components/Room/UploadPhotosToWeb/docs/obsessions.png";

import TeamWork from "../components/Room/UploadPhotosToWeb/docs/teamWork.png";





const ProjectsPage=() => {
    return(
        <div>
        <ProjectList/>
            <div className="redbox">
                <img src={TeamWork} alt="" id="teamWorkImg" className="thematicImg responsive-img"/>
            </div>
            <div className="redbox">
                <img src={Obsessions} alt="" id="obessionsImg" className="thematicImg responsive-img"/>
            </div>
        </div>
    )
}

export default ProjectsPage;