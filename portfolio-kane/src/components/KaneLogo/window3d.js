import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 47.5,
            y: -2.53807
        }
    }

    _onMouseMove = (e) => {
        const width = this.refs.titleContainer.clientWidth;
        const height = this.refs.titleContainer.clientHeight;
        const oX = (e.nativeEvent.offsetX/width) * 100;
        const oY = (e.nativeEvent.offsetY/height) * 100;
        // console.log(Math.floor(oX), Math.floor(oY));
        this.setState({
            x: oX,
            y: oY
        });
    }

    _onMouseOut = () => {
        this.setState({
            x: 47.5,
            y: -2.53807
        });
        const style={transition: 'all 2s ease-out'}
    }

    render() {
        const {text} = this.props;
        const {x, y} = this.state;
        const maskStyle = {
            '--maskX': x,
            '--maskY': y,
        }
        return (
            <div className="titleContainer"
                onMouseMove={this._onMouseMove}
                onMouseOut={this._onMouseOut}
                ref="titleContainer"
                style={maskStyle}
            >
                <div className="titleWrapper">
                    <>{text}</>
                </div>
                <div className="titleWrapper cloneWrapper">
                    <>{text}</>
                </div>
            </div>
        )
    }
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title;