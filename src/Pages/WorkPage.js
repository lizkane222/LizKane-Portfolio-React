import React from "react";

import Desert from "../components/Room/UploadPhotosToWeb/docs/desert.png";

const WorkPage=() => {
    return(
        <div>
            <div className="redbox">
                <img src={Desert} alt="" id="desertImg" className="thematicImg responsive-img"/>
            </div>
        </div>
    )
}

export default WorkPage;