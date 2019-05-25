import React from 'react';
import Topbar from './TopBar.jsx';

class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationExpand: false,
			Atlanta: [
				'All Atlanta/Georgia',
				'Atlanta',
				'Alpharetta/Roswell',
				'Northeast Atlanta',
				'South Atlanta',
				'Northwest Atlanta',
				'Columbus',
				'Athens',
				'Augusta',
				'N. GA Mountains / Wine Country',
				'Macon',
				'Swainsboro',
				'Braselton',
				'Pine Mountain',
				'Southwest Georgia',
				'Statesboro',
				'Thomasville'
			],
			Baltimore: [['All Baltimore / Maryland', 2919], ['Baltimore', 769], ['Baltimore Suburbs', 1007], ['Greater Annapolis', 249], ['Eastern Shore', 250], ['Western MD', 186]]
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
			<nav className="location-picker">
				<a onClick={this.clickHandler} className="location-toggle-menu">
					<div className="location-picker-metro">San Francisco Bay Area</div>
					<div className="location-picker-region">San Francisco</div>
				</a>
				<div className="location-picker-menu">
					<div className={menuExpand}>
						<div className="location-menu-main">
							<div className="location-menu-header">
								<div className="location-row">
									<div className="location-picker-menu-header">Metro</div>
									<div className="location-picker-menu-header">Region</div>
								</div>
							</div>
							<div className="location-menu-body">
								<div className="location-picker-menu-column"></div>
								<div className="menu-section">
									<div className="scrollbar" style={{ height: '396px' }}>
										<div className="scrollbar-slider" style={{ height: '172px', top: '110.816px' }}></div>
									</div>
									<div className="lb-wrap">
										<div className="lb-content-city">
											<div className="location-picker-metro-list">
												<a data-metro="16" className="menu-list-link">Atlanta / Georgia</a>
												<a data-metro="18" className="menu-list-link">Baltimore Area</a>
												<a data-metro="3" className="menu-list-link">Chicago / Illinois</a>
												<a data-metro="20" className="menu-list-link">Dallas</a>
												<a data-metro="5" className="menu-list-link">Denver / Colorado</a>
												<a data-metro="12" className="menu-list-link">Houston</a>
												<a data-metro="10" className="menu-list-link">Las Vegas</a>
												<a data-metro="6" className="menu-list-link">Los Angeles</a>
												<a data-metro="17" className="menu-list-link">Miami / Southeast Florida</a>
												<a data-metro="46" className="menu-list-link">Minneapolis</a>
												<a data-metro="14" className="menu-list-link">New Orleans / Louisiana</a>
												<a data-metro="8" className="menu-list-link">New York Area</a>
												<a data-metro="496" className="menu-list-link">Orange County</a>
												<a data-metro="13" className="menu-list-link">Philadelphia Area</a>
												<a data-metro="50" className="menu-list-link">Phoenix</a>
												<a data-metro="15" className="menu-list-link">San Diego</a>
												<a data-metro="4" className="menu-list-link selected">San Francisco Bay Area</a>
												<a data-metro="2" className="menu-list-link">Seattle Area</a>
												<a data-metro="3375" className="menu-list-link">Tucson</a>
												<a data-metro="9" className="menu-list-link">Washington DC</a>
											</div>
										</div>
									</div>
								</div>
								<div className="menu-section">
									<div className="scrollbar" style={{ height:'396px' }}>
										<div className="scrollbar-slider" style={{ height: '301px' }}></div>
									</div>
									<div className="lb-wrap">
										<div className="lb-content-region">
											<div className="location-picker-city-list">
												<a className="menu-list-link clear-metro-history" data-macro="0">All San Francisco Bay Area<span className="menu-list-link-meta">8832</span></a>
												<a className="menu-list-link selected" data-macro="5">San Francisco<span className="menu-list-link-meta">2008</span></a>
												<a className="menu-list-link" data-macro="6">East Bay<span className="menu-list-link-meta">2540</span></a>
												<a className="menu-list-link" data-macro="8">Peninsula<span className="menu-list-link-meta">1108</span></a>
												<a className="menu-list-link" data-macro="39">Wine Country<span className="menu-list-link-meta">932</span></a>
												<a className="menu-list-link" data-macro="9">San Jose / Silicon Valley<span className="menu-list-link-meta">1365</span></a>
												<a className="menu-list-link" data-macro="7">Marin<span className="menu-list-link-meta">343</span></a>
												<a className="menu-list-link" data-macro="116">Santa Cruz / Capitola / Aptos<span className="menu-list-link-meta">253</span></a>
												<a className="menu-list-link" data-macro="1738">Humboldt County<span className="menu-list-link-meta">145</span></a>
												<a className="menu-list-link" data-macro="2062">Mendocino<span className="menu-list-link-meta">136</span></a>
												<a className="menu-list-link" data-macro="3313">Far North<span className="menu-list-link-meta">1</span></a>
												<a className="menu-list-link" data-macro="9324">Lake County<span className="menu-list-link-meta">1</span></a>
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
		);
	}
}

export default Location;
