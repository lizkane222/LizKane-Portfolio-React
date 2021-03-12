import React from "react";
import {Link} from 'react-scroll';
import Wrapper from '../components/Header/Wrapper';
// import styled from 'styled-components';
import { useToggle} from "react-use";
import {TiArrowBackOutline} from "react-icons/ti";
import {BsCheckCircle, BsCircle} from "react-icons/bs";
import {HiColorSwatch} from "react-icons/hi";
import {GrGrow, GrOptimize} from "react-icons/gr";
import {BiDonateHeart} from "react-icons/bi";
import {GoLightBulb} from "react-icons/go";
import {GiDropletSplash} from "react-icons/gi";
import {CgArrowLongRightE} from "react-icons/cg";




import ReqForProj from "../components/ResourcesProjects/UploadPhotosToWeb/docs/FillableRequestForProjectProposalTemplate.pdf"
import Desert from "../components/ResourcesProjects/UploadPhotosToWeb/docs/desert.png";

// const WorkPageStyled = styled.div;


const WorkPage=() => {
    const [active, toggleActive] = useToggle(false);
    const [activeIcon, toggleActiveIcon] = useToggle(false);
    const [browser, toggleBrowser] = useToggle(false);
    const [download, toggleDownload] = useToggle(false);

    const [completed1, toggleCompleted1] = useToggle(false);
    const [completed2, toggleCompleted2] = useToggle(false);
    const [completed3, toggleCompleted3] = useToggle(false);
    const [completed4, toggleCompleted4] = useToggle(false);
    const [completed5, toggleCompleted5] = useToggle(false);
    const [completed6, toggleCompleted6] = useToggle(false);
    const [completed7, toggleCompleted7] = useToggle(false);
    const [completed8, toggleCompleted8] = useToggle(false);
    const [completed9, toggleCompleted9] = useToggle(false);
    

    const toggleBrowserBox = () => {toggleBrowser(!browser)}
    const toggleDownloadBox = () => {toggleDownload(!download)}
    const toggleCompletedIcon1 = () => {toggleCompleted1(!completed1)}
    const toggleCompletedIcon2 = () => {toggleCompleted2(!completed2)}
    const toggleCompletedIcon3 = () => {toggleCompleted3(!completed3)}
    const toggleCompletedIcon4 = () => {toggleCompleted4(!completed4)}
    const toggleCompletedIcon5 = () => {toggleCompleted5(!completed5)}
    const toggleCompletedIcon6 = () => {toggleCompleted6(!completed6)}
    const toggleCompletedIcon7 = () => {toggleCompleted7(!completed7)}
    const toggleCompletedIcon8 = () => {toggleCompleted8(!completed8)}
    const toggleCompletedIcon9 = () => {toggleCompleted9(!completed9)}

    // ANCHOR onClick style event
    const strikeThrough = (e) => {
        if (e.target.className!=="strikeThrough"){
            e.target.className="strikeThrough"
        } else {
            e.target.className=""
        }
    }



    return(
        <section id="workPage">
            <Wrapper>
                <div id="innerWorkPage">
                    <div className="redbox">
                        <img src={Desert} alt="" id="desertImg" className="thematicImg responsive-img"/>
                    </div>
                    {/* <h2 onClick={toggleActive} id="rfpInactive">Request<br/>&emsp;To Hire <br/>&emsp;&emsp;Liz Kane<br/>&emsp;&emsp;&emsp;For A <br/>&emsp;&emsp;&emsp;&emsp;Project</h2> */}
                    <h2 onClick={toggleActive} className="text3DHover" id="rfpInactive">HIRE LIZ FOR A PROJECT</h2>
                    {/* <hr id="hireLine"/> */}

                    <div id="workDescription">
                        <h3 className="inactive controlsIcon" ><GiDropletSplash/> PURPOSE </h3>
                        <h3 className="inactive controlsIcon" ><BiDonateHeart/>  IMPACT</h3>
                        <h3 className="inactive controlsIcon" ><GoLightBulb/>  PERSPECTIVE</h3>
                        <h3 className="inactive controlsIcon" ><HiColorSwatch/>  CREATIVITY</h3>
                        <br/><br/>
                        {/* <p>PURPOSE</p>
                        <p>IMPACT</p>
                        <p>PERSPECTIVE</p> */}
                        <p>When developing a project I keep these concepts at the forefront of my mind.<br/> From features <i><CgArrowLongRightE/></i> to design <i><CgArrowLongRightE/></i> to development <i><CgArrowLongRightE/></i> I retain these concepts to maintain integrity.</p>
                    </div>



                    {active===true ? 
                        <div onClick={(e) => e.stopPropagation()}>
                            <div className="wrapperFloatBlogBox" >
                                <div className="floatBlogBox" >
                                    <div className="rFPContainer animate"> 
                                        <a><i id="postBackArrow" className="float-left" onClick={toggleActive}><TiArrowBackOutline/> </i></a>                       
                                        <div id="rfpInstructions">
                                            <h3 className="blueText">How to fill in this<br/>Request for Proposal</h3>
                                            {/* <h5>Instructions To Fill Out The Form</h5> */}
                                            <div>
                                            <h5 className="browserBox" onClick={toggleBrowserBox}><span> In The Browser</span> :</h5>
                                            {browser ?
                                                <p className="browserText">
                                                    <span onClick={strikeThrough}>1. Fill in the relevant spaces</span><br/>
                                                    <span onClick={strikeThrough}>2. Click the Print icon in the top right corner.</span><br/>
                                                    <span onClick={strikeThrough}>3. In "Destination" choose "Save as PDF".</span><br/>
                                                    <span onClick={strikeThrough}>4. Now you may save the PDF.</span><br/>
                                                    <span onClick={strikeThrough}>5. Then you may upload it as a file in the <Link to="contactPage" spy={true} smooth={true} duration={1000}><u style={{cursor: "pointer"}}>Contact Section</u></Link> or email it directly to lizkane222@gmail.com</span>
                                                </p>
                                                :[]
                                            }
                                            <br/>
                                            </div>
                                            <br/>
                                            <h5><span>OR</span></h5>
                                            <div>
                                            <h5 className="downloadBox" onClick={toggleDownloadBox}> <span>By Downloading the File</span> : </h5>
                                            {download ?
                                                <p className="downloadText ">
                                                    <span onClick={strikeThrough}>1. Downloading it at this stage will only download the blank copy.</span><br/>
                                                    <span onClick={strikeThrough}>2. Fill in the relevant information.</span><br/>
                                                    <span onClick={strikeThrough}>3. Save the file.</span><br/>
                                                    <span onClick={strikeThrough}>4. Now you may upload it as a file in the <Link to="contactPage" spy={true} smooth={true} duration={1000}><u style={{cursor: "pointer"}}>Contact Section</u></Link> or email it directly to lizkane222@gmail.com</span>
                                                </p>
                                            :[]
                                            }
                                            </div>
                                            <br/><br/>
                                            {/* BEGIN DOC FILL INSTRUCTIONS */}
                                            <div >
                                                    {completed1 ?
                                                    <>
                                                        <h3 className="yellowText">1. Background / Introduction</h3>
                                                        <i onClick={toggleCompletedIcon1} className="icon1 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                    :
                                                    <>
                                                        <h3>1. Background / Introduction</h3>
                                                        <i onClick={toggleCompletedIcon1} className="icon1"><BsCircle/></i>
                                                        <p>In your introductory paragraph, you’ll want to include useful background information about your company — who founded it, what product or service your company offers, what sets you apart from competitors, and where you’re located.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed2 ?
                                                    <>
                                                    <h3 className="yellowText">2. Project Goals and Scope of Services</h3>
                                                    <i onClick={toggleCompletedIcon2} className="icon2 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>2. Project Goals and Scope of Services</h3>
                                                        <i onClick={toggleCompletedIcon2} className="icon2"><BsCircle/></i>
                                                        <p>Next, you’ll want to outline the project you need completed, and the goals you expect to accomplish from the project. It’s important you get as specific as possible — even outlining individual tasks and criteria involved.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed3 ?
                                                    <>
                                                    <h3 className="yellowText">3. Anticipated Selection Schedule</h3>
                                                    <i onClick={toggleCompletedIcon3} className="icon3 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>3. Anticipated Selection Schedule</h3>
                                                        <i onClick={toggleCompletedIcon3} className="icon3"><BsCircle/></i>
                                                        <p>It’s crucial you include a detailed schedule so the developer <i>(Liz Kane)</i> knows if they can meet your deadlines. You’ll also need to give vendors a window for when they can ask questions regarding your project. This will limit the hassle, for you and for them.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed4 ?
                                                    <>
                                                    <h3 className="yellowText">4. Time and Place of Submission of Proposals</h3>
                                                    <i onClick={toggleCompletedIcon4} className="icon4 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>4. Time and Place of Submission of Proposals</h3>
                                                        <i onClick={toggleCompletedIcon4} className="icon4"><BsCircle/></i>
                                                        <p>Similar to #3, this is important information you’ll want to clearly present, so the developer <i>(Liz Kane)</i> knows how and where to submit themselves for consideration.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed5 ?
                                                    <>
                                                    <h3 className="yellowText">5. Timeline</h3>
                                                    <i onClick={toggleCompletedIcon5} className="icon5 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>5. Timeline</h3>
                                                        <i onClick={toggleCompletedIcon5} className="icon5"><BsCircle/></i>
                                                        <p>By including a time frame in your RFP, we are able to identify if this project is feasible within your time constraints. If you’re flexible on your time, you can write something like, “Our company hopes to finish the project within six months, but we’re open to negotiation.”</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed6 ?
                                                    <>
                                                    <h3 className="yellowText">6. Elements of Proposal</h3>
                                                    <i onClick={toggleCompletedIcon6} className="icon6 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>6. Elements of Proposal</h3>
                                                        <i onClick={toggleCompletedIcon6} className="icon6"><BsCircle/></i>
                                                        <p>It’s critical you outline a checklist so the developer <i>(Liz Kane)</i> knows which elements you’re expecting to receive. It’s also a good test if the vendor <i>(Liz Kane)</i> is able to meet your demands.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed7 ?
                                                    <>
                                                    <h3 className="yellowText">7. Evaluation Criteria</h3>
                                                    <i onClick={toggleCompletedIcon7} className="icon7 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>7. Evaluation Criteria</h3>
                                                        <i onClick={toggleCompletedIcon7} className="icon7"><BsCircle/></i>
                                                        <p>Outlining your expectations will help identify if we're able to meet them. For this section, you’ll want to do some brainstorming with your team to come up with a mandatory list of items you feel the developer <i>(Liz Kane)</i> should be able to meet. Your list could include samples of past work, a proven success record with companies in similar industries, the expertise and technical skills to meet your demands, and a cost of services within your price range.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed8 ?
                                                    <>
                                                    <h3 className="yellowText">8. Possible Roadblocks</h3>
                                                    <i onClick={toggleCompletedIcon8} className="icon8 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>8. Possible Roadblocks</h3>
                                                        <i onClick={toggleCompletedIcon8} className="icon8"><BsCircle/></i>
                                                        <p>Here, you’ll want to outline any roadblocks, such as limited resources or a custom website, that might prevent certain the developer <i>(Liz Kane)</i> from successfully completing the project. This allows to determine if <i>(Liz Kane)</i> has the skills and expertise to tackle those challenges.</p>
                                                    </>
                                                }
                                            </div>

                                            <div >
                                                    {completed9 ?
                                                    <>
                                                    <h3 className="yellowText">9. Budget</h3>
                                                    <i onClick={toggleCompletedIcon9} className="icon9 yellowText"><BsCheckCircle/></i>
                                                    </>
                                                     :
                                                     <>
                                                        <h3>9. Budget</h3>
                                                        <i onClick={toggleCompletedIcon9} className="icon9"><BsCircle/></i>
                                                        <p>Any vendor needs to know how much you’re able to pay them for their services before they’ll move forward with their bid.</p>
                                                    </>
                                                }
                                            </div>                                            
                                        </div>
                                        <div className="responsiveIframe" id="rfpIframe">
                                            <iframe id="reqForProject" className="iframeResize" title="Request For Project" src={ReqForProj} width="100%" height="315" frameBorder="0" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    : []
                    }
                </div>
            </Wrapper>
        </section>
    )
}

