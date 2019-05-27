import React from 'react';
import Axios from 'axios';
import Autosuggest from 'react-autosuggest';
import '../../../public/searchtheme.css';
import '../../../public/searchbox.css';

class Searchbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			suggestions: [],
			restaurants: []
		};
		this.queryHandler = this.queryHandler.bind(this);
		this.getSuggestions = this.getSuggestions.bind(this);
		this.getSuggestionValue = this.getSuggestionValue.bind(this);
		this.renderSuggestion = this.renderSuggestion.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
			this
		);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
			this
		);
	}

	componentDidMount() {
		Axios.get('/restaurants').then((result) => {
			const { data } = result;
			const list = [];
			data.forEach((rest) => {
				list.push(rest);
			});
			this.setState({ restaurants: list });
		});
	}

	getSuggestions(value) {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		return inputLength === 0
			? []
			: this.state.restaurants.filter(
					(restaurant) =>
						restaurant.name.toLowerCase().slice(0, inputLength) === inputValue
			  );
	}

	queryHandler(event, { newValue }) {
		this.setState({
			value: newValue
		});
	}

	getSuggestionValue(suggestion) {
		return suggestion.name;
	}

	renderSuggestion(suggestion) {
		return (
			// <span className="tt-dropdown-menu">
			// 	<div className="tt-dataset-Locations"></div>
			// 	<div className="tt-dataset-Cuisines">
			// 		<h6 className="tt-header icon-cuisine">
			// 			<p>Cuisines</p>
			// 		</h6>
			// 		<span className="tt-suggestions" style={{ display: 'block' }}>

			// 		</span>
			// 		<div className="tt-footer"></div>
			// 	</div>
			// 	<div className="tt-dataset-Restaurants"></div>
			// </span>
			<span>{suggestion.name}</span>
		);
	}

	onSuggestionsFetchRequested({ value }) {
		this.setState({ suggestions: this.getSuggestions(value) });
	}

	onSuggestionsClearRequested() {
		this.setState({ suggestions: [] });
	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
			placeholder: 'Location, Restaurant, or Cuisine',
			value,
			onChange: this.queryHandler,
			// className: 'dtp-picker-search-autocomplete',
			style: {
				position: 'relative',
				verticalAlign: 'top',
				backgrounColor: 'transparent'
			},
			id: 'dtp-search-single-box',
			name: 'searchText',
			dir: 'auto',
			spellCheck: 'false',
			autoComplete: 'off'
		};
		return (
			<div className="picker-search-container autocomplete">
				<div className="search-icon" />
				<span className="twitter-typehead">
					{/* <input
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
					/> */}
					<Autosuggest
						suggestions={suggestions}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						getSuggestionValue={this.getSuggestionValue}
						renderSuggestion={this.renderSuggestion}
						inputProps={inputProps}
					/>
				</span>
			</div>
		);
	}
}

export default Searchbox;
