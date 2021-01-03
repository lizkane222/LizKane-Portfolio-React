import React from "react";

import ResumeDoc from "../components/Room/Docs/ResumeDoc.jsx";
import Blocks from "../components/Room/UploadPhotosToWeb/docs/blocks.png";




const ResumePage=() => {
    return(
        <div>
            <div className="redbox">
                <img src={Blocks} alt="" id="blocksImg" className="thematicImg responsive-img"/>
            </div>
            {<ResumeDoc/>}

        </div>
    )
}

export default ResumePage;