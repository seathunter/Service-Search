import React from 'react';
import '../../../public/topsearchbar.css';
import Topbar from './TopBar.jsx';

class TopSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationExpand: false
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.setState({ locationExpand: !this.state.locationExpand });
	}

	render() {
		let menuExpand;
		if (this.state.locationExpand) {
			menuExpand = 'location-menu-container-opened';
		} else {
			menuExpand = 'location-menu-container-closed';
		}
		return (
			<div className="topsearchbar">
				<div className="top-bar-logo">
					<a className="logo-pic"></a>
				</div>
				<nav className="location-picker">
					<a onClick={this.clickHandler} className="location-toggle-menu">
						<div className="location-picker-metro">San Francisco Bay Area</div>
						<div className="location-picker-region">San Francisco</div>
					</a>
					<div className="location-picker-menu">
						<div className={menuExpand}>
							<div className="menu-main">
								<div className="menu-header">
									<div className="row">
										<div className="location-picker-menu-header">Metro</div>
										<div className="location-picker-menu-header">Region</div>
									</div>
								</div>
								<div className="menu-body">
									<div className="location-picker-menu-column"></div>
									<div className="menu-section">
										<div className="scrollbar" style={{ height: '396px' }}>
											<div className="scrollbar-slider" style={{ height: '172px', top: '110.816px' }}></div>
										</div>
										<div className="lb-wrap">
											<div className="lb-content">
												<div className="location-picker-metro-list">
													<a href="/atlanta-restaurants" data-metro="16" className="menu-list-link">Atlanta / Georgia</a>
													<a href="/baltimore-restaurants" data-metro="18" className="menu-list-link">Baltimore Area</a>
													<a href="/chicago-restaurants" data-metro="3" className="menu-list-link">Chicago / Illinois</a>
													<a href="/dallas-restaurants" data-metro="20" className="menu-list-link">Dallas</a>
													<a href="/denver-restaurants" data-metro="5" className="menu-list-link">Denver / Colorado</a>
													<a href="/houston-restaurants" data-metro="12" className="menu-list-link">Houston</a>
													<a href="/las-vegas-restaurants" data-metro="10" className="menu-list-link">Las Vegas</a>
													<a href="/los-angeles-restaurants" data-metro="6" className="menu-list-link">Los Angeles</a>
													<a href="/miami-restaurants" data-metro="17" className="menu-list-link">Miami / Southeast Florida</a>
													<a href="/minneapolis-restaurants" data-metro="46" className="menu-list-link">Minneapolis</a>
													<a href="/new-orleans-restaurants" data-metro="14" className="menu-list-link">New Orleans / Louisiana</a>
													<a href="/new-york-city-restaurants" data-metro="8" className="menu-list-link">New York Area</a>
													<a href="/orange-county-restaurants" data-metro="496" className="menu-list-link">Orange County</a>
													<a href="/philadelphia-restaurants" data-metro="13" className="menu-list-link">Philadelphia Area</a>
													<a href="/phoenix-restaurants" data-metro="50" className="menu-list-link">Phoenix</a>
													<a href="/san-diego-restaurants" data-metro="15" className="menu-list-link">San Diego</a>
													<a href="/san-francisco-restaurants" data-metro="4" className="menu-list-link selected">San Francisco Bay Area</a>
													<a href="/seattle-restaurants" data-metro="2" className="menu-list-link">Seattle Area</a>
													<a href="/c/tucson-restaurants" data-metro="3375" className="menu-list-link">Tucson</a>
													<a href="/washington-dc-restaurants" data-metro="9" className="menu-list-link">Washington DC</a>
												</div>
											</div>
										</div>
									</div>
									<div className="menu-section">
										<div className="scrollbar" style={{ height:'396px' }}>
											<div className="scrollbar-slider" style={{ height: '301px' }}></div>
										</div>
										<div className="lb-wrap">
											<div className="lb-content">
												<div className="location-picker-city-list">
													<a href="/san-francisco-restaurants" data-clear-metro-history="4" className="menu-list-link clear-metro-history" data-macro="0">All San Francisco Bay Area<span className="menu-list-link-meta">8832</span></a>
													<a href="/i/san-francisco/san-francisco-restaurants" className="menu-list-link selected" data-macro="5">San Francisco<span className="menu-list-link-meta">2008</span></a>
													<a href="/g/san-francisco/east-bay-restaurants" className="menu-list-link" data-macro="6">East Bay<span className="menu-list-link-meta">2540</span></a>
													<a href="/g/san-francisco/peninsula-restaurants" className="menu-list-link" data-macro="8">Peninsula<span className="menu-list-link-meta">1108</span></a>
													<a href="/g/san-francisco/wine-country-restaurants" className="menu-list-link" data-macro="39">Wine Country<span className="menu-list-link-meta">932</span></a>
													<a href="/g/san-francisco/san-jose-silicon-valley-restaurants" className="menu-list-link" data-macro="9">San Jose / Silicon Valley<span className="menu-list-link-meta">1365</span></a>
													<a href="/g/san-francisco/marin-restaurants" className="menu-list-link" data-macro="7">Marin<span className="menu-list-link-meta">343</span></a>
													<a href="/g/san-francisco/santa-cruz-capitola-aptos-restaurants" className="menu-list-link" data-macro="116">Santa Cruz / Capitola / Aptos<span className="menu-list-link-meta">253</span></a>
													<a href="/g/san-francisco/humboldt-county-restaurants" className="menu-list-link" data-macro="1738">Humboldt County<span className="menu-list-link-meta">145</span></a>
													<a href="/g/san-francisco/mendocino-restaurants" className="menu-list-link" data-macro="2062">Mendocino<span className="menu-list-link-meta">136</span></a>
													<a href="/san-francisco-restaurants?mn=3313" className="menu-list-link" data-macro="3313">Far North<span className="menu-list-link-meta">1</span></a>
													<a href="/san-francisco-restaurants?mn=9324" className="menu-list-link" data-macro="9324">Lake County<span className="menu-list-link-meta">1</span></a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="menu-footer">
									<a className="secondary">Full List of Metros</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
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
