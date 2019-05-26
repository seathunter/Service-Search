import React from 'react';
import Topbar from './TopBar.jsx';

class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationExpand: false,
			selected: 'San Francisco Bay Area',
			'Atlanta / Georgia': [
				['All Atlanta/Georgia', 6239],
				['Atlanta', 2276],
				['Alpharetta/Roswell', 360],
				['Northeast Atlanta', 899],
				['South Atlanta', 555],
				['Northwest Atlanta', 674],
				['Columbus', 175],
				['Athens', 51],
				['Augusta', 302],
				['N. GA Mountains / Wine Country', 223],
				['Macon', 260],
				['Swainsboro', 119],
				['Braselton', 41],
				['Pine Mountain', 11],
				['Southwest Georgia', 1],
				['Statesboro', 88],
				['Thomasville', 204]
			],
			'Baltimore Area': [
				['All Baltimore / Maryland', 2919],
				['Baltimore', 769],
				['Baltimore Suburbs', 1007],
				['Greater Annapolis', 249],
				['Eastern Shore', 250],
				['Western MD', 186],
				['Ocean City / Delaware Shore', 410],
				['Chambersburg', 48]
			],
			'Boston / New England': [
				['All Boston / New England', 11353],
				['Boston', 1562],
				['Boston Suburbs', 2969],
				['Central MA', 667],
				['Western MA', 772],
				['Southern MA', 463],
				['Cape Cod and the Islands', 598],
				['Maine', 1311],
				['Rhode Island', 1056],
				['Vermont', 804],
				['New Hampshire', 1151]
			],
			'Chicago / Illinois': [
				['All Chicago / Illinois', 10867],
				['Chicago', 3031],
				['North Suburbs', 902],
				['West Suburbs', 1184],
				['Northwest Suburbs', 1094],
				['Southwest Suburbs', 737],
				['Near West', 320],
				['South Suburbs', 667],
				['Central Illinois', 1233],
				['Galena', 117],
				['Northwest Indiana', 648],
				['Rockford', 268],
				['Southern Illinois', 367],
				['Rochelle', 171],
				['Northwest Illinois', 1],
				['Thomson', 122],
				['Western Illinois', 5]
			],
			Dallas: [
				['All Dallas - Fort Worth', 5785],
				['Dallas', 1380],
				['Dallas Suburbs', 2555],
				['Forth Worth', 500],
				['Mid Cities', 720],
				['Forth Worth Suburbs', 512],
				['Greenville', 39],
				['Navarro County', 2],
				['Sherman', 46],
				['Stephenville', 2],
				['Wichita Falls', 29]
			],
			'Denver / Colorado': [
				['All Denver / Colorado', 4918],
				['Denver', 1149],
				['Denver Suburbs', 1324],
				['Mountains', 715],
				['Boulder Area', 330],
				['Colorado Springs', 653],
				['Fort Collins', 426],
				['Durango', 182],
				['Gran Junction / Western', 100],
				['Estes Park', 27],
				['Allenspark', 5],
				['Southern Colorado', 7]
			],
			Houston: [
				['All Houston', 5752],
				['Houston', 4178],
				['The Woodlands', 140],
				['Sugar Land', 243],
				['Galveston', 234],
				['East Texas', 60],
				['Katy', 269],
				['Brenham', 72],
				['El Campo', 52],
				['Conroe', 44],
				['Port Lavaca', 144],
				['Kemah / Seabrook', 59],
				['Beaumont', 244],
				['Port Arthur', 13]
			],
			'Las Vegas': [
				['All Las Vegas', 2295],
				['The Strip', 572],
				['Summerlin', 212],
				['Downtown', 196],
				['Henderson', 216],
				['Lake Las Vegas', 26],
				['Jean', 3],
				['South Las Vegas', 111],
				['North Las Vegas', 201],
				['Westside', 329],
				['Boulder City', 16],
				['Eastside', 248],
				['Laughlin', 61],
				['Elko', 90],
				['Goodsprings', 10],
				['Primm', 2],
				['Southern Nevada', 2]
			],
			'Los Angeles': [
				['All Los Angeles', 10782],
				['Hollywood', 528],
				['Long Beach / Catalina', 685],
				['Inland Empire', 1599],
				['Tejon Pass', 7],
				['West Hollywood / Beverly Hills / Mid-Wilshire', 723],
				['Westside', 918],
				['San Fernando Valley / Valencia', 1627],
				['Downtown / South and East LA', 1707],
				['Beach Cities', 947],
				['Pasadena / San Gabriel', 1301],
				['Ventura County', 555],
				['Antelope Valley', 185]
			],
			'Miami / Southeast Florida': [
				['All Miami', 6411],
				['Miami - Dade County', 2878],
				['Palm Beach County', 1557],
				['Ft. Lauderdale - Broward County', 1976]
			],
			Minneapolis: [
				['All Minneapolis - St. Paul', 3600],
				['Twin Cities / Minneapolis', 828],
				['Twin Cities / Northern Suburbs', 530],
				['Twin Cities / Southern Suburbs', 331],
				['Twin Cities / Western Suburbs', 272],
				['Twin Cities / Eastern Suburbs', 181],
				['Twin Cities / St. Paul', 251],
				['Rochester', 140],
				['St. Cloud', 189],
				['Duluth', 292],
				['Mankato', 179],
				['Albert Lea / Austin', 24],
				['Central Minnesota', 257],
				['Northwest Minnesota', 124],
				['Owatonna', 1],
				['Southwest Minnesota', 1]
			],
			'New Orleans / Louisiana': [
				['All New Orleans / Louisiana', 1920],
				['New Orleans', 1668],
				['Houma', 115],
				['Leesville', 58],
				['Northshore', 79]
			],
			'New York Area': [
				['All New York / Tri-State Area', 32149],
				['Manhattan', 5501],
				['New Jersey - North', 4987],
				['New Jersey - Central', 1969],
				['New Jersey / Hamptons', 3105],
				['Connecticut', 3556],
				['Westchester / Hudson Valley', 2459],
				['Upstate New York', 1635],
				['Brooklyn', 2518],
				['Queens', 1901],
				['Western New York', 3013],
				['Staten Island', 261],
				['Bronx', 587],
				['Central New York', 657]
			],
			'Orange County': [
				['All Orange County', 2800],
				['North Orange County', 1868],
				['South Orange County', 932]
			],
			'Philadelphia Area': [
				['All Philadelphia / New Jersey Suburbs', 8869],
				['Philadelphia', 1935],
				['Western Suburbs', 1633],
				['New Jersey Suburbs', 1073],
				['Delaware', 560],
				['Bucks County ', 597],
				['Lancaster County', 364],
				['Hershey / Harrisburg', 615],
				['Lehigh Valley', 772],
				['Trenton', 125],
				['Reading/Berks County', 343],
				['York', 238],
				['Central Pennsylvania', 494],
				['Gettysburg', 110],
				['South Central Pennsylvania', 1]
			],
			Phoenix: [
				['All Phoenix / Arizona', 3373],
				['Phoenix', 862],
				['Central Arizona', 35],
				['East Valley', 859],
				['Lake Havasu City', 88],
				['Scottsdale', 534],
				['Sedona / Flagstaff / Prescott', 399],
				['Grand Canyon', 13],
				['Gila County', 22],
				['Northern Arizona', 4],
				['Pinetop-Lakeside', 53],
				['West Valley', 473],
				['Yuma', 31]
			],
			'San Diego': [
				['All San Diego', 2771],
				['San Diego', 1527],
				['North San Diego', 784],
				['Temecula / Wine County', 205],
				['East County', 249],
				['Cuyamacas', 6],
				['All San Diego', 2771],
				['San Diego', 1527],
				['North San Diego', 784],
				['Temecula / Wine County', 205],
				['East County', 249],
				['Cuyamacas', 6]
			],
			'San Francisco Bay Area': [
				['All San Francisco Bay Area', 8835],
				['San Francisco', 2010],
				['East Bay', 2541],
				['Peninsula', 1108],
				['Wine Country', 932],
				['San Jose / Silicon Valley', 1365],
				['Marin', 343],
				['Santa Cruz / Capitola / Aptos', 253],
				['Humboldt County', 145],
				['Mendocino', 136],
				['Far North', 1],
				['Lake County', 1]
			],
			'Seattle Area': [
				['All Seattle / Eastern Washington', 6332],
				['Seattle', 2025],
				['Eastside', 623],
				['North of Seattle', 601],
				['Tacoma', 650],
				['South of Seattle', 459],
				['Spokane', 420],
				['Kennewick', 276],
				['East of Seattle', 375],
				['Olympia', 242],
				['Walla Walla', 86],
				['Olympic and Kitsap Peninsulas', 5],
				['Long Beach Peninsula', 37],
				['Whidbey Island', 47],
				['Moses Lake', 20],
				['Mt. Rainier', 1],
				['North-Central Washington', 52]
			],
			Tucson: [
				['All Tucson', 768],
				['Benson', 53],
				['Sonoita', 75],
				['Southeast Arizona', 2],
				['Tubac', 27],
				['Tucson', 611]
			],
			'Washington DC': [
				['All Washington, D.C. Area', 4782],
				['District of Columbia', 934],
				['Virginia - DC Suburbs', 2384],
				['Maryland - DC Suburbs', 1464]
			]
		};
		this.clickHandler = this.clickHandler.bind(this);
		this.metroRender = this.metroRender.bind(this);
		this.metroSelector = this.metroSelector.bind(this);
		this.regionRender = this.regionRender.bind(this);
	}

	metroRender() {
		const metro = Object.keys(this.state);
		metro.splice(0, 2);
		const rows = [];
		for (let i = 0; i < metro.length; i++) {
			let classnames;
			let selected = '';
			if (metro[i] === this.state.selected) {
				selected = 'selected';
			}
			classnames = `${selected} menu-list-link`;
			rows.push(
				<a
					onClick={this.metroSelector}
					data-city={metro[i]}
					key={i}
					className={classnames}
				>
					{metro[i]}
				</a>
			);
		}
		return <div className="location-picker-metro-list">{rows}</div>;
	}

	regionRender() {
		const city = this.state.selected;
		const list = this.state[city];
		console.log(list);
		const rows = [];
		for (let i = 0; i < list.length; i++) {
			rows.push(
				<a className="menu-list-link">
					{list[i][0]}
					<span className="menu-list-link-meta">{list[i][1]}</span>
				</a>
			);
		}
		return <div className="location-picker-city-list">{rows}</div>
	}

	metroSelector(e) {
		e.preventDefault();
		console.log(e.target.dataset.city);
		this.setState({ selected: e.target.dataset.city });
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
								<div className="location-picker-menu-column" />
								<div className="menu-section">
									<div className="scrollbar" style={{ height: '396px' }}>
										<div
											className="scrollbar-slider"
											style={{ height: '172px', top: '110.816px' }}
										/>
									</div>
									<div className="lb-wrap">
										<div className="lb-content-city">
											{this.metroRender()}
										</div>
									</div>
								</div>
								<div className="menu-section">
									<div className="scrollbar" style={{ height: '396px' }}>
										<div
											className="scrollbar-slider"
											style={{ height: '301px' }}
										/>
									</div>
									<div className="lb-wrap">
										<div className="lb-content-region">
											{this.regionRender()}
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
