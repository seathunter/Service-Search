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
			restaurants: [],
			cuisines: [],
			locations: [],
			list: []
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
			// const list = [];
			// data.forEach((rest) => {
			// 	list.push(rest);
			// });
			// this.setState({ restaurants: list });
			const locations = [];
			const cuisines = [];
			const restaurants = [];
			data.forEach((info) => {
				locations.push(info.locations);
				cuisines.push(info.cuisines);
				restaurants.push(info.restaurants);
			});
			const { list } = this.state;
			list.push(
				{ title: locations, query: locations },
				{ title: cuisines, query: cuisines },
				{ title: restaurants, query: restaurants }
			);
			this.setState({
				locations,
				cuisines,
				restaurants,
				list
			});
		});
	}

	getSuggestions(value) {
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;
		// if (inputLength === 0) {
		// 	result = 0;
		// }

		// for (let i = 0; i < this.state.restaurants.length; i++) {
		// 	let obj = this.state.restaurants[i];
		// 	for (let key of obj){
		// 		console.log(obj.key);
		// 	}
		// }
		// for (let x of this.state.restaurants[i]) {
		// 	// if (this.state.restaurants[i][x].toLowerCase().indexOf(inputValue) !== -1) {
		// 	// 	result.push(this.state.restaurants[i][x]);
		// 	// }
		// 	console.log(this.state.restaurants[i][x]);
		// }
		// return inputLength === 0
		// 	? []
		// 	: this.state.restaurants.filter((restaurant) => {
		// 			restaurant.restaurants.toLowerCase().slice(0, inputLength) ===
		// 				inputValue;
		// 	  });
		return this.state.list.map((section) => {
			return {
				title: section.title,
				query: section.query.filter((q) => {
					q.toLowerCase().indexOf(inputValue) !== -1;
				})
			};
		});
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
		console.log('hi');
		console.log(suggestion);
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
						// multiSection={true}
					/>
				</span>
			</div>
		);
	}
}

export default Searchbox;
