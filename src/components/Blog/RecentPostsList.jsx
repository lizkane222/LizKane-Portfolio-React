import React, { useState } from "react";
import BlogPost from "./BlogPost";
import BlogPostContainer from "./BlogPostContainer";
import RecentPost from "./RecentPost";

import Ennemi from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/ennemi.jpg";
import Enough from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/enough.jpg";
import FilterFailure from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/filterfailure.jpg";
import Goal from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/goal.jpg";
import Growth from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/growth.jpg";
import Networking from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/networking.jpg";
import RBG from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/rbg.jpg";
import ThirdLaw from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/thirdlaw.jpg";
import TimeGrief from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/timegrief.jpg";
import WorldLine from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/worldline.jpg";
// import WhyBlog from "../ResourcesProjects/UploadPhotosToWeb/LinkedInPosts/.jpg";


const GoalPost = [{
 title: "Goals: life's hopefilled breadcrumbs ",
 index: 0,
 blogP1: "One of my goals in 2021 is to read 21 books. To accomplish this I’m using the app GoodReads, and if you haven’t used it I definitely recommend it.",
 blogP2: "I quickly realized that Never Eat Alone is a book that will stretch me as both an individual and a professional. The author challenges the reader with practical ways to take ownership over their aspirations in life in order to reach their goals.",
 blogP3: "Here’s to practical dreaming.",
 blogP4: "“If you want to live a happy life, tie it to a goal, not to people or things.” -Albert Einstein",
 blogP5: "",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/whyBlog.jpg",
 imgSrc: Goal,
 imgDesc: "",
}]

const GrowthPost = [{
 title: "Growth",
 index: 1,
 blogP1: "Officially made the list of my 5-Year Goals with the benchmarks to achieve them.",
 blogP2: "Look out world",
 blogP3: "",
 blogP4: "",
 blogP5: "",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "", 
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/whitePaint.jpg",
 imgSrc: Growth,
 imgDesc: "",
 
}]

const RBGPost = [{
 title: "Female Role Models",
 index: 2,
 blogP1: "Growing up I didn’t understand how valuable it is having successful women to look up to who hold positions previously only held by men, doing things previously done only by men, accomplishing and creating things only previously done by men.",
 blogP2: "Equity for women. Equity for people of color. Equity for persons with disabilities. Equity and equality for all as it is our constitutional right, the constitutional principle of the equal stature of men and women.",
 blogP3: "The RBG edition The TIMES, is truly inspiring. This weekend I picked up a book “Conversations With RBG”. If you have any recommendations of books about key feminine influencers or even just the names of some, please send it my way.",
 blogP4: "Change starts in the minds and hearts of the oppressed, liberty is achieved when the oppressors yield to that change in recognition of what a future worth living will actually take.",
 blogP5: "Empowering the women of today to be the role models of tomorrow’s children.",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/musicCasetteTape.jpg",
 imgSrc: RBG,
 imgDesc: "",
 
}]

const WorldLinePost = [{
 title: "Our World Line",
 index: 3,
 blogP1: "“As we move about in space, we are also moving forward in time. This means we effectively navigate a path through spacetime called a world line.”",
 blogP2: "History is marked by individuals who act responsively to the current day’s injustices with a plan for change to occur now and in the future.",
 blogP3: "Today is a day marked in history. Where discord was rampant may there now be hope for peace. Where a country’s divisions were rarely if ever deeper may there now be unification towards healing.",
 blogP4: "As an American woman, I’m filled with pride to watch Vice President Kamala Harris continue to pave the way for female equality & leadership, but probably most importantly a woman of color being a beacon for all young girls that they too can break down seemingly impenetrable barriers.",
 blogP5: "",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/softwareDeveloper.jpg",
 imgSrc: WorldLine,
 imgDesc: "",
 
}]

