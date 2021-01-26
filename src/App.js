import React, {useState} from "react";
import {Link} from 'react-scroll';

import "./styles/style.css";
// import "./styles/style.scss";
import Splash from "./components/DarkLightTheme/SplashScreen";
import {ThemeProvider} from "styled-components";

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

import styled from "styled-components"
import {CgSun} from "react-icons/cg";
import {HiMoon} from "react-icons/hi"

const LightTheme = {
  pageBackground: "#fff",
  textColor: "rgba(13,13,13,1)",
  textColor2: "#fff",
  toggleBackground: "#327E8A",
}

const DarkTheme = {
  pageBackground: "rgba(13,13,13,1)",
  textColor: "#fff",
  textColor2: "rgba(13,13,13,1)",
  toggleBackground: "#EDC168",
}

const themes= {
  light: LightTheme,
  dark: DarkTheme
}


const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.toggleBackground};
    color: ${props => props.theme.textColor2};
    align-self: center;
    padding: 4px 0 0 0;
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;


const Page = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 850vh;
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const Container = styled.div`
    margin: 0 0;
    display: float;
    position: relative;
    flex-direction: column;
    align-items: center;
    align-content: center;
    left: 94vw;
    top: 1vh;

`;

const Item = styled.div`
  background-color: ${props => props.theme.toggleBackground};
  color: ${props => props.theme.textColor};
`;
  // color: ${props => props.theme.textColor2};

function App(props) { 

  const [theme, setTheme] = useState("light")

  function changeTheme() {
    if (theme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
  };

  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;


  return (
    <div className="App">
      <ThemeProvider theme={themes[theme]}>
        <Page>


        {/* <Splash theme={theme} setTheme={setTheme}/> */}
        {/* <NavHeader /> */}
            <Header/>

              <Container id="toggleContainer">
                  <Toggle onClick={changeTheme}>
                      {icon}
                  </Toggle>
              </Container>
            
            <LandingPage/>
            <ResumePage/>
            <EducationPage theme={props.theme} />
            <WorkPage/>
            <ProjectsPage/>
            <InterestsPage/>
            <ContactPage/>
            <Footer/>
          
          </Page>
      </ThemeProvider>
    </div>
  );
}

export default App;


