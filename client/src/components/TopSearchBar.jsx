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
	}

	render() {
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
							<div className="topbar-menu-wrapper">
								<div className="oc-component">
									<a className="reservation" />
								</div>
							</div>
						</li>
						<User />
						<li className="top-bar-nav-li">
							<a className="top-bar-nav-link">
								<i onClick={this.props.expandHandler} className="icon-search" />
							</a>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default TopSearchBar;
