import React from "react";
import Header from "../Header/Header";
// import ItemList from "./ItemList";
import ProjectList from "./ProjectList";
// import KaneLogo from "../KaneLogo/KaneLogo";
import ResourceList from "./ResourceList";
// import Resource from "./Resource";
import iframe from 'react-iframe';

const MainPage = () => {
    return (
        <div>
            <Header />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X4t0JxiBeO0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <ItemList/> */}
            <ProjectList/>
            {/* <KaneLogo/> */}
            <ResourceList/>
            {/* </> */}
        </div>
    )
}

export default MainPage;