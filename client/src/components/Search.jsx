import React from 'react';
import '../../../public/search.css';
import dateFns from 'date-fns';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			party: 2
		};
		this.timeSlotRender = this.timeSlotRender.bind(this);
	}

	timeSlotRender() {}

	render() {
		return (
			<div>
				<div className="close-button">
					<a
						href="javascript:void(0)"
						data-target="#header-search-box"
						className="js-toggle-search"
					>
						<i className="icon-close" />
					</a>
				</div>
				<div className="content-block-header">
					<h3>
						<span>Find your table for any occasion</span>
					</h3>
				</div>
				<div>
					<form className="dtp-picker-form">
						<div className="picker-selectors-container">
							<div className="party-size-container">
								<a
									className="select-label dtp-picker-selector-link"
									tabIndex="-1"
								>
									{this.state.party} People
								</a>
								<select className="party-size-selector">
									<option value="1">1 Person</option>
									<option value="2">2 Person</option>
									<option value="3">3 Person</option>
									<option value="4">4 Person</option>
									<option value="5">5 Person</option>
									<option value="6">6 Person</option>
									<option value="7">7 Person</option>
									<option value="8">8 Person</option>
									<option value="9">9 Person</option>
									<option value="10">10 Person</option>
									<option value="11">11 Person</option>
									<option value="12">12 Person</option>
									<option value="13">13 Person</option>
									<option value="14">14 Person</option>
									<option value="15">15 Person</option>
									<option value="16">16 Person</option>
									<option value="17">17 Person</option>
									<option value="18">18 Person</option>
									<option value="19">19 Person</option>
									<option value="20">20 Person</option>
									<option value="21">Large Party</option>
								</select>
							</div>
							<div />
							<div />
						</div>
						<div className="picker-search-container">
							<div className="search-icon" />
							<span className="twitter-typehead">
								<input
									type="text"
									title="Location, Restaurant, or Cuisine"
									value=""
									className="dtp-picker-search-autocomplete tt-hint"
									aria-label="search"
									readOnly=""
									autoComplete="off"
									spellCheck="false"
									tabIndex="-1"
									style={{
										position: 'absolute',
										top: '0px',
										left: '0px',
										borderColor: 'transparent',
										boxShadow: 'none',
										opacity: '1',
										background:
											'none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)'
									}}
								/>
								<input
									id="dtp-search-single-box"
									type="text"
									name="searchText"
									title="Location, Restaurant, or Cuisine"
									value=""
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
						<input
							type="submit"
							value="Find a Table"
							data-test="search-in-header-dtp-submit"
							className="button dtp-picker-button"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default Search;
