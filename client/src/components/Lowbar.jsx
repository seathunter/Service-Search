import React from 'react';
import '../../../public/lowbar.css';

class Lowbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<ol className="lowbar-menu">
				<li className="lowbar-list-1">
					<a className="lowbar-list-1-a">
						<span className="lowbar-list-1-span">Home</span>
					</a>
				</li>
				<li className="lowbar-list-2">
					<a className="lowbar-list-2-a">
						<span className="lowbar-list-2-span">United States</span>
					</a>
				</li>
				<li className="lowbar-list-3">
					<a className="lowbar-list-3-a">
						<span className="lowbar-list-3-span">San Francisco Bay Area</span>
					</a>
				</li>
				<li className="lowbar-list-4">
					<a className="lowbar-list-4-a">
						<span className="lowbar-list-4-span">San Francisco</span>
					</a>
				</li>
				<li className="lowbar-list-5">
					<a className="lowbar-list-5-a">
						<span className="lowbar-list-5-span">Russian Hill</span>
					</a>
				</li>
			</ol>
		);
	}
}

export default Lowbar;
