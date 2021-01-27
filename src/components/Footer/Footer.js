import React from "react";

import APS from "../Room/UploadPhotosToWeb/docs/apsLogo.png"
import Artois from "../Room/UploadPhotosToWeb/docs/univeristeDArtois.png"
import NAU from "../Room/UploadPhotosToWeb/docs/nauLogo.png"
import GA from "../Room/UploadPhotosToWeb/docs/gaLogoCopy.png"
// import APS from "../Room/UploadPhotosToWeb/docs/"



const Footer = () => {
    return (
            <footer id="footer">
                    <p id="LizKaneFooter">© Liz Kane</p>
                    <img src={GA} id="GAFooter"/>
                    <img src={NAU} id="NAUFooter"/>
                    <img src={Artois} id="ArtoisFooter"/>
                    <img src={APS} id="APSFooter"/>
            </footer>
        
    )
}

export default Footer;