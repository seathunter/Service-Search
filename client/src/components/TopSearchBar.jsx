import React from 'react';
import '../../../public/topsearchbar.css';
import User from './User.jsx';
import Topbar from './TopBar.jsx';
import Location from './Location.jsx';

class TopSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userExpand: false,
			reservationExpand: false
		};
		this.reservationHandler = this.reservationHandler.bind(this);
	}

	reservationHandler(e) {
		e.preventDefault();
		this.setState({ reservationExpand: !this.state.reservationExpand });
	}

	render() {
		let reservation;
		let menu;
		if (this.state.reservationExpand) {
			reservation = 'reservation-menu-container-opened';
			menu = 'reservation-menu-opened';
		} else {
			reservation = 'reservation-menu-container-closed';
			menu = 'reservation-menu-closed';
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
							<div className="topbar-menu-wrapper">
								<div className="oc-component">
									<a onClick={this.reservationHandler} className="reservation">
										<div className="upcoming-reservation-count">1</div>
									</a>
									<div
										className={menu}
									>
										<div className={reservation}>
											<div className="reservation-menu-main">
												<div className="reservation-menu--header">Upcoming</div>
												<div className="reservation-menu-section">
													<div className="upcoming-reservations">
														<div className="upcoming-res">
															<div className="upcoming-res-name">
																<a className="res-name">Kinjo</a>
															</div>
															<div className="upcoming-res-party">
																Table for 2 people
															</div>
															<div className="upcoming-res-date">
																Jun 19, 2019 6:30 PM
															</div>
															<div className="upcoming-res-links">
																<div className="reservation-left">
																	<a className="invite">Invite</a>
																</div>
																<div className="reservation-right">
																	<a className="view">View</a>
																	<a className="modify">Modify</a>
																	<a className="cancel">Cancel</a>
																</div>
															</div>
														</div>
													</div>
													<div className="reservation-footer">
														<a className="reservation-footer-text">View All</a>
													</div>
												</div>
											</div>
										</div>
									</div>
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
