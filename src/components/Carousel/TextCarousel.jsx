import React, {Component} from "react";
// import "./textCarousel.css"
import "../../styles/CarouselStyle/textCarousel.css"
import Item from "./TextItem"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';


class TextCarousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items: this.props.items,
			active: this.props.active,
			direction: ''
		}
		this.rightClick = this.moveRight.bind(this)
		this.leftClick = this.moveLeft.bind(this)
	}

	generateItems() {
		let items = []
		let level
		console.log(this.state.active)
		for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
			let index = i
			if (i < 0) {
				index = this.state.items.length + i
			} else if (i >= this.state.items.length) {
				index = i % this.state.items.length
			}
			level = this.state.active - i
			items.push(<Item key={index} id={this.state.items[index]} level={level} />)
		}
		return items
	}
	
	moveLeft() {
		let newActive = this.state.active
		newActive--
		this.setState({
			active: newActive < 0 ? this.state.items.length - 1 : newActive,
			direction: 'left'
		})
	}
	
	moveRight() {
		let newActive = this.state.active
		this.setState({
			active: (newActive + 1) % this.state.items.length,
			direction: 'right'
		})
	}
	
	render() {
		return(
			<div id="textCarouselContainer">
				<div id="carousel" className="noselect">
					<div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left">{<FaArrowLeft/>}</i></div>
					<TransitionGroup 
						transitionName={this.state.direction}>
							<div className="textCarouselItem">
								{this.generateItems()}
							</div>
					</TransitionGroup>
					<div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right">{<FaArrowRight/>}</i></div>
				</div>
			</div>
		)
	}
}

export default TextCarousel;