const EnnemiPost = [{
 title: "Qui est l'ennemi ?",
 index: 4,
 blogP1: "Cette citation est arrivée dans un moment idéal. C’est un question pour tous les américains mais aussi le monde. Les voisins qui croient une chose contraire de vous ne sont pas les ennemis, je sais que c’est contre intuitif, mais la fierté, la peur, l’ignorance, le manque de curiosité, tout représente l’ennemi. Quand nous rencontrons des personnes différentes, cet ennemi se manifeste immédiatement, si ces instincts viennent trop vite, et il faut du courage faire pas dans ces actions. J’ai hâte de 2021, c’est une année quand tout peut pivoter vers le progrès d’égalité, d’équité, et humanité.",
 blogP2: "Pendant les trois années que j’ai vécu en France j’ai regardé les États-Unis et la gouffre qui a grandi entre les citoyens. Je ne sais pas quel est le prix de la paix mais je pense que finalement nous sommes prêts à le payer.",
 blogP3: "Depuis mon enfance, j’ai toujours adoré lire. Aujourd’hui la vie se passe tellement vite que j’ai tendance à l’oublier. Maintenant je suis consciente et j’ai fait un compris avec moi-même. Cette année 2021 je lirai autant des livres que possible pour avoir une meilleure et plus authentique version de moi. J’ai des grands aspirations, entre elles élargir mes connaissances, donc je veux explorer des sujets fascinants dans les domaines de la politique, la physique, les affaires. La langue et la culture français ont devenu une partie de moi et je veux continuer à les découvrir même de loin à partir de la lecture.",
 blogP4: "J’ai fait déjà ma liste des livres. En français : La Voleuse de Livres, 1984, le quatrième livre de Les Jeux de la Faim, et La Ferme des Animaux. En anglais la liste est plus extensive : The New Jim Crow, Conversations with RBG, Bird By Bird, Gone Girl, The 4th Hunger Games, Animal Farm, Hidden In Plain Sight #2, Thinking Fast and Slow, Factfulness.",
 blogP5: "J’en suis sûre que chaque livre m’apportera des nouvelles connaissances, visions et réflexions, avec ça de façon naturelle de développement personnel. Ces livres sont juste le début pour moi.",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/nomadPlane.jpg",
 imgSrc: Ennemi,
 imgDesc: "",
 
}]

const TimePost = [{
 title: "Dimensions of Time: Grief",
 index: 5,
 blogP1: "This has been only one of the very beautiful but difficult quotes from today’s reading. Albert Einstein possessed a reason that comforted him in time of grief that was optimistically hopeful and eternal.",
 blogP2: "I’ve always been captivated with ideas and concepts of time, but rarely do you see science comfort. Time itself has the dimensional autonomy that includes you but leaves you not as a leaf upon its waving wind. You existed, exist, and will exist. If time is laid out in the space time block then there’s no greater comfort than doing what we can to conceive time that was and is as always being.",
 blogP3: "Time has no speed, though we perceive it as fleeting. Our perception of time is very much like our perception of sound, we rarely if ever perceive it right away, taking it’s sweet time to catch up to our conscious minds only to leave us wanting to perceive it for the first time all over again.",
 blogP4: "It’s our virginity to the ever fleeting moment of now that leaves the mind always perceiving what has passed instead of what is passing.",
 blogP5: "",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/typeWriter.jpg",
 imgSrc: TimeGrief,
 imgDesc: "",
 
}]

const NetworkingPost = [{
 title: "Networking, More About You & Less About Me ",
 index: 6,
 blogP1: "What makes you unique?",
 blogP2: "What can you talk obsessively about for hours?",
 blogP3: "What life-giving passion or skill or hobby do you have that makes you different?",
 blogP4: "Finding out what I have in common with someone is a passion. My range of interests, hobbies, and obsessions are wide so that I’m able to relate to almost anyone, but if that task falls short, what next?",
 blogP5: "What makes you different?",
 blogP6: "It’s a simple question, one that seems pointed at division but in my categorical compartmental mind all I need to do to become invested in you is not just what is selfishly also about me, but what is uniquely only you.",
 blogP7: "I pride myself in having the weirdest smartest friends I know. Are they honestly truly that bizarre of a group, probably not but to me each of them is so unique that I am enthralled with them. My closest friends range from engineers from Venezuela and Taiwan, a nearly professional female golfer, an aspiring psychologist, a quirky dietician, a gifted athlete & physical therapist, a photographer-podcast director. I could talk tirelessly about any of these friends on what we have in common but mostly how unique and gifted each of them are.",
 blogP8: "Networking needs to be a lot less about me and a lot more about you, the passionate and quirky you that is so easy to admire when given the chance.",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/athleteBasketballhoop.jpg",
 imgSrc: Networking,
 imgDesc: "",
 
}]

