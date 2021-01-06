import React, { useState, setState } from "react";
import BlogPostContainer from "./BlogPostContainer";
import { useToggle} from "react-use";

const BlogPost = (props) => {
    // const [isActive, setIsActive] = useState(false)
    
    // const toggleIsActive = () => {
    //     {!isActive ?
    //         setIsActive(isActive => (
    //             {isActive: !isActive}
    //         ))
    //     :
    //         setIsActive(
    //             {isActive: false}
    //         )
    //     }
    // };
    const [isOn, toggleIsOn] = useToggle(false);


    return (
        <>
        <li className="blogTitleList" onClick={toggleIsOn}>
            {props.title}
        </li>
        
        {isOn ?
            <>
            <BlogPostContainer props={props} toggleIsOn={toggleIsOn}/>    
            </>
            :[]
        }
    
        </>
    
    )
}

export default BlogPost;