import React from "react";
import Item from "./Item"

// import ProjectBoardImg from "./UploadPhotosToWeb/new/IMG_0174_2.PNG"


const ItemList = () => {
    
    const roomArray = [ {name: "projectBoard", x:200}, {name: "basketball"}, {name: "vase"}]
    // const roomArray = [ {name: "projectBoard", img: ProjectBoardImg, x:200}, {name: "basketball"}, {name: "vase"}]
    // const projectArray = [ {},{},{},{},{},{},{},{},{}, ]

    const roomItems = roomArray.map(item => {return <Item name={item.name} img={item.img} style={{"left":item.x, "position":"absolute"}}/>})
    // const projectItems = projectArray.map(project => {return <Project name={} logo={} style={{"":,}}/>})

    return (
    <div>
        {roomItems}
    </div>
    )
}

export default ItemList;