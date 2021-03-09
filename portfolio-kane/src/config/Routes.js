import React from "react";
import {Switch, Route } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import ResumePage from "../Pages/ResumePage";
import EducationPage from "../Pages/EducationPage";
import WorkPage from "../Pages/WorkPage";
import ProjectsPage from "../Pages/ProjectsPage";
import InterestsPage from "../Pages/InterestsPage";
import ContactPage from "../Pages/ContactPage";



const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={<LandingPage/>} />
            <Route path="/resume" component={<ResumePage/>} />
            <Route path="/education" component={<EducationPage/>} />
            <Route path="/work" component={<WorkPage/>} />
            <Route path="/projects" component={<ProjectsPage/>} />
            <Route path="/interests" component={<InterestsPage/>} />
            <Route path="/contact" component={<ContactPage/>} />
        </Switch>
    )
}

export default Routes;