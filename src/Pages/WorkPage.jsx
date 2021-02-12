import React from "react";
import Wrapper from '../components/Header/Wrapper';
import styled from 'styled-components';

import ReqForProj from "../components/ResourcesProjects/UploadPhotosToWeb/docs/FillableRequestForProjectProposalTemplate.pdf"
import Desert from "../components/ResourcesProjects/UploadPhotosToWeb/docs/desert.png";


// const WorkPageStyled = styled.div;


const WorkPage=() => {
    return(
        <section id="workPage">
            <Wrapper>
                <div className="redbox">
                    <img src={Desert} alt="" id="desertImg" className="thematicImg responsive-img box-shadow"/>
                </div>
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="wrapperFloatBlogBox">
                        <div className="floatBlogBox" onClick={(e) => e.stopPropagation()}>
                            <div className="blogContainer animate"> 
                                <div id="blogContainer">
                                    <div id="blogListContainer">
                                        <ul id="blogListUL">
                                        {/* <div className="wrapperFloatDocBox" >
            <div className="floatDocBox" onClick={(e) => e.stopPropagation()}>
                <div className="resourceDiv"  > */}
                    <div>
                        <h3 className="resourceCategory">BACK</h3>
                        {/* <h2 id="rfpTitle" className="resourceName">Request For Project</h2> */}
                        <h2 className="resourceName">Request For Project</h2>
                    
                                            <div id="rfpInstructions">
                                                <h3>1. Background/Introduction</h3>
                                                <p>In your introductory paragraph, you’ll want to include useful background information about your company — who founded it, what product or service your company offers, what sets you apart from competitors, and where you’re located. If any vendor is serious about working with you, they’ll want this information before moving forward.</p>
                                                <hr/>
                                                <h3>2. Project Goals and Scope of Services</h3>
                                                <p>Next, you’ll want to outline the project you need completed, and the goals you expect to accomplish from the project. It’s important you get as specific as possible — even outlining individual tasks and criteria involved. You’ll want to include phrases such as “The award will be given to X firm,” with the “X” establishing how you’ll determine the best candidate.</p>
                                                <hr/>
                                                <h3>3. Anticipated Selection Schedule</h3>
                                                <p>It’s crucial you include a detailed schedule so vendors know if they can meet your deadlines. You’ll also need to give vendors a window for when they can ask questions regarding your project. This’ll limit the hassle, for you and for them.</p>
                                                <hr/>
                                                <h3>4. Time and Place of Submission of Proposals</h3>
                                                <p>Similar to paragraph #3, this is important information you’ll want to clearly present, so vendors know how and where to submit themselves for consideration.</p>
                                                <hr/>
                                                <h3>5. Timeline</h3>
                                                <p>By including a time frame in your RFP, we are able to identify if this project is feasible within your time constraints. If you’re flexible on your time, you can write something like, “Our company hopes to finish the project within six months, but we’re open to negotiation for the right candidate.”</p>
                                                <hr/>
                                                <h3>6. Elements of Proposal</h3>
                                                <p>If you don’t outline clearly and specifically what you expect bidders to include in their proposal, you can’t necessarily fault them if they don’t include it. It’s critical you outline a checklist so vendors know which elements you’re expecting to receive. It’s also a good test for who’s capable of handling your demands — if a vendor can’t complete all elements of your proposal, you probably can’t trust them to finish your project, either.</p>
                                                <hr/>
                                                <h3>7. Evaluation Criteria</h3>
                                                <p>Outlining your expectations will help eliminate vendors who don’t meet them. For this section, you’ll want to do some brainstorming with your team to come up with a mandatory list of items you feel are the best indicators of impressive candidates. Your list could include samples of past work, a proven success record with companies in similar industries, the expertise and technical skills to meet your demands, and a cost of services within your price range.</p>
                                                <hr/>
                                                <h3>8. Possible Roadblocks</h3>
                                                <p>Here, you’ll want to outline any roadblocks, such as limited resources or a custom website, that might prevent certain vendors from successfully completing the project. This allows you to eliminate unsatisfactory bidders, and it will also help you determine which vendors have the skills and expertise to tackle those challenges.</p>
                                                <hr/>
                                                <h3>9. Budget</h3>
                                                <p>Any vendor needs to know how much you’re able to pay them for their services before they’ll move forward with their bid.</p>
                                                <hr/>
                                            </div>
                                            </div>
                                            {/* <div id="rfpIframeContainer"> */}
                                                <div className="responsiveIframe">
                                                    <iframe id="reqForProject" className="iframeResize" title="Request For Project" src={ReqForProj} width="100%" height="315" frameBorder="0" allowFullScreen></iframe>
                                                </div>
                                            {/* </div> */}
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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