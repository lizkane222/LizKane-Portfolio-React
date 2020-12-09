import React, {Component} from 'react';
// import "../Header/header.scss"

const Header = () => {
    return (
        <header>
        <div className="button"></div>
                {/* <div class="button"><img src="/UploadPhotosToWeb/lizkane-1.png" alt="Liz Kane" id="lizkane"></div>  */}
            <nav>
                <h3><a href="">Resume</a></h3>
                <h3><a href="">Projects</a></h3>
                <h3><a href="">Education</a></h3>
                <h3><a href="">Work Experience</a></h3>
                <h3><a href="">Interests</a></h3>
                <h3><a href="">About</a></h3>
            </nav>
        </header>
    );
}

export default Header;