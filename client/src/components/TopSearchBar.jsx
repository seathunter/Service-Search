import React from 'react';
import '../../../public/topsearchbar.css';
import User from './User.jsx';
import Topbar from './TopBar.jsx';
import Reservation from './Reservation.jsx';
import Location from './Location.jsx';
import logo from '../logo.jsx';

class TopSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="topsearchbar">
				<div className="top-bar-logo">
					<div className="logo-text">FreeSeat
						<a className="logo-pic">{logo}</a>
					</div>
				</div>
				<Location />
				<section className="top-bar-nav">
					<ul className="top-bar-selection">
						<li className="recently-viewed" />
						<Reservation />
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
