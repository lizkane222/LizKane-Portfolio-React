import React from "react";
import Seek7 from "../Room/UploadPhotosToWeb/seek/Seek-1-7.png"
import Seek3 from "../Room/UploadPhotosToWeb/seek/Seek-1-3.png"
import Seek5 from "../Room/UploadPhotosToWeb/seek/Seek-1-5.png"
import Seek2 from "../Room/UploadPhotosToWeb/seek/Seek-1-2.png"
import Seek1 from "../Room/UploadPhotosToWeb/seek/Seek-1-1.png"
import Seek4 from "../Room/UploadPhotosToWeb/seek/Seek-1-4.png"
import Seek6 from "../Room/UploadPhotosToWeb/seek/Seek-1-6.png"
// import LizPortrait from "../Room/UploadPhotosToWeb/docs/LizKanePortrait.png"
import LizPortrait from "../Room/UploadPhotosToWeb/docs/LizKanePortraitScaled.png"

const KaneLogo = () => {
    return (
        <div className="citeArrival">
            <div className="lizKaneIntro">
                <h1 className="myName">Liz Kane</h1>
                <div id="portraitDiv">
                    <img src={LizPortrait} alt="Liz Kane Self-Portrait Sketch" id="selfPortrait"/>
                </div>
            </div>
            <div id="seekLogoContainer">
                {/* <img src="./UploadPhotosToWeb/new/Seek-2.png" alt="seek logo layer" id="seekPhotoAllLayers" className="seekLogo layer"/> */}
                {/* <img src={Seek7} alt="seek logo layer" id="seekPhoto11" className="seekLogo layer"></img> */}
                <img src={Seek3} alt="seek logo layer" id="seekPhoto13" className="seekLogo layer"></img>
                <img src={Seek5} alt="seek logo layer" id="seekPhoto15" className="seekLogo layer"></img>
                <img src={Seek2} alt="seek logo layer" id="seekPhoto17" className="seekLogo layer"></img>
                <img src={Seek1} alt="seek logo layer" id="seekPhoto19" className="seekLogo layer"></img>
                <img src={Seek4} alt="seek logo layer" id="seekPhoto21" className="seekLogo layer"></img>
                <img src={Seek6} alt="seek logo layer" id="seekPhoto23" className="seekLogo layer"></img>
                {/* <img src="" alt=""/> */}
                {/* src/components/Room/UploadPhotosToWeb/seek/Seek-1-1.png */}    
            </div>

        </div>
    )
}

export default KaneLogo;

