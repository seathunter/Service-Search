import React from 'react';
import '../../../public/user.css';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userExpand: false };
		this.userExpandHandler = this.userExpandHandler.bind(this);
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
			if (this.state.userExpand) {
				this.setState({ userExpand: !this.state.userExpand });
			}
		}
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
			<li
				ref={this.setWrapperRef}
				onClick={this.userExpandHandler}
				className="user-info-container"
			>
				<a className="top-bar-nav-username">Hi, Chris</a>
				<div className={menu}>
					<div className={container}>
						<div className="user-menu-main">
							<div className="user-menu-section-with-padding">
								<div className="user-points">
									<div className="cf">
										<div className="left">
											<div className="font-size-tiny">Earned</div>
											<div className="points-text">
												<span className="font-weight-medium">0</span>
												<span className="font-size-small color-light">PTS</span>
											</div>
										</div>
										<div className="right text-right">
											<div className="font-size-tiny">New Reward</div>
											<div className="points-text">
												<span className="font-weight-medium">2000</span>
												<span className="font-size-small color-light">PTS</span>
											</div>
										</div>
									</div>
									<div className="points-bar">
										<div className="points-bar-earned" />
									</div>
									<a className="learn-points">Learn more about points</a>
								</div>
							</div>
							<div className="menu-divider" />
							<div className="user-menu-section">
								<div className="user-menu-list">
									<a className="user-menu-list-link">My Profile</a>
									<a className="user-menu-list-link">My Dining History</a>
									<a className="user-menu-list-link">My Saved Restaurants</a>
									<a className="user-menu-list-link">Sign Out</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		);
	}
}

export default User;
