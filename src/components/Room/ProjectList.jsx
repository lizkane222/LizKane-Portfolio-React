import React from "react";
import Item from "./Item"
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

import MBCrunchLogo from "./UploadPhotosToWeb/mbcrunch/mbcrunch.png"
// import  from "./UploadPhotosToWeb"

// NOSH IMGS
import NoshLogo from "./UploadPhotosToWeb/nosh/nosh.png"
// import  from "./UploadPhotosToWeb"

// WAYFARER IMGS
import WayfarerLogo from "./UploadPhotosToWeb/wayfarer/wayfarer1line.png";
// import  from "./UploadPhotosToWeb"

// FEMANON IMGS
import FemanonLogo1 from "./UploadPhotosToWeb/femanon/IMG_0172_2.png"
// import FemanonLogo1 from "./UploadPhotosToWeb/femanon/IMG_0172_2.png"
// import  from "./UploadPhotosToWeb"

// POZERS IMGS
// import  from "./UploadPhotosToWeb"
// import  from "./UploadPhotosToWeb"

const ProjectList = () => {
    
    const EkseedGalleryArray = [{img: API, descImg:"Collection of Companies where users have connections within Ekseed"},{img: Login, descImg: "User can login or signup using a modal"},{img: UserPage, descImg: "Upon signing up user is brought to Profile page to add personal information so that he can share this data with future connections."},{img: UserNetworks, descImg: "If already existing user upon logging in the user is directed to their ekseed page displaying all of their networks with the user's various connections"},{img: NetworkConnections, descImg: "Upon clicking on a networks main image all of the user's connections that exist within that network are displayed on scroll on the left. To view connection click on an image."},{img: SkeletonPage, descImg: "While the connection content is loading the connection skeleton page is displayed"},{img: ConnectionPage, descImg: "Upon loading the user's connection information is displayed. The content is blank by default, only existing once the user creates notes or contact details for the connection"},{img: ShareConnection, descImg: "By clicking share on the connection's page the user can share that connection's data with the user's other connections or even export."},{img: ViewConnectionsAtCompany, descImg: "If at the origin Ekseed company api page, the user can click on any company and add connections that are affiliated with a company or if connections have already been made then their affiliated companies will auto-fill with the user's connection images."}]
    const DeviantGalleryArray = [{img: DeviantLogo, descImg: "logo"}] 
    const MinifiGalleryArray = [{img: MinifiLogo, descImg: "logo"}] 
    const MBCrunchGalleryArray = [{img: MBCrunchLogo, descImg: "logo"}] 
    const NoshGalleryArray = [{img: NoshLogo, descImg: "logo"}] 
    const WayfarerGalleryArray = [{img: WayfarerLogo, descImg: "logo"}] 
    const FemanonGalleryArray = [{img: FemanonLogo1, descImg: "logo"}] 
    // const PozersGalleryArray = [] 
    // const EkseedGalleryArray = [] 
    // const DeviantGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const MinifiGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const MBCrunchGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const NoshGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const WayfarerGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const FemanonGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const PozersGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]
    // const EkseedGalleryArray = [{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},{img: , descImg:},]

    const EkseedDescription = `An organizational app to help you exseed expectations when networking. How good does it feel to have your name remembered? How hard is it to remember the names of everyone you've met, especially those who could potentially become future advantageous connections. Ekseed is a social media application that prepares you to be a better and more informed networker. Networking requires not only the soft-skills of formal and informal interaction... but that you make each interaction memorable for yourself and for that individual. Leverage does this by encouraging you to make memorable notes on a person you've met, the next time you meet that person they'll feel great that you not only remember their name but also that their son plays HS football, their family skiis in Denver, they prefer coffee to tea, and are a Bronco's fan. Being memorable begins with remembering others. Each user creates their own network by essentially creating a new user (name, network category, company name, notes, contact info). A note taking application where each note is appended to that user. Beyond adding notes you can also add pieces of contact information. (Phone number, address, email addresses, company name, work address, work phone). Upload photo. Link to social media (to stay up to date on each individual). Share notes with others. View companies & who has a connection to that company. The user: is an individual who is interested in networking or becoming a better networker/ boss/ coworker.`
    const DeviantDescription = "Players are Deviants decrypting code in order to escape the grip of bot-cops to deliver a package to the Rebel Base across the city. When stopped by a bot-cop the player must create as many math solutions as they can think of with both accuracy and agility. Can you successfully deliver the package without getting caught, or will you be taken into custody to wait out the remainder of the apocolypse?"
    const MinifiDescription = "We want to support Who you are by shrinking the burden of daily tasks, lessen the guilt of failure in our habits, not achieving our goals and  ultimate self-care. ni & fi & chi : are tamagotchi versions of yourself. If you are hungry they are hungry, if you eat they eat. You’ll be able to customize the most important tasks of your daily schedule by having ni or fi remind you of your needs. This can range from the optimal amount of sleep you need each night by nudging you that they are tired. You’ll also be able to see their lifespan displayed in visual representations of your habits. We want to not just give you data, we want to support you reach your goals, even if that begins with brushing your teeth everyday, going to the gym once a week, or taking fifteen minutes to read a book. Whatever is best for you is best for your tamagotchi."
    const MBCrunchDescription = "A social awareness app that calls each individual, business, and community to action. MBCrunch focuses on providing and identifying recycling bins near you. Businesses and individuals can sponsor recycling bins. Upon recycling items points are accumulated and exchanged to gain access to Virtual Reality Games to be played at those local businesses. MBCrunch goes the next step to help organize community markets where the recycled material is cleaned and given back to those in the community by education new ways to use the material; through art, gardening, or even by buying products from local businesses with the material being the products container."
    const NoshDescription = "An app that fills in the gap for those moments you brain fart and completely forget what food is available at home and you're out grocery shopping. Keep inventory of your pantry and fridge through Nosh allowing you to even choose recipes to make meal planning easier. Check off each item while at the store and once that recipe has been cooked the ingredients will be subtracted from the stock. Always be informed with Nosh right at your fingertips."
    const WayfarerDescription = "A social platform to share travel photos, experiences, best-places to stay/eat/shop all over the world. Share your next trip on Wayfarer!"
    const FemanonDescription = "An educational platform built by experts, related programs, and individuals of all ages on the basis to have an open conversation on taboo topics. When society says 'sshhh' it's each of our choices to speak up on such topics and the realities behind topics such as sexuality, gender, relationships etc... WRITTEN BY WOMEN FOR EVERYONE"
    // const PozersDescription = "An organizational app to help you exseed expectations when networking"
    // const Description = "An organizational app to help you exseed expectations when networking"
    // const EkseedGallery = EkseedGalleryArray.map(image => <Photo imageItem={image.img} imageDesc={image.descImg}/>)

    const EkseedGitHub = "https://github.com/lizkane222/Ekseed";
    const EkseedGitHub2 = "https://github.com/lizkane222/Ekseed-Backend";
    const DeviantGitHub = "https://github.com/lizkane222/Deviant-Decrypt";
    const MinifiGitHub = "https://github.com/lizkane222/Minifi";
    const MBCrunchGitHub = "https://github.com/lizkane222/MBCrunch";
    const NoshGitHub = "https://github.com/lizkane222/nosh";
    const WayfarerGitHub = "https://github.com/lizkane222/WAYFARER";
    const FemanonGitHub = "https://github.com/lizkane222/Fem-Anon";
    // const PozersGitHub = "";
    // const Ekseed GitHub = "";

    // GISTS
    // const WayfarerGist1 = "https://gist.github.com/lizkane222/6c80c67493bb047ee41c84bfe6bf0f33.js";
    


    const projectArray = [ {name:"Ekseed", logo:EkseedLogo, github:EkseedGitHub, github2:EkseedGitHub2, proDescription:EkseedDescription, proGallery:EkseedGalleryArray, x:100, y:100, width:100, zindex:1, proId:"Ekseed"}, {name: "Deviant", logo: DeviantLogo, proGallery:DeviantGalleryArray, github:DeviantGitHub, github2:"", proDescription: DeviantDescription,  x:200, y: 200, width: 100, zindex:1, proId:"Deviant", }, {name: "Minifi", logo: MinifiLogo, proGallery:MinifiGalleryArray, proDescription: MinifiDescription, x:300, y: 200, width: 100, zindex:1, proId:"Minifi", github:MinifiGitHub, github2:"",}, {name: "MBCrunch", logo: MBCrunchLogo, proGallery:MBCrunchGalleryArray, proDescription: MBCrunchDescription, x:300, y: 300, width: 100, zindex:1, proId:"MBCrunch", github:MBCrunchGitHub, github2:"",}, {name: "Nosh", logo: NoshLogo, proGallery:NoshGalleryArray, proDescription: NoshDescription, x:400, y: 400, width: 100, zindex:1, proId:"Nosh", github:NoshGitHub, github2:"",}, {name: "Wayfarer", logo: WayfarerLogo, proGallery:WayfarerGalleryArray, proDescription: WayfarerDescription, x:500, y: 500, width: 100, zindex:1, proId:"Wayfarer", github:WayfarerGitHub, github2:""}, {name: "Femanon", logo: FemanonLogo1, proGallery:FemanonGalleryArray, proDescription: FemanonDescription, x:600, y: 600, width: 100, zindex:1, proId:"Femanon", github:FemanonGitHub, github2:"",}]
    // const projectArray = [ {name:"Ekseed", logo:EkseedLogo, github:EkseedGitHub, github2:EkseedGitHub2, proDescription:EkseedDescription, proGallery:EkseedGalleryArray, x:100, y:100, width:100, zindex:1, proId:"Ekseed"}, {name: "Deviant", logo: DeviantLogo, proGallery:DeviantGalleryArray, github:DeviantGitHub, github2:"", proDescription: DeviantDescription,  x:200, y: 200, width: 100, zindex:1, proId:"Deviant", }, {name: "Minifi", logo: MinifiLogo, proGallery:MinifiGalleryArray, proDescription: MinifiDescription, x:300, y: 200, width: 100, zindex:1, proId:"Minifi", github:MinifiGitHub, github2:"",}, {name: "MBCrunch", logo: MBCrunchLogo, proGallery:MBCrunchGalleryArray, proDescription: MBCrunchDescription, x:300, y: 300, width: 100, zindex:1, proId:"MBCrunch", github:MBCrunchGitHub, github2:"",}, {name: "Nosh", logo: NoshLogo, proGallery:NoshGalleryArray, proDescription: NoshDescription, x:400, y: 400, width: 100, zindex:1, proId:"Nosh", github:NoshGitHub, github2:"",}, {name: "Wayfarer", logo: WayfarerLogo, proGallery:WayfarerGalleryArray, proDescription: WayfarerDescription, x:500, y: 500, width: 100, zindex:1, proId:"Wayfarer", github:WayfarerGitHub, github2:"", gist:WayfarerGist1}, {name: "Femanon", logo: FemanonLogo1, proGallery:FemanonGalleryArray, proDescription: FemanonDescription, x:600, y: 600, width: 100, zindex:1, proId:"Femanon", github:FemanonGitHub, github2:"",}]

    // const projectItems = projectArray.map(project => {return <Project name={project.name} logo={project.logo} description={project.proDescription} github={project.github} github2={project.github2} gist={project.gist} gallery={project.proGallery} style={{"left":project.x+"px", "top":project.y+"px", "width":project.width+"px", "zindex":project.zindex, "id":project.proId }}/>})
    const projectItems = projectArray.map(project => {return <Project name={project.name} logo={project.logo} description={project.proDescription} github={project.github} github2={project.github2} gallery={project.proGallery} style={{"left":project.x+"px", "top":project.y+"px", "width":project.width+"px", "zindex":project.zindex, "id":project.proId }}/>})



    // for(item in projectItems){
    //     useState
    // }



    return (
    <div>
        <div className="projectBoard">
                {projectItems}
        </div>
    </div>
    )
}

export default ProjectList;