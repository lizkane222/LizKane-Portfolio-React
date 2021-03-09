import React, { Component } from "react";

// import RecentPostText from "./RecentPostText";

class RecentPost extends Component {

    state = {
        active: false,
        visited: false,
    }
    
    setActive = () => {
        {!this.state.active ?
            this.setState(state => (
                {active: !this.state.active}
                
            ))
        :
            this.setState(
                {active: false}
            )
        }
    };

    showText = () => {

    }

    render(){
        return (
            <>
            {/* textContainerActive={textContainerActive} setTextContainerActive={setTextContainerActive} */}
                {/* {this.state.active ? */}
                {this.props.textContainerActive ?
                    <>
                        {/* <img src={this.props.imgSrc} onMouseOver={this.setActive} className="recPostImg" alt={this.props.imgDesc}/> */}

                        {/* <section className="recPostSection"> */}
                                {/* <RecentPostText props={this.props}/> */}
                        {/* </section> */}

                        <p>HELLO TEXT CONTAINER IS ACTIVE</p>
                        {/* <img src={this.props.imgSrc} onMouseOver={this.setActive} className="recPostImg" alt={this.props.imgDesc}/> */}
                    </>
                :
                    <>
                        <img src={this.props.imgSrc} onMouseOver={this.setActive} className="recPostImg" alt={this.props.imgDesc}/>
                    </>
                }
                    {/* {this.state.active ?                    */}
                    {/* {this.props.active ?
                        <>
                            <section className="recPostSection">
                                <div className="recPostTitle" ><span>{this.props.title}</span></div>
                                <p className="recPostP1">{this.props.recPostP1}</p>
                                <p className="recPostP2">{this.props.recPostP2}</p>
                                <p className="recPostP3">{this.props.recPostP3}</p>
                                <p className="recPostP4">{this.props.recPostP4}</p>
                                <p className="recPostP5">{this.props.recPostP5}</p>
                                <p className="recPostP6">{this.props.recPostP6}</p>
                                <p className="recPostP7">{this.props.recPostP7}</p>
                                <p className="recPostP8">{this.props.recPostP8}</p>
                                <p className="recPostP9">{this.props.recPostP9}</p>
                                <p className="recPostP10">{this.props.recPostP10}</p>
                                <p className="recPostP11">{this.props.recPostP11}</p>
                                <p className="recPostP12">{this.props.recPostP12}</p>
                                <p className="recPostP13">{this.props.recPostP13}</p>
                                <p className="recPostP14">{this.props.recPostP14}</p>
                                <p className="recPostP15">{this.props.recPostP15}</p>
                                <p className="recPostP16">{this.props.recPostP16}</p>
                                <p className="recPostP17">{this.props.recPostP17}</p>
                                <p className="recPostP18">{this.props.recPostP18}</p>
                                <p className="recPostP19">{this.props.recPostP19}</p>
                                <p className="recPostP20">{this.props.recPostP20}</p>
                            </section>
                        </>
                        :[]
                    } */}
            </> 
        )
    }
}

export default RecentPost;