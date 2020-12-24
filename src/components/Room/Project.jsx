import React, {Component, setState} from "react";
import FloatBox from "./FloatBox/FloatBox"


class Project extends Component {
    state = {
        active: false,
        visited: false,
    }
    // this.setActive= this.setActive.bind(this)

    // setActive = () => {
    //     if(!this.state.active){
    //         this.setState(state => (
    //             {active: !this.state.active}
    //         )
    //     )}
    //     else {
    //         this.setState(
    //             {active: false}
    //         )}
    // };
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

    setVisited = () => {
        {!this.state.visited ?
            this.setState(
                {visited: !this.state.visited})
        :
            this.setState(
                {visited: false})
        }
    }

    render() {
        return(
            <div>
                <div className={this.state.visited ? "visitedProject droppable inactiveProject" : "inactiveProject"} onClick={this.setActive}>
                        <img className="projectLogoInactive" id={this.props.name} src={this.props.logo} alt={this.props.name + "logo"} style={this.props.style}/>
                </div>
                {this.state.active &&
                <>
                <FloatBox logo={this.props.logo} name={this.props.name} description={this.props.description} github={this.props.github} github2={this.props.github2} gallery={this.props.gallery} style={this.props.style} setActive={this.setActive}/>
                </>
                }
            </div>
        )}
}

export default Project;