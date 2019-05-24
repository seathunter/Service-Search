import React from 'react';
import '../../../public/language.css';

class Language extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false
		};
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		e.preventDefault();
		this.setState({ expand: !this.state.expand });
	}

	render() {
		let expand;
		if (this.state.expand) {
			expand = 'menu-container-opened';
		} else {
			expand = 'menu-container-closed';
		}
		return (
			<li onClick={this.clickHandler} className="language-container">
				<div className="language-selector">
					<a className="js-toggle-menu">
						<div className="language-icon">
							<div className="iconLanguageSelector" />
						</div>
						<div className="language-name">EN</div>
					</a>
					<div className="language-selector-menu">
						<div className={expand}>
							<div className="menu-main">
								<div className="menu-section">
									<div className="menu-list-selectors">
										<a className="js-language-list" data-lang="de">
											Deutsch
										</a>
										<a className="js-language-list-highlighted" data-lang="en">
											English
										</a>
										<a className="js-language-list" data-lang="es">
											Español
										</a>
										<a className="js-language-list" data-lang="fr">
											Français
										</a>
										<a className="js-language-list" data-lang="it">
											Italiano
										</a>
										<a className="js-language-list" data-lang="nl">
											Nederlands
										</a>
										<a className="js-language-list" data-lang="ja">
											日本語
										</a>
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

export default Language;
