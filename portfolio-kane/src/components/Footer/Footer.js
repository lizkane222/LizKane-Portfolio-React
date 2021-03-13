import React from "react";

import APS from "../ResourcesProjects/UploadPhotosToWeb/docs/apsLogo.png"
import Artois from "../ResourcesProjects/UploadPhotosToWeb/docs/univeristeDArtois.png"
import NAU from "../ResourcesProjects/UploadPhotosToWeb/docs/nauLogo.png"
import GA from "../ResourcesProjects/UploadPhotosToWeb/docs/gaLogoCopy.png"
// import APS from "../ResourcesProjects/UploadPhotosToWeb/docs/"



const Footer = () => {
    return (
            <footer id="footer" className="box-shadow">
                    <p id="LizKaneFooter" className="textShadow redText">© Liz Kane</p>
                    <a target="_blank" rel="noreferrer" href="https://generalassemb.ly/" ><img src={GA} className="footerImg" id="GAFooter" alt="General Assembly Logo"/></a>
                    <a target="_blank" rel="noreferrer" href="https://nau.edu/campuses/flagstaff-mountain-campus/" ><img src={NAU} className="footerImg" id="NAUFooter" alt="Northern Arizona University Logo"/></a>
                    <a target="_blank" rel="noreferrer" href="http://www.univ-artois.fr/" ><img src={Artois} className="footerImg" id="ArtoisFooter" alt="Artois University Logo"/></a>
                        {/* <img src={APS} target="_blank" rel="noreferrer" href="https://www.aps.edu/" className="footerImg" id="APSFooter"/> */}
                    <a target="_blank" rel="noreferrer" href="https://www.aps.edu/" ><img src={APS} className="footerImg" id="APSFooter" alt="Albuquerque Public Schools Logo"/></a>
            </footer>
        
    )
}

export default Footer;