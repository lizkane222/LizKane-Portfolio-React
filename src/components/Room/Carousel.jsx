import React, {useState} from 'react'
// import './Carousel.scss'
// import url("https://www.w3schools.com/w3css/4/w3.css");
import "../../styles/style.css"

const Carousel = (props) => {
    const [currentImage, setCurrentImage] = useState(0)
    const selectLeft = () => setCurrentImage((currentImage - 1 + props.gallery.length) % props.gallery.length)
    const selectRight = () => setCurrentImage((currentImage + 1) % props.gallery.length)
    
    console.log("props.gallery"+ props.gallery)
    console.log("props.gallery.length" + props.gallery.length)

    const gallery = props.gallery.map(image => {
    return (
        <div>
            <img src={image.img} alt={image.descImg} className="projectGalleryImage"/>
            <p>{image.descImg}</p>
        </div>
    )
    })
    


    return (
        <div className="carousel-container">
            {props.gallery.length > 1 && <button className="left-button" onClick={selectLeft}>&lt;</button>}
            <div className="carousel-image-container w3-animate-opacity alt-wrap">
                {gallery[currentImage]}
            {/* <p>{gallery[currentImage].descImg}</p> */}
            </div>
            {props.gallery.length > 1 && <button className="right-button"  onClick={selectRight}>&gt;</button>}
        </div>
    )
}
export default Carousel