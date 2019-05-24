import React from 'react';
import Search from './Search.jsx';
import Mobile from './Mobile.jsx';
import '../../../public/topsearchbar.css';

class TopSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: false,
			mobile: false,
			language: false
		};
	}

	render() {
		return (
			<div>
				<Mobile />
			</div>
			// <div className="site-header">
			// 	<div className="utility-bar">
			// 		<section className="top-bar-nav">
			// 			<ul>
			// 				<li className="for-restaurateurs">
			// 					<a className="top-bar-nav-link">For Restaurateurs</a>
			// 				</li>
			// 				<li className="mobile">
			// 					<a>Mobile</a>
			// 					<div className="mobile-menu">
			// 						<div className="menu-container">
			// 							<div className="menu-main">
			// 								<div className="menu-section">
			// 									<div className="menu-list">
			// 										<a className="menu-list-link">iOS App</a>
			// 										<a className="menu-list-link">Android App</a>
			// 									</div>
			// 								</div>
			// 							</div>
			// 						</div>
			// 					</div>
			// 				</li>
			// 				<li className="help">
			// 					<a className="top-bar-nav-link">Help</a>
			// 				</li>
			// 				<li className="lang">
			// 					<div className="language-selector">
			// 						<a className="language-selector-toggle">
			// 							<div className="language-icon">
			// 								<div className="iconLanguageSelector"></div>
			// 							</div>
			// 							<div className="language-name">EN</div>
			// 						</a>
			// 						<div className="language-menu">
			// 							<div className="menu-container">
			// 								<div className="menu-main">
			// 									<div className="menu-section">
			// 										<div className="lagnuage-selector-menu-list-selector">
			// 											<a className="de">Deutsch</a>
			// 											<a className="en">English</a>
			// 											<a className="es">Español</a>
			// 											<a className="fr">Français</a>
			// 											<a className="it">Italiano</a>
			// 											<a className="nl">Nederlands</a>
			// 											<a className="ja">日本語</a>
			// 										</div>
			// 									</div>
			// 								</div>
			// 							</div>
			// 						</div>
			// 					</div>
			// 				</li>
			// 			</ul>
			// 		</section>
			// 		{/* <Search /> */}
			// 		<div className="top-bar"></div>
			// 	</div>
			// </div>
		);
	}
}

export default TopSearchBar;
