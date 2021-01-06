import React from "react";
import { useToggle} from "react-use";

const BlogPostContainer = (props) => {
    const [isOn, toggleIsOn] = useToggle(false);

    return (
        <div className="wrapperBlogPost" onClick={props.toggleIsOn}>
            <div id="blogPostContainer" onClick={(e) => e.stopPropagation()}>
                <h4>{props.title}</h4>
                <section id="blogSection">
                    <p id="blogP1">{props.blogP1}</p>
                    <p id="blogP2">{props.blogP2}</p>
                    <p id="blogP3">{props.blogP3}</p>
                    <p id="blogP4">{props.blogP4}</p>
                    <p id="blogP5">{props.blogP5}</p>
                    <p id="blogP6">{props.blogP6}</p>
                    <p id="blogP7">{props.blogP7}</p>
                    <p id="blogP8">{props.blogP8}</p>
                    <p id="blogP9">{props.blogP9}</p>
                    <p id="blogP10">{props.blogP10}</p>
                    <p id="blogP11">{props.blogP11}</p>
                    <p id="blogP12">{props.blogP12}</p>
                    <p id="blogP13">{props.blogP13}</p>
                    <p id="blogP14">{props.blogP14}</p>
                    <p id="blogP15">{props.blogP15}</p>
                    <p id="blogP16">{props.blogP16}</p>
                    <p id="blogP17">{props.blogP17}</p>
                    <p id="blogP18">{props.blogP18}</p>
                    <p id="blogP19">{props.blogP19}</p>
                    <p id="blogP20">{props.blogP20}</p>
                </section>
                <img src={props.img} id="blogImg" alt={props.imgDesc}/>
            </div>
        </div>

    )
}

export default BlogPostContainer;