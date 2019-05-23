import React from 'react';
import '../../../public/search.css';
import dateFns from 'date-fns';
import Calendar from './Calendar.jsx';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			party: '2 People',
			time: '7:00 PM',
			date: dateFns.format(new Date(), 'MMM D, YYYY'),
			calendar: false
		};
		this.timeSlotRender = this.timeSlotRender.bind(this);
		this.calendarToggleHandler = this.calendarToggleHandler.bind(this);
		this.calendarRender = this.calendarRender.bind(this);
		this.calendarClickHandler = this.calendarClickHandler.bind(this);
		this.partySizeChange = this.partySizeChange.bind(this);
	}

	timeSlotRender() {
		const rows = [];
		const hourNow = dateFns.format(new Date(), 'H');
		const minNow = dateFns.format(new Date(), 'm');
		// if (hourNow === 23){
		// 	if (minNow >)
		// }
		// for (let i = 0; i < 10; i++) {
		// 	if (i === 0) {
		// 		rows.push(
		// 			<option value={`0${i}:00`}>{`${i + 12}:00`} AM</option>,
		// 			<option value={`0${i}:30`}>{`${i + 12}:30`} AM</option>
		// 		);
		// 	} else {
		// 		rows.push(
		// 			<option value={`0${i}:00`}>{`${i}:00`} AM</option>,
		// 			<option value={`0${i}:30`}>{`${i}:30`} AM</option>
		// 		);
		// 	}
		// }
		// for (let i = 10; i < 24; i++) {
		// 	if (i >= 13) {
		// 		rows.push(
		// 			<option value={`${i}:00`}>{`${i - 12}:00`} PM</option>,
		// 			<option value={`${i}:30`}>{`${i - 12}:30`} PM</option>
		// 		);
		// 	} else if (i < 13) {
		// 		if (i < 12) {
		// 			rows.push(
		// 				<option value={`${i}:00`}>{`${i}:00`} AM</option>,
		// 				<option value={`${i}:30`}>{`${i}:30`} AM</option>
		// 			);
		// 		} else if (i >= 12) {
		// 			rows.push(
		// 				<option value={`${i}:00`}>{`${i}:00`} PM</option>,
		// 				<option value={`${i}:30`}>{`${i}:30`} PM</option>
		// 			);
		// 		}
		// 	}
		// }
		// return (
		// 	<select className="time-selector" name="Select_0" aria-label="time">
		// 		{rows}
		// 	</select>
		// );
	}

	calendarToggleHandler(e) {
		e.stopPropagation();
		this.setState({ calendar: !this.state.calendar });
	}

	calendarClickHandler(day) {
		console.log('hi there');
		this.setState({ date: dateFns.format(day, 'MMM D, YYYY') }, () => {
			this.setState({ calendar: !this.state.calendar });
		});
	}

	calendarRender() {
		let div = '';
		if (this.state.calendar === false) {
			div = (
				<div onClick={this.calendarToggleHandler} className="date-container">
					<a className="dtp-picker-selector-link date-label-closed dtp-picker-label">
						{this.state.date}
					</a>
					<input
						className="datepicker-closed dtp-picker-select picker__input"
						data-value="2019-05-22"
						readOnly=""
						id="P1932029059"
						aria-haspopup="true"
						aria-expanded="false"
						aria-readonly="false"
						aria-owns="P1932029059_root submit_datepicker"
						aria-label="date"
					/>
					<div className="datepicker-closed" />
				</div>
			);
		} else {
			div = (
				<div
					onClick={this.calendarToggleHandler}
					className="date-container-opened"
				>
					<a className="dtp-picker-selector-link date-label-opened dtp-picker-label">
						{this.state.date}
					</a>
					<input
						className="datepicker-opened dtp-picker-select picker__input"
						data-value="2019-05-22"
						readOnly=""
						id="P1932029059"
						aria-haspopup="true"
						aria-expanded="false"
						aria-readonly="false"
						aria-owns="P1932029059_root submit_datepicker"
						aria-label="date"
					/>
					<div className="datepicker-opened">
						<Calendar
							date={this.state.date}
							clickHandler={this.calendarClickHandler}
						/>
					</div>
				</div>
			);
		}
		return div;
	}

	partySizeChange(e) {
		console.log(e.target.value);
		let party;
		if (e.target.value === 'Large party') {
			party = e.target.value;
		} else {
			party = `${e.target.value} People`;
		}
		this.setState({ party });
	}

	partySizeRender() {
		const rows = [];
		for (let i = 1; i < 22; i++) {
			if (i === 21) {
				rows.push(
					<option key={i} value="Large party">
						Large Party
					</option>
				);
			} else {
				rows.push(
					<option key={i} value={i}>
						{i} People
					</option>
				);
			}
		}
		return (
			<select onChange={this.partySizeChange} className="party-size-selector">
				{rows}
			</select>
		);
	}

	render() {
		return (
			<div className="header-search-box">
				<div className="close-button">
					<a data-target="#header-search-box" className="js-toggle-search">
						<i className="icon-close" />
					</a>
				</div>
				<div className="content-block-header">
					<h3>
						<span>Find your table for any occasion</span>
					</h3>
				</div>
				<div
					id="dtp-picker-59"
					data-event-prefix="search-in-header::"
					data-autocomplete-options='{"disableFreetext":false,"disableCuisines":false,"disableEmpty":false,"redirectSingleToMulti":true,"locationFormat":"C","domainId":"com","language":"en-US","latitude":37.77671,"longitude":-122.271608,"macroId":5,"metroId":4,"environment":"production"}'
					data-search-selector=".dtp-picker-search-autocomplete"
					data-test="search-in-header-dtp"
					className="dtp-picker dtp-lang-en  with-search single-search  initialised"
				>
					<form className="dtp-picker-form">
						<div className="picker-selectors-container">
							<div className="party-size-container">
								<a
									className="select-label dtp-picker-selector-link"
									tabIndex="-1"
								>
									{this.state.party}
								</a>
								{this.partySizeRender()}
							</div>
							{this.calendarRender()}
							<div className="time-container">
								<a
									className="select-label dtp-picker-selector-link"
									tabIndex="-1"
								>
									{this.state.time}
								</a>
								{this.timeSlotRender()}
							</div>
						</div>
						<div className="picker-search-container">
							<div className="search-icon" />
							<span className="twitter-typehead">
								<input
									type="text"
									title="Location, Restaurant, or Cuisine"
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
