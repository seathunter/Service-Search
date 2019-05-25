import React from 'react';
import '../../../public/topsearchbar.css';
import User from './User.jsx';
import Topbar from './TopBar.jsx';
import Location from './Location.jsx';

class TopSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userExpand: false
		};
		this.userExpandHandler = this.userExpandHandler.bind(this);
	}

	userExpandHandler(e) {
		e.preventDefault();
		this.setState({ userExpand: !this.state.userExpand });
	}

	render() {
		let menu;
		let container;
		if (this.state.userExpand) {
			container = 'user-menu-container-opened';
			menu = 'user-menu-opened';
		} else {
			container = 'user-menu-container-closed';
			menu = 'user-menu-closed';
		}
		return (
			<div className="topsearchbar">
				<div className="top-bar-logo">
					<a className="logo-pic" />
				</div>
				<Location />
				<section className="top-bar-nav">
					<ul className="top-bar-selection">
						<li className="recently-viewed" />
						<li className="upcoming-reservation-calendar">
							<div className="menu-wrapper">
								<div className="oc-component">
									<a className="reservation" />
								</div>
							</div>
						</li>
						{/* <li
							onClick={this.userExpandHandler}
							className="user-info-container"
						>
							<a className="top-bar-nav-username">Hi, Chris</a>
							<div className={menu}>
								<div className={container}>
									<div className="user-menu-main">
										<div className="user-menu-section with-padding">
											<div className="user-points">
											
											</div>
										</div>
										<div className="menu-divider" />
										<div className="user-menu-section"></div>
									</div>
								</div>
							</div>
						</li> */}
						<User />
						<li className="top-bar-nav-li">
							<a className="top-bar-nav-link">
								<i className="icon-search" />
							</a>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default TopSearchBar;
