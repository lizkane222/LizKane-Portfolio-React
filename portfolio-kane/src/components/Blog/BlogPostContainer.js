import React from "react";
import { useToggle} from "react-use";

const BlogPostContainer = (props) => {
    const [isOn, toggleIsOn] = useToggle(false);

    return (
        <div className="wrapperBlogPost" onClick={props.props.toggleIsOn}>
            <div id="blogPostContainer" onClick={(e) => e.stopPropagation()}>
                <div className="blogCover">
                    <h4>{props.props.title}</h4>
                    <img src={props.props.img} id="blogImg" alt={props.props.imgDesc}/>
                </div>
                <section id="blogSection">
                    <p id="blogP1">{props.props.blogP1}</p>
                    <p id="blogP2">{props.props.blogP2}</p>
                    <p id="blogP3">{props.props.blogP3}</p>
                    <p id="blogP4">{props.props.blogP4}</p>
                    <p id="blogP5">{props.props.blogP5}</p>
                    <p id="blogP6">{props.props.blogP6}</p>
                    <p id="blogP7">{props.props.blogP7}</p>
                    <p id="blogP8">{props.props.blogP8}</p>
                    <p id="blogP9">{props.props.blogP9}</p>
                    <p id="blogP10">{props.props.blogP10}</p>
                    <p id="blogP11">{props.props.blogP11}</p>
                    <p id="blogP12">{props.props.blogP12}</p>
                    <p id="blogP13">{props.props.blogP13}</p>
                    <p id="blogP14">{props.props.blogP14}</p>
                    <p id="blogP15">{props.props.blogP15}</p>
                    <p id="blogP16">{props.props.blogP16}</p>
                    <p id="blogP17">{props.props.blogP17}</p>
                    <p id="blogP18">{props.props.blogP18}</p>
                    <p id="blogP19">{props.props.blogP19}</p>
                    <p id="blogP20">{props.props.blogP20}</p>
                </section>
            </div>
        </div>

    )
}

export default BlogPostContainer;