import React, {useState} from "react";
import {Link} from 'react-scroll';

import "./styles/style.css";
// import "./styles/style.scss";


import Header from "./components/Header/Header"
// import ItemList from "./components/Room/ItemList"
// import ProjectList from "./components/Room/ProjectList"
// import KaneLogo from "./components/KaneLogo/KaneLogo"

// import MainPage from "./components/Room/MainPage";
// import NavHeader from "../Header/NavHeader";
import NavHeader from "./components/Header/NavHeader";

import LandingPage from "./Pages/LandingPage";
import ResumePage from "./Pages/ResumePage";
import EducationPage from "./Pages/EducationPage";
import WorkPage from "./Pages/WorkPage";
import ProjectsPage from "./Pages/ProjectsPage";
import InterestsPage from "./Pages/InterestsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer/Footer";



function App() { 


  return (
    <div className="App">
      {/* <MainPage/> */}
      {/* <NavHeader /> */}
      <Header/>
      
      <LandingPage/>
      <ResumePage/>
      <EducationPage/>
      <WorkPage/>
      <ProjectsPage/>
      <InterestsPage/>
      <ContactPage/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;


