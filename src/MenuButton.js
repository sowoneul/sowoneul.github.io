import React from 'react';
import './App.css';
import './Menu.css';

class MenuButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'menuButton ' + this.props.vis} 
				onMouseDown={this.props.handleMouseDown}></div>
		)
	}	
}

export default MenuButton;