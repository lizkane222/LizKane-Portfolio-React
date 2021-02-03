import React, {useState} from "react";
import Wrapper from '../components/Header/Wrapper';

import KaneLogo from "../components/KaneLogo/KaneLogo";

import Seek7 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-7.png"
import Seek3 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-3.png"
import Seek5 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-5.png"
import Seek2 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-2.png"
import Seek1 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-1.png"
import Seek4 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-4.png"
import Seek6 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-6.png"




// const LandingPageStyled = styled.div;

const LandingPage=() => {
    const [text, setText] = useState("strokes")

    const handleHover = (e) => {
        e.target.className = "solid"
    }


    return(
        <section id="landingPage">
            <Wrapper>
                <div className="citeArrival">
                    <div className="lizKaneIntro">
                        <p id="Liz" className="myName" onMouseOver={() => setText(!handleHover)}>
                            Liz Kane
                        </p>
                        <p id="p1" onMouseOver={handleHover}>Moralistically Driven that Everything Should Have a Purpose.</p>
                        <p id="p2" onMouseOver={handleHover}>Realistically Optimistic</p>
                        <p id="p3" onMouseOver={handleHover}>Direct & Patient in Leading Conflict Resolution.</p>
                        <p id="p4" onMouseOver={handleHover}>Gifted in Creating Communities.</p>
                    </div>  

                    <div id="seekLogoContainer">
                        <img src={Seek2} alt="seek logo layer" id="seekPhoto17" className="seekLogo"></img>
                        <img src={Seek1} alt="seek logo layer" id="seekPhoto19" className="seekLogo"></img>
                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default LandingPage;