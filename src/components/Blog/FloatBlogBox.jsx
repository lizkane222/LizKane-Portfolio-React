import React from "react";
import BlogList from "../Blog/BlogList";



const FloatBlogBox =(props) => {

    return(                       
        <div className="wrapperFloatBlogBox" onClick={props.toggleBlogIsOn}>
            <div className="floatBlogBox" onClick={(e) => e.stopPropagation()}>
                <div className="blogContainer animate">                    
                    {/* <BlogList />     */}
                    {/* <BlogList />     */}
                    {<props.data/>}
                </div>
            </div>
        </div>
    )
}

export default FloatBlogBox;