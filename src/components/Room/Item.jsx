import React, {Component} from "react";

class Item extends Component {
    state = {
        active: false,
        visited: false,
    }

    render() {
        return(
            <div>
                {this.props.name}
                <img src={this.props.img} alt="" style={this.props.style}/>

            </div>
        )
    }
}

export default Item;