const ThirdLawPost = [{
 title: "Newton's Third Law",
 index: 7,
 blogP1: "Call me a poet or romantic, but I find the idea that “every observable object makes it’s observer also an object of observation”, quite beautiful.",
 blogP2: "It plays with the idea that we can only measure our world by also measuring ourselves. A dance between understanding the effects of each of our actions in the world and how they in turn affect us. A dance in which you are both the lead and the follow.",
 blogP3: "In Newton’s third law, every action has an equal and opposite reaction, can not only change how we perceive the world around us but how we perceive ourselves. If I were to ask you “what is the equal and opposite reaction to hatred?”, I would estimate that many of us would respond love. I do not. In our world hatred attempts to destroy the objects of its hatred but always destroys its possessor.",
 blogP4: "I believe fear and ignorance is the root of all hatred. This root can only become detangled through the process of being curious about that which frightens us, that which we know little about.",
 blogP5: "I believe this applies to racism, homophobia, and xenophobia and that the equal and opposite reaction to hatred is the converging point of knowledge and compassion.",
 blogP6: "Compassion is a regenerative force while hatred is a degenerative force, when viewed together they will always show to have polar end points.",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/flowersWoman.jpg",
 imgSrc: ThirdLaw,
 imgDesc: "",
 
}]

const FilterFailurePost = [{
 title: "Filter Failure",
 index: 8,
 blogP1: "Remaining focused on goals is directly related to limiting what can grab your attention.",
 blogP2: "This past week I’ve come to realize stabilizing that filter and reinforcing it comes down to:",
 blogP3: "- eating healthy and regularly",
 blogP4: "- taking timed and planned breaks",
 blogP5: "- scheduling out your whole list of priorities",
 blogP6: "- celebrating little victories",
 blogP7: "When I do these regularly, I’ve found that I’m more focused, productive, successful, revived, and less at risk for burn out.",
 blogP8: "Ask yourself, what aren’t you filtering out that is causing more strain than good, and why you aren’t filtering accordingly. Becoming overwhelmed can be curved by sufficient planning.",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/office.jpg",
 imgSrc: FilterFailure,
 imgDesc: "",
}]

const EnoughPost = [{
 title: "Enough",
 index: 9,
 blogP1: "Yoga is a great practice, one I delved into while living in northern France and have maintained regular yoga meetings with my long-distance friends over zoom. Our teacher often ends classes with reminding us to focus on a phrase. Saying it aloud a few times. “I am enough.” Then again “I am enough.”",
 blogP2: "This is a stark contrast to social media and how it focuses a lot on our inadequacies and that which we don’t have, it’s rich to find content that reels you back into feeling sufficient.",
 blogP3: "Find things in life that encourage you, revive you, empower you to dig your heels in and work hard at fulfilling your ambitions.",
 blogP4: "What’s the answer to imposter syndrome, you ask, affording yourself the room to fail and succeed with the practice of verbal reassurance. I know the lies I tell myself and only I can recant those. Stop looking outwardly for the approval of others and be your own hype man.",
 blogP5: "",
 blogP6: "",
 blogP7: "",
 blogP8: "",
 blogP9: "",
 blogP10: "",
 blogP11: "",
 blogP12: "",
 blogP13: "",
 blogP14: "",
 blogP15: "",
 blogP16: "",
 blogP17: "",
 blogP18: "",
 blogP19: "",
 blogP20: "",
//  imgSrc: "../ResourcesProjects/UploadPhotosToWeb/blog/office.jpg",
 imgSrc: Enough,
 imgDesc: "",
}]

