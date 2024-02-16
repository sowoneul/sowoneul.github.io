import React from 'react';
import MenuButton from './MenuButton.js';
import './App.css';
import './Menu.css';
import Poyoyo from './img/PoyoyoVibin.png';
import Bestdori from './img/bestdori.png';
import Github from './img/github.png';
import Discord from './img/discord.png';
import Anilist from './img/anilist.png';

class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
    	this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({
			visible: !this.state.visible
		})
	}

	handleMouseDown(e) {
		this.toggleMenu();
		// e.stopPropagation();
	}

	render() {
		var visiblility = "hide";

		if (this.state.visible) {
			visiblility ="show";
		}

		return (
			<div>
				<MenuButton handleMouseDown={this.handleMouseDown} vis={visiblility} />
				<div className={'menu ' + visiblility}>
					<img src={Poyoyo} className='icon'/>
					<div className='menuTitle'>about</div>
	            	<div className='menuText'>
	            		a <a href='https://en.wikipedia.org/wiki/BanG_Dream!' target='_blank'>BanG Dream!</a> fan making projects for fun
	            	</div>
	            	<div className='menuItems'>
	            		<br/>
	            		<a href='https://bestdori.com/community/user/Sowoneul' target='_blank'>
	            			<img className='item' title='Bestdori Profile' src={Bestdori} height='35px'/>
	            		</a>
	            		<a href='https://github.com/sowoneul' target='_blank'>
	            			<img className='item' title='Github' src={Github} height='35px' />
	            		</a>
	            		<a href='https://discord.gg/bangdream' target='_blank'>
	            			<img className='item' title='BanG Dream! Official Discord Server' src={Discord} height='35px' />
	            		</a>
	            		<br/>
	            		<a href='https://bit.ly/bandoriinfo' title='a self made infographic' target='_blank'>why play bandori?</a>
	            	</div>
	            </div>
	            <div className={'outside ' + visiblility} onMouseDown={this.handleMouseDown}></div>
	        </div>
		)
	}	
}

export default Menu;