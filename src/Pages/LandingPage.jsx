import React, {useState} from "react";
import Wrapper from '../components/Header/Wrapper';

import Title from "../components/KaneLogo/window3d";
// import KaneLogo from "../components/KaneLogo/KaneLogo";

import SeekLogo from "../components/KaneLogo/SeekLogo";

// import Seek7 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-7.png"
// import Seek3 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-3.png"
// import Seek5 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-5.png"
// import Seek2 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-2.png"
// import Seek1 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-1.png"
// import Seek4 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-4.png"
// import Seek6 from "../components/ResourcesProjects/UploadPhotosToWeb/seek/Seek-1-6.png"


const NameIntro = () => {
    return(
        <section id="titleSection">
            <h1 id="intro">
            Liz Kane
            </h1>
             <hr/>
            <h3 id="introSE">
            Software Engineer
            </h3>
        </section>
    )
}


const LandingPage=() => {
    const [intro, setIntro] = useState("strokes")

    const handleHover = (e) => {
        {e.target.className === "strokes" ?
        e.target.className = "solid" 
        :
        e.target.className = "strokes"
        }
    }


    return(
        <section id="landingPage">
            <Wrapper>
                
                        <Title text={<NameIntro/>} />

            </Wrapper>
                <div className="citeArrival">
                    <div className="lizKaneIntro">
                        <p id="p1" className="strokes" onMouseOver={handleHover}>driven by purposeful engineering.</p>
                        <p id="p2" className="strokes" onMouseOver={handleHover}>realistic with an optimistic flare</p>
                        <p id="p3" className="strokes" onMouseOver={handleHover}>direct & patient in problem solving.</p>
                        <p id="p4" className="strokes" onMouseOver={handleHover}>natural aptitude in creating communities.</p>
                        <p id="p4" className="strokes" onMouseOver={handleHover}>fierce passion to impact change.</p>
                        <p id="p4" className="strokes" onMouseOver={handleHover}>systematic with organization.</p>
                        {/* <p id="p4" className="strokes" onMouseOver={handleHover}>.</p> */}
                    </div>  

                    <SeekLogo/>

                </div>             
                

        </section>
    )
}

export default LandingPage;