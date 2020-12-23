import React, {Component} from "react";

class Item extends Component {
    state = {
        active: false,
        visited: false,
    }

    render() {
        return(


                <img src={this.props.img} alt={this.props.name} style={this.props.style} id={this.props.name}/>

        )
    }
}

export default Item;