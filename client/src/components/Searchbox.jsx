import React from 'react';
import Axios from 'axios';
import '../../../public/searchbox.css';

class Searchbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ''
		};
		this.queryHandler = this.queryHandler.bind(this);
	}

	queryHandler(e) {
		if (e.target.value.length > 1) {
			this.setState({ query: e.target.value }, () => {
				Axios.post('/search', { query: this.state.query }).then((data) => {
					console.log(data);
				});
			});
		}
	}

	render() {
		return (
			<div className="picker-search-container autocomplete">
				<div className="search-icon" />
				<span className="twitter-typehead">
					<input
						onChange={this.queryHandler}
						id="dtp-search-single-box"
						type="text"
						name="searchText"
						title="Location, Restaurant, or Cuisine"
						placeholder="Location, Restaurant, or Cuisine"
						data-test="search-in-header-dtp-text-input"
						className="dtp-picker-search-autocomplete tt-input"
						aria-label="search"
						autoComplete="off"
						spellCheck="false"
						dir="auto"
						style={{
							position: 'relative',
							verticalAlign: 'top',
							backgrounColor: 'transparent'
						}}
					/>
				</span>
			</div>
		);
	}
}

export default Searchbox;
