import React, {useState} from 'react'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


const Carousel = (props) => {
    const [currentImage, setCurrentImage] = useState(0)
    const selectLeft = () => setCurrentImage((currentImage - 1 + props.gallery.length) % props.gallery.length)
    const selectRight = () => setCurrentImage((currentImage + 1) % props.gallery.length)
    
    console.log("props.gallery"+ props.gallery)
    console.log("props.gallery.length" + props.gallery.length)

    const gallery = props.gallery.map(image => {
        return (
            // <div className="carousel-return">
            <>
                <img src={image.img} alt={image.descImg} className="projectGalleryImage"/>
                <p className="carousel-description">{image.descImg}</p>
            </>
            //  </div> 
        )
    })
    
    
    
    return (
        // <div className="carousel-container">
        <div className="carousel-container">
            {props.gallery.length > 1 && <button id="left-button" className="arrow arrow-left" onClick={selectLeft}><i className="fi-arrow-left">{<FaArrowLeft/>}</i></button>}
                                         {/* <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left">{<FaArrowLeft/>}</i></div> */}
            <div className="carousel-image-container w3-animate-opacity alt-wrap">
                {gallery[currentImage]}
            {/* <p>{gallery[currentImage].descImg}</p> */}
            </div>
            {props.gallery.length > 1 && <button id="right-button" className="arrow arrow-right"  onClick={selectRight}><i className="fi-arrow-right">{<FaArrowRight/>}</i></button>}
                                         {/* <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right">{<FaArrowRight/>}</i></div> */}
        </div>
    )
}
export default Carousel