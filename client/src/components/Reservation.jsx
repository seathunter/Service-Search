import React from 'react';
import '../../../public/reservation.css';

class Reservation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reservationExpand: false
		};
		this.reservationHandler = this.reservationHandler.bind(this);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	setWrapperRef(node) {
		this.wrapperRef = node;
	}

	handleClickOutside(event) {
		if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
			if (this.state.reservationExpand) {
				this.setState({ reservationExpand: !this.state.reservationExpand });
			}
		}
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
			<li className="upcoming-reservation-calendar">
				<div className="topbar-menu-wrapper">
					<div className="oc-component">
						<a ref={this.setWrapperRef} onClick={this.reservationHandler} className="reservation">
							<div className="upcoming-reservation-count">1</div>
						</a>
						<div className={menu}>
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
		);
	}
}

export default Reservation;