// const BlogPostArtist = {blogP1: "", blogP2: "", blogP3: "", blogP4: "", blogP5: "", blogP6: "", blogP7: "", blogP8: "", 
// }
// title = {title}, blogP1 = {blogP1}, blogP2 = {blogP2}, blogP3 = {blogP3}, blogP4 = {blogP4}, blogP5 = {blogP5}, blogP6 = {blogP6}, blogP7 = {blogP7}, blogP8 = {blogP8}, blogP9 = {blogP9}, blogP10 = {blogP10}, blogP11 = {blogP11}, blogP12 = {blogP12}, blogP13 = {blogP13}, blogP14 = {blogP14}, blogP15 = {blogP15}, blogP16 = {blogP16}, blogP17 = {blogP17}, blogP18 = {blogP18}, blogP19 = {blogP19}, blogP20 = {blogP20}, imgSrc = {imgSrc}, imgDesc = {imgDesc}, 
const RecentPostsList = (props) => {
    const [active, setActive] = useState("false")
    
    // const blogPostArrayArray = [{BlogPostWhyBlog}, {BlogPostArtist}, {BlogPostMusician}, {BlogPostSoftwareEngineer}, {BlogPostWriter}, {BlogPostNomad}, {BlogPostFeminist}, {BlogPostWomanInTech}, {BlogPostAthlete}, ]
    
    const GoalPostArray = GoalPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const GrowthPostArray = GrowthPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const RBGPostArray = RBGPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const WorldLinePostArray = WorldLinePost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const EnnemiPostArray = EnnemiPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const TimePostArray = TimePost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const NetworkingPostArray = NetworkingPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const ThirdLawPostArray = ThirdLawPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const FilterFailurePostArray = FilterFailurePost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})
    
    const EnoughPostArray = EnoughPost.map(post => {return <RecentPost
    key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc} />})

        // const blogItems = blogPostArray.map(post => {return <BlogPost key={post.title} title={post.title} index={post.index} blogP1={post.blogP1} blogP2={post.blogP2} blogP3={post.blogP3} blogP4={post.blogP4} blogP5={post.blogP5} blogP6={post.blogP6} blogP7={post.blogP7} blogP8={post.blogP8} blogP9={post.blogP9} blogP10={post.blogP10} blogP11={post.blogP11} blogP12={post.blogP12} blogP13={post.blogP13} blogP14={post.blogP14} blogP15={post.blogP15} blogP16={post.blogP16} blogP17={post.blogP17} blogP18={post.blogP18} blogP19={post.blogP19} blogP20={post.blogP20} imgSrc={post.imgSrc} imgDesc={post.imgDesc}/>})
        
        // onClick={this.setActive}

        const setRecentPostActive = (e) => {
            setActive(!active)
        }

    return (
        <>
            <div className="plane one image-wrapper" onClick={setRecentPostActive}>{GoalPostArray }</div>
            <div className="plane two image-wrapper" onClick={setRecentPostActive}>{GrowthPostArray}</div>
            <div className="plane three image-wrapper" onClick={setRecentPostActive}>{RBGPostArray}</div>
            <div className="plane four image-wrapper" onClick={setRecentPostActive}>{WorldLinePostArray}</div>
            <div className="plane five image-wrapper" onClick={setRecentPostActive}>{EnnemiPostArray}</div>
            <div className="plane six image-wrapper" onClick={setRecentPostActive}>{TimePostArray}</div>
            <div className="plane seven image-wrapper" onClick={setRecentPostActive}>{NetworkingPostArray}</div>
            <div className="plane eight image-wrapper" onClick={setRecentPostActive}>{ThirdLawPostArray}</div>
            <div className="plane nine image-wrapper" onClick={setRecentPostActive}>{FilterFailurePostArray}</div>
            <div className="plane ten image-wrapper" onClick={setRecentPostActive}>{EnoughPostArray}</div>
            <div className="plane eleven">11</div>
            <div className="plane twelve">12</div>
        </>
    )
}

export default RecentPostsList;


// <Carousel.Item>
//             <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//             />

//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>

//         <Carousel.Item>
//             <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Second slide&bg=282c34"
//             alt="Second slide"
//             />

//             <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//             <img
//             className="d-block w-100"
//             src="holder.js/800x400?text=Third slide&bg=20232a"
//             alt="Third slide"
//             />

//             <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//             </Carousel.Caption>
//         </Carousel.Item>