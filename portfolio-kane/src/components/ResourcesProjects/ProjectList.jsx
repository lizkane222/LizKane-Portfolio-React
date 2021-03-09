import React from "react";
// import Item from "./Item"
import Project from "./Project"
import FloatBox from "./FloatBox/FloatBox"
// import ProjectBoardImg from "./UploadPhotosToWeb/new/IMG_0174 2.PNG"

// EKSEED IMGS
import EkseedLogo from "./UploadPhotosToWeb/ekseed/ekseed.png"
import API from "./UploadPhotosToWeb/ekseed/1-API.jpeg"
import Login from "./UploadPhotosToWeb/ekseed/2-Login.jpeg"
import UserPage from "./UploadPhotosToWeb/ekseed/2b-UserPage.jpeg"
import UserNetworks from "./UploadPhotosToWeb/ekseed/3-UserNetworks.jpeg"
import NetworkConnections from "./UploadPhotosToWeb/ekseed/4-NetworkConnections.jpeg"
import SkeletonPage from "./UploadPhotosToWeb/ekseed/5-SkeletonPage.jpeg"
import ConnectionPage from "./UploadPhotosToWeb/ekseed/6-ConnectionPage.jpeg"
import ShareConnection from "./UploadPhotosToWeb/ekseed/7-ShareConnection.jpeg"
import ViewConnectionsAtCompany from "./UploadPhotosToWeb/ekseed/8-ViewConnectionsAtCompany.jpeg"
import Description from "./UploadPhotosToWeb/ekseed/Description.jpeg"

// DEVIANT IMGS
import DeviantLogo from "./UploadPhotosToWeb/deviant/deviant1.png"
// import  from "./UploadPhotosToWeb"

// MINIFI IMGS
import MinifiLogo from "./UploadPhotosToWeb/minifi/minifi.png"
// import  from "./UploadPhotosToWeb"

import TrycycleLogo from "./UploadPhotosToWeb/trycycle/trycycle.png"
// import  from "./UploadPhotosToWeb"

// Praesto IMGS
import PraestoLogo from "./UploadPhotosToWeb/praesto/praesto.png"
// import  from "./UploadPhotosToWeb"

// WAYFARER IMGS
import WayfarerLogo from "./UploadPhotosToWeb/wayfarer/wayfarer1line.png";
// import  from "./UploadPhotosToWeb"

// FEMANON IMGS
// import FemanonLogo1 from "./UploadPhotosToWeb/femanon/IMG_0172_2.png";
// import FemanonLogo1 from "./UploadPhotosToWeb/femanon/IMG_0172_2.png";
// import FemanonLogo1 from "./UploadPhotosToWeb/femanon/IMG_0172_2.png"
// import  from "./UploadPhotosToWeb"

// POZERS IMGS
// import  from "./UploadPhotosToWeb"
// import  from "./UploadPhotosToWeb"

