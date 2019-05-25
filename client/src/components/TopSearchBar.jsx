import React from 'react';
import '../../../public/topsearchbar.css';
import Topbar from './TopBar.jsx';
import Location from './Location.jsx';

class TopSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationExpand: false,
		};
	}

	render() {
		return (
			<div className="topsearchbar">
				<div className="top-bar-logo">
					<a className="logo-pic"></a>
				</div>
				<Location />
				<section className="top-bar-nav">
					<ul className="top-bar-selection">
						<li className="recently-viewed"></li>
						<li className="upcoming-reservation-calendar">
							<div className="menu-wrapper">
								<div className="oc-component">
									<a className="reservation"></a>
								</div>
							</div>
						</li>
						<li className="user-info-container">
							<a className="top-bar-nav-username">Hi, Chris</a>
						</li>
						<li className="top-bar-nav-li">
							<a className="top-bar-nav-link">
								<i className="icon-search"></i>
							</a>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default TopSearchBar;
