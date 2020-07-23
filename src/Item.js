import React from 'react';
import './App.css';
import './Item.css';

class Item extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {link: this.props.link};
	}

	render() {
		return (
			<div className={'thumbnail ' + this.props.type}>
                  <a href={this.props.link} class="invisLink"></a>
            </div>
		)
	}	
}

export default Item;