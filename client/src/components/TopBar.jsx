import React from 'react';
import Search from './Search.jsx';
import Mobile from './Mobile.jsx';
import Language from './Language.jsx';
import '../../../public/topbar.css';

class Topbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false,
			mobile: false,
			language: false
		};
	}

	render() {
		return (
			<div className="topbar">
				<section className="topbar-menu-navi">
					<li className="for-container">
						<a className="for-menu">For Restaurateurs</a>
					</li>
					<Mobile />
					<li className="help-container">
						<a className="help-menu">Help</a>
					</li>
					<Language />
				</section>
			</div>
		);
	}
}

export default Topbar;