export default WorkPage;

// 1. Background/Introduction
// In your introductory paragraph, you’ll want to include useful background information about your company — who founded it, what product or service your company offers, what sets you apart from competitors, and where you’re located. If any vendor is serious about working with you, they’ll want this information before moving forward.

// 2. Project Goals and Scope of Services
// Next, you’ll want to outline the project you need completed, and the goals you expect to accomplish from the project. It’s important you get as specific as possible — even outlining individual tasks and criteria involved. You’ll want to include phrases such as “The award will be given to X firm,” with the “X” establishing how you’ll determine the best candidate.

// 3. Anticipated Selection Schedule
// It’s crucial you include a detailed schedule so vendors know if they can meet your deadlines. You’ll also need to give vendors a window for when they can ask questions regarding your project. This’ll limit the hassle, for you and for them.

// 4. Time and Place of Submission of Proposals
// Similar to paragraph #3, this is important information you’ll want to clearly present, so vendors know how and where to submit themselves for consideration.

// 5. Timeline
// By including a time frame in your RFP, you’re able to eliminate any vendor who can’t work within your time constraints. If you’re flexible on your time, you can write something like, “Our company hopes to finish the project within six months, but we’re open to negotiation for the right candidate.”

// 6. Elements of Proposal
// If you don’t outline clearly and specifically what you expect bidders to include in their proposal, you can’t necessarily fault them if they don’t include it. It’s critical you outline a checklist so vendors know which elements you’re expecting to receive. It’s also a good test for who’s capable of handling your demands — if a vendor can’t complete all elements of your proposal, you probably can’t trust them to finish your project, either.

// 7. Evaluation Criteria
// Outlining your expectations will help eliminate vendors who don’t meet them. For this section, you’ll want to do some brainstorming with your team to come up with a mandatory list of items you feel are the best indicators of impressive candidates. Your list could include samples of past work, a proven success record with companies in similar industries, the expertise and technical skills to meet your demands, and a cost of services within your price range.

// 8. Possible Roadblocks
// Here, you’ll want to outline any roadblocks, such as limited resources or a custom website, that might prevent certain vendors from successfully completing the project. This allows you to eliminate unsatisfactory bidders, and it will also help you determine which vendors have the skills and expertise to tackle those challenges.

// 9. Budget
// Any vendor needs to know how much you’re able to pay them for their services before they’ll move forward with their bid.