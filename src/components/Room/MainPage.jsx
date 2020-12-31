import React, {useState} from "react";
import iframe from 'react-iframe';

import Header from "../Header/Header";
import ItemList from "./ItemList";
import ProjectList from "./ProjectList";
import KaneLogo from "../KaneLogo/KaneLogo";
import ResourceList from "./ResourceList";
import Dropdown from "../Header/Dropdown"
import NavBar from "../Header/NavBar"
import NavItem from "../Header/NavItem"
import TodoList from "../Todos/TodoList";

import ResumeDoc from "./Docs/ResumeDoc.jsx";
import BachelorsDoc from "./Docs/BachelorsDoc.jsx";
import MastersDoc from "./Docs/MastersDoc.jsx";
import GACertDoc from "./Docs/GACertDoc.jsx";



import Blocks from "./UploadPhotosToWeb/docs/blocks.png";
import GrandCanyon from "./UploadPhotosToWeb/docs/grandCanyon.png";
import Desert from "./UploadPhotosToWeb/docs/desert.png";
import Obsessions from "./UploadPhotosToWeb/docs/obsessions.png";
import TeamWork from "./UploadPhotosToWeb/docs/teamWork.png";

import {AiFillCaretRight, AiFillCaretLeft} from "react-icons/ai";

import DropdownMenu from "../Header/DropdownMenu"

const MainPage = () => {


    return (
        <div>
            {/* <Header /> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/X4t0JxiBeO0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <ItemList/> */}

            <NavBar >
                <NavItem icon="🧘‍♀️" />
                <NavItem icon={<AiFillCaretRight />} >
                    {/* dropdown menu */}
                    {/* <p>Hello Liz</p> */}
                    <DropdownMenu>
                        
                    </DropdownMenu>
                </NavItem>
                <NavItem icon="🙋🏻‍♀️" />
                <NavItem icon="🎯" />
                <NavItem icon="👾" />

            </NavBar>



            <KaneLogo/>

            <div className="redbox">
                <img src={Blocks} alt="" id="blocksImg" className="thematicImg responsive-img"/>
            </div>
            {<ResumeDoc/>}
            {<MastersDoc/>}
            {<BachelorsDoc/>}
            {<GACertDoc/>}

            <div className="redbox">
                <img src={GrandCanyon} alt="" id="grandCanyonImg" className="thematicImg responsive-img"/>
            </div>
            <div className="redbox">
                <img src={Desert} alt="" id="desertImg" className="thematicImg responsive-img"/>
            </div>
            
            <ProjectList/>
            <div className="redbox">
                <img src={TeamWork} alt="" id="teamWorkImg" className="thematicImg responsive-img"/>
            </div>
            <div className="redbox">
                <img src={Obsessions} alt="" id="obessionsImg" className="thematicImg responsive-img"/>
            </div>


            <TodoList />
        </div>
    )
}

export default MainPage;