import React from 'react';
import '../../../public/mobile.css';

class Mobile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		this.setState({ expand: !this.state.expand });
	}

	render() {
		let expand;
		if (this.state.expand) {
			expand = 'menu-container-opened';
		} else {
			expand = 'menu-container-closed';
		}
		return (
			<li onClick={this.clickHandler} className="top-bar-navi">
				<a className="header-mobile-menu">Mobile</a>
				<div className="menu-right">
					<div className={expand}>
						<div className="menu-main">
							<div className="menu-section">
								<div className="menu-list">
									<a className="menu-list-link">iOS App</a>
									<a className="menu-list-link">Android App</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default Mobile;