const ProjectList = () => {
    
    const EkseedGalleryArray = [{img: API, descImg:"Collection of Companies where users have connections within Ekseed"},{img: Login, descImg: "User can login or signup using a modal"},{img: UserPage, descImg: "Upon signing up user is brought to Profile page to add personal information so that he can share this data with future connections."},{img: UserNetworks, descImg: "If already existing user upon logging in the user is directed to their ekseed page displaying all of their networks with the user's various connections"},{img: NetworkConnections, descImg: "Upon clicking on a networks main image all of the user's connections that exist within that network are displayed on scroll on the left. To view connection click on an image."},{img: SkeletonPage, descImg: "While the connection content is loading the connection skeleton page is displayed"},{img: ConnectionPage, descImg: "Upon loading the user's connection information is displayed. The content is blank by default, only existing once the user creates notes or contact details for the connection"},{img: ShareConnection, descImg: "By clicking share on the connection's page the user can share that connection's data with the user's other connections or even export."},{img: ViewConnectionsAtCompany, descImg: "If at the origin Ekseed company api page, the user can click on any company and add connections that are affiliated with a company or if connections have already been made then their affiliated companies will auto-fill with the user's connection images."}]
    const DeviantGalleryArray = [{img: DeviantLogo, descImg: "logo"}] 
    const MinifiGalleryArray = [{img: MinifiLogo, descImg: "logo"}] 
    const TrycycleGalleryArray = [{img: TrycycleLogo, descImg: "logo"}] 
    const PraestoGalleryArray = [{img: PraestoLogo, descImg: "logo"}] 
    const WayfarerGalleryArray = [{img: WayfarerLogo, descImg: "logo"}] 
    // const FemanonGalleryArray = [{img: FemanonLogo1, descImg: "logo"}] 
    // const PozersGalleryArray = [] 
    // const EkseedGalleryArray = [] 
    // const DeviantGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const MinifiGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const TrycycleGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const PraestoGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const WayfarerGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const FemanonGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const PozersGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const EkseedGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]

    const EkseedDescription = "Networking is not just about who you know but knowing them. Being memorable begins with remembering others, what's important to them, drives them, and of course topics to avoid. Each user creates their own network by creating profiles including contact information, social media information, photos, and most importantly notes to review before a meeting."
    const DeviantDescription = "Players are Deviants decrypting code in order to escape the grip of bot-cops to deliver a package to the Rebel Base across the city. When stopped by a bot-cop the player must create as many math solutions as they can think of with both accuracy and agility. Can you successfully deliver the package without getting caught, or will you be taken into custody to wait out the remainder of the apocolypse?"
    const MinifiDescription = "Plan your life by what's most important to you: self-care, people, work... Create habits you want to form and short or long-term goals and Minifi will help you get there. Add your habits and goals to your schedule and track your progress. Make time for what gives your life back. We want to support Who you are by shrinking the burden of daily tasks, lessen the guilt of failure in our habits, not achieving our goals and  ultimate self-care. ni & fi & chi : are tamagotchi versions of yourself. If you are hungry they are hungry, if you eat they eat. You’ll be able to customize the most important tasks of your daily schedule by having ni or fi remind you of your needs. This can range from the optimal amount of sleep you need each night by nudging you that they are tired. You’ll also be able to see their lifespan displayed in visual representations of your habits. We want to not just give you data, we want to support you reach your goals, even if that begins with brushing your teeth everyday, going to the gym once a week, or taking fifteen minutes to read a book. Whatever is best for you is best for your tamagotchi."
    const TrycycleDescription = "<< What goes around comes around >> Recycling & reducing waste consumption is a social issue Trycycle faces head on. It's users can not only find the nearest recycling bin while out and about, but are contributing members to their communities by planning ahead by identifying their waste consumption and tracking their reduction. Our actions today define our tomorrow, Trycycle allows it's users to sponsor recycling bins in their local communities. Users can create new methods of UP-Cycling materials that may otherwise be discarded."
    // HYPE goes the next step to help organize community markets where the recycled material is cleaned and given back to those in the community by education new ways to use the material; through art, gardening, or even by buying products from local businesses with the material being the products container.
    const PraestoDescription = "Connecting meal-planning with grocery shopping with the unique feature to check your pantries current stock of food items. This app helps you build a routine that not only informs you of what you already have available but suggests recipes based on what is available in your home. Meal-planning has never been easier than with Praesto, you can search for recipes by specific food items, cultures, country, or even by mood. Creating a recipe to share with your friends has never been easier. Choose the recipes you want to prepare this week, you'll be given a shopping list that checks your pantries current stock to what you need to buy at the store. Check off each item while shopping and once it's been cooked the ingredients will be subtracted from your stock. Always be informed with Praesto right at your fingertips."
    const WayfarerDescription = "A social platform to share travel photos, experiences, best-places to stay/eat/shop all over the world. Share your next trip on Wayfarer!"
    
    const EkseedDescReduced = "Networking is not just about who you know but knowing them. Being memorable begins with remembering others, what's important to them, drives them, and of course topics to avoid. Each user creates their own network by creating profiles including contact information, social media information, photos, and most importantly notes to review before a meeting."
    const DeviantDescReduced = "Players are Deviants decrypting code in order to escape the grip of bot-cops to deliver a package to the Rebel Base across the city. When stopped by a bot-cop the player must create as many math solutions as they can think of with both accuracy and agility. Can you successfully deliver the package without getting caught, or will you be taken into custody to wait out the remainder of the apocolypse?"
    const MinifiDescReduced = "Plan your life by what's most important to you: self-care, people, work... Create habits you want to form and short or long-term goals and Minifi will help you get there. Add your habits and goals to your schedule and track your progress. Make time for what gives your life back."
    const TrycycleDescReduced = "<< What goes around comes around >> Recycling & reducing waste consumption is a social issue Trycycle faces head on. It's users can not only find the nearest recycling bin while out and about, but are contributing members to their communities by planning ahead by identifying their waste consumption and tracking their reduction."
    const PraestoDescReduced = "Connecting meal-planning with grocery shopping with the unique feature to check your pantries current stock of food items. This app helps you build a routine that not only informs you of what you already have available but suggests recipes based on what is available in your home. Meal-planning has never been easier than with Praesto, you can search for recipes by specific food items, cultures, country, or even by mood. Creating a recipe to share with your friends has never been easier. Choose the recipes you want to prepare this week, you'll be given a shopping list that checks your pantries current stock to what you need to buy at the store. Check off each item while shopping and once it's been cooked the ingredients will be subtracted from your stock. Always be informed with Praesto right at your fingertips."
    const WayfarerDescReduced = "A social platform to share travel photos, experiences, best-places to stay/eat/shop all over the world. Share your next trip on Wayfarer!"
    // const FemanonDescription = "An educational platform built by experts, related programs, and individuals of all ages on the basis to have an open conversation on taboo topics. When society says 'sshhh' it's each of our choices to speak up on such topics and the realities behind topics such as sexuality, gender, relationships etc... WRITTEN BY WOMEN FOR EVERYONE"
    // const PozersDescription = "An organizational app to help you exseed expectations when networking"
    // const Description = "An organizational app to help you exseed expectations when networking"
    // const EkseedGallery = EkseedGalleryArray.map(image => <Photo imageItem={image.img} imageDesc={image.descImg}/>)

    const EkseedGitHub = "https://github.com/lizkane222/Ekseed";
    const EkseedGitHub2 = "https://github.com/lizkane222/Ekseed-Backend";
    const DeviantGitHub = "https://github.com/lizkane222/Deviant-Decrypt";
    const MinifiGitHub = "https://github.com/lizkane222/Minifi";
    const TrycycleGitHub = "https://github.com/lizkane222/mbcrunch";
    const PraestoGitHub = "https://github.com/lizkane222/nosh";
    const WayfarerGitHub = "https://github.com/lizkane222/WAYFARER";
    // const FemanonGitHub = "https://github.com/lizkane222/Fem-Anon";
    // const PozersGitHub = "";
    // const Ekseed GitHub = "";

    // GISTS
    // const WayfarerGist1 = "https://gist.github.com/lizkane222/6c80c67493bb047ee41c84bfe6bf0f33.js";
    
    const EkseedStockImg = "https://i.imgur.com/ohJQi2i.jpg";
    const DeviantStockImg = "https://i.imgur.com/zn2D1TT.jpg";
    const MinifiStockImg = "https://i.imgur.com/MhXK0yg.jpg";
    const TrycycleStockImg = "https://i.imgur.com/XhjQRjC.jpg?1";
    const PraestoStockImg = "blob:https://imgur.com/63a885e9-8e1e-40ee-960a-8627cd8faff5";
    const WayfarerStockImg = "blob:https://imgur.com/cd2c5d41-da59-49d6-bd2d-60e9b66ffbe9";




    const projectArray = [
    {name: "Ekseed", descReduced: EkseedDescReduced, logo:EkseedLogo,  stockImg:"EkseedStockImg", stack:"MERN", group:"solo", github:EkseedGitHub, github2:EkseedGitHub2, proDescription:EkseedDescription, proGallery:EkseedGalleryArray, x:100, y:100, width:100, zindex:1, proId:"Ekseed", language:["React", "Javascript", "Css3", "Atom", "Html5", "Mongodb", "Mysql", "github", "Bootstrap", "Git", "NodeJs", "Npm", "Babel", "Visualstudio", "Slack", "Adobexd", "Adobe", "Airtable" ]},
    {name: "Praesto", descReduced: PraestoDescReduced, logo:  PraestoLogo, stockImg:"PraestoStockImg", stack:"MEN", group:"collab", proGallery:PraestoGalleryArray, proDescription:PraestoDescription, x:400, y: 400, width: 100, zindex:1, proId:"Praesto", github:PraestoGitHub, github2:"",language:["Javascript", "Css3", "Html5", "Mongodb", "Mysql", "Jquery", "Github", "Bootstrap", "Git", "NodeJs", "Npm", "VisualStudio", "Codepen", "Trello", "Airtable", "Heroku"]},
    {name: "Trycycle", descReduced:TrycycleDescReduced , logo:TrycycleLogo,  stockImg:"TrycycleStockImg", stack:"MEN", group:"solo", proGallery:TrycycleGalleryArray, proDescription:TrycycleDescription, x:300, y: 300, width: 100, zindex:1, proId:"Trycycle", github:TrycycleGitHub, github2:"",language:["", "", "", ]},
    {name: "Minifi", descReduced: MinifiDescReduced, logo:  MinifiLogo, stockImg:"MinifiStockImg", stack:"MEN", group:"solo", proGallery:MinifiGalleryArray, proDescription: MinifiDescription, x:300, y: 200, width: 100, zindex:1, proId:"Minifi", github:MinifiGitHub, github2:"",language:["", "", "", ]},
    {name: "Deviant", descReduced:DeviantDescReduced, logo:  DeviantLogo, stockImg:"DeviantStockImg", stack:"JS", group:"solo", proGallery:DeviantGalleryArray, github:DeviantGitHub, github2:"", proDescription: DeviantDescription,  x:200, y: 200, width: 100, zindex:1, proId:"Deviant", language:["Javascript", "Css3", "Html5", "Jquery", "NodeJs", "Npm", "Visualstudio", "Codepen", "Slack" ]},
    {name: "Wayfarer", descReduced: WayfarerDescReduced, logo:WayfarerLogo,  stockImg:"WayfarerStockImg", stack:"Django", group:"collab", proGallery:WayfarerGalleryArray, proDescription:WayfarerDescription, x:500, y: 500, width: 100, zindex:1, proId:"Wayfarer", github:WayfarerGitHub, github2:"", language:["Django", "Css3", "Html5", "Python", "Postgresql", "Jquery", "Github", "Bootstrap", "Git", "Visualstudio", "Codepen", "Trello", "Notion", "Airtable", "Heroku", ]}]
    // const projectArray = [ {name:"Ekseed", logo:EkseedLogo, github:EkseedGitHub, github2:EkseedGitHub2, proDescription:EkseedDescription, proGallery:EkseedGalleryArray, x:100, y:100, width:100, zindex:1, proId:"Ekseed"}, {name: "Deviant", logo: DeviantLogo, proGallery:DeviantGalleryArray, github:DeviantGitHub, github2:"", proDescription: DeviantDescription,  x:200, y: 200, width: 100, zindex:1, proId:"Deviant", }, {name: "Minifi", logo: MinifiLogo, proGallery:MinifiGalleryArray, proDescription: MinifiDescription, x:300, y: 200, width: 100, zindex:1, proId:"Minifi", github:MinifiGitHub, github2:"",}, {name: "Trycycle", logo: TrycycleLogo, proGallery:TrycycleGalleryArray, proDescription: TrycycleDescription, x:300, y: 300, width: 100, zindex:1, proId:"Trycycle", github:TrycycleGitHub, github2:"",}, {name: "Praesto", logo: PraestoLogo, proGallery:PraestoGalleryArray, proDescription: PraestoDescription, x:400, y: 400, width: 100, zindex:1, proId:"Praesto", github:PraestoGitHub, github2:"",}, {name: "Wayfarer", logo: WayfarerLogo, proGallery:WayfarerGalleryArray, proDescription: WayfarerDescription, x:500, y: 500, width: 100, zindex:1, proId:"Wayfarer", github:WayfarerGitHub, github2:""}, {name: "Femanon", logo: FemanonLogo1, stack:"djangoReact" proGallery:FemanonGalleryArray, proDescription: FemanonDescription, x:600, y: 600, width: 100, zindex:1, proId:"Femanon", github:FemanonGitHub, github2:"",}]
    const projectItems = projectArray.map(project => {return <Project key={project.name} name={project.name} descReduced={project.descReduced} stack={project.stack} group={project.group} logo={project.logo} description={project.proDescription} github={project.github} github2={project.github2} gallery={project.proGallery} language={project.language} style={{"left":project.x+"px", "top":project.y+"px", "width":project.width+"px", "zindex":project.zindex, "id":project.proId }}/>})

    
    


    return (
        <div className="projectBoard">
            {projectItems}
        </div>
    )
}
export default ProjectList;