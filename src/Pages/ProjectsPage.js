import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';


import ProjectList from "../components/Room/ProjectList";


import TeamWork from "../components/Room/UploadPhotosToWeb/docs/teamWork.png";



// const ProjectsPageStyled = styled.div;

const ProjectsPage=() => {
    return(
        <section id="projectsPage">
            <Wrapper>
                <ProjectList/>
                <div className="redbox">
                    <img src={TeamWork} alt="" id="teamWorkImg" className="thematicImg responsive-img"/>
                </div>
                
            </Wrapper>
        </section>
    )
}

export default ProjectsPage;