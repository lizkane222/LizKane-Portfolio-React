import React from "react";
import Carousel from 'react-bootstrap/Carousel'

const AltBlog = (props) => {
    console.log(`AltBlog: `, props)



    let CarouselImages = []

    const getImages = () => {
        for(let img in props.images){
            CarouselImages.push(
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={img.source}
                    alt={img.imgLabel}
                    />
                    <Carousel.Caption>
                        <h3>{img.imgLabel}</h3>
                        <p>{img.imgDesc}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        }
    }




    return(
        // CAROUSEL
        <>
        <Carousel>
            {getImages}
        </Carousel>

        {/* FORM */}
        {props.form}
        </>
    )
}

export default AltBlog;