import React from 'react';
import '../../../public/mobile.css';

class Mobile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false,
			mobile: false
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		this.setState({ expand: !this.state.expand, mobile: !this.state.mobile });
	}

	render() {
		let expand;
		if (this.state.expand) {
			expand = 'menu-container-opened';
		} else {
			expand = 'menu-container-closed';
		}
		let mobile;
		if (this.state.mobile) {
			mobile = 'menu-right-opened';
		} else {
			mobile = 'menu-right-closed';
		}
		return (
			<li onClick={this.clickHandler} className="top-bar-navi">
				<a className="header-mobile-menu">Mobile</a>
				<div className={mobile}>
					<div className={expand}>
						<div className="main-menu">
							<div className="main-section">
								<div className="list-holder">
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
