import React, {Component} from "react";

import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

class TextItem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                <h4 id="quotesLeft" ><ImQuotesLeft className=" float-left"/></h4>
                
                {this.props.id}

                <h4 id="quotesRight" ><ImQuotesRight className=" float-right"/></h4>
            </div>
        )
    }
}

export default TextItem

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// ReactDOM.render(<Carousel items={items} active={0}/>, document.getElementById('app'))