import React from "react";

// import BachelorsDoc from "./Docs/BachelorsDoc.jsx";
import BachelorsDoc from "../components/Room/Docs/BachelorsDoc.jsx";
import MastersDoc from "../components/Room/Docs/MastersDoc.jsx";
import GACertDoc from "../components/Room/Docs/GACertDoc.jsx";
import GrandCanyon from "../components/Room/UploadPhotosToWeb/docs/grandCanyon.png";


const EducationPage=() => {
    return(
        <div>

            <div className="redbox">
                <img src={GrandCanyon} alt="" id="grandCanyonImg" className="thematicImg responsive-img"/>
            </div>
            {<MastersDoc/>}
            {<BachelorsDoc/>}
            {<GACertDoc/>}
        </div>
    )
}

export default EducationPage;