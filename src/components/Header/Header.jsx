import React, {Component} from 'react';
import Resource from '../Room/Resource';
// import "../Header/header.scss"
import ResourceList from "../Room/ResourceList"

const Header = () => {
    
    const openResource = (e) => {
        <ResourceList/>
    }

    return (
        <header>
        <div className="button"></div>
                {/* <div class="button"><img src="/UploadPhotosToWeb/lizkane-1.png" alt="Liz Kane" id="lizkane"></div>  */}
            <nav>
                <h3 onClick={openResource} className="Resume">Resume</h3>
                <h3 onClick={openResource} className="Projects">Projects</h3>
                <h3 onClick={openResource} className="Education">Education</h3>
                <h3 onClick={openResource} className="WorkExperience">WorkExperience</h3>
                <h3 onClick={openResource} className="Interests">Interests</h3>
                <h3 onClick={openResource} className="About">About</h3>
            </nav>
        </header>
    );
}

export default Header;