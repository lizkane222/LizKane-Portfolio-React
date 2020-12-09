import React, {Component} from "react";

class Project extends Component {
    state = {
        active: false,
        visited: false,
    }

    render() {
        return(
            <div>
                {this.props.name}
                <img src={this.props.logo} alt={this.props.name + "logo"} style={this.props.style}/>
                <div><p className="projectDescription">{this.props.description}</p></div>
            </div>
        )
    }
}

export default Project;