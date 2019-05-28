import React from 'react';
import '../../../public/language.css';

class Language extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: false,
			language: false
		};
		this.clickHandler = this.clickHandler.bind(this);
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
			if (this.state.expand) {
				this.setState({ expand: !this.state.expand });
			}
		}
	}

	clickHandler(e) {
		e.preventDefault();
		this.setState({
			expand: !this.state.expand,
			language: !this.state.language
		});
	}

	render() {
		let expand;
		if (this.state.expand) {
			expand = 'menu-container-opened';
		} else {
			expand = 'menu-container-closed';
		}
		let language;
		if (this.state.language) {
			language = 'language-selector-menu-opened';
		} else {
			language = 'language-selector-menu-closed';
		}
		return (
			<li
				ref={this.setWrapperRef}
				onClick={this.clickHandler}
				className="language-container"
			>
				<div className="language-selector">
					<a className="js-toggle-menu">
						<div className="language-icon">
							<div className="iconLanguageSelector" />
						</div>
						<div className="language-name">EN</div>
					</a>
					<div className={language}>
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
