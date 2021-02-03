import React from "react";

import APS from "../ResourcesProjects/UploadPhotosToWeb/docs/apsLogo.png"
import Artois from "../ResourcesProjects/UploadPhotosToWeb/docs/univeristeDArtois.png"
import NAU from "../ResourcesProjects/UploadPhotosToWeb/docs/nauLogo.png"
import GA from "../ResourcesProjects/UploadPhotosToWeb/docs/gaLogoCopy.png"
// import APS from "../ResourcesProjects/UploadPhotosToWeb/docs/"



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