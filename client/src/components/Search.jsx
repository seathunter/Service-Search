import React from 'react';
import '../../../public/search.css';
import dateFns from 'date-fns';
import Calendar from './Calendar.jsx';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			party: 2,
			time: '7:00 PM',
			date: dateFns.format(new Date(), 'MMM D, YYYY'),
			calendar: false
		};
		this.timeSlotRender = this.timeSlotRender.bind(this);
		this.calendarToggleHandler = this.calendarToggleHandler.bind(this);
		this.calendarRender = this.calendarRender.bind(this);
		this.calendarClickHandler = this.calendarClickHandler.bind(this);
	}

	timeSlotRender() {}

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

	partySizeRender() {
		const rows = [];
		for (let i = 1; i < 22; i++) {
			if (i === 21) {
				rows.push(<option value={i}>Large Party</option>);
			} else {
				rows.push(<option value={i}>{i} Person</option>);
			}
		}
		return <select className="party-size-selector">{rows}</select>;
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
									{this.state.party} People
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
								<select
									className="time-selector"
									name="Select_0"
									aria-label="time"
								>
									<option value="00:30">12:30 AM</option>
									<option value="01:00">1:00 AM</option>
									<option value="01:30">1:30 AM</option>
									<option value="02:00">2:00 AM</option>
									<option value="02:30">2:30 AM</option>
									<option value="03:00">3:00 AM</option>
									<option value="03:30">3:30 AM</option>
									<option value="04:00">4:00 AM</option>
									<option value="04:30">4:30 AM</option>
									<option value="05:00">5:00 AM</option>
									<option value="05:30">5:30 AM</option>
									<option value="06:00">6:00 AM</option>
									<option value="06:30">6:30 AM</option>
									<option value="07:00">7:00 AM</option>
									<option value="07:30">7:30 AM</option>
									<option value="08:00">8:00 AM</option>
									<option value="08:30">8:30 AM</option>
									<option value="09:00">9:00 AM</option>
									<option value="09:30">9:30 AM</option>
									<option value="10:00">10:00 AM</option>
									<option value="10:30">10:30 AM</option>
									<option value="11:00">11:00 AM</option>
									<option value="11:30">11:30 AM</option>
									<option value="12:00">12:00 PM</option>
									<option value="12:30">12:30 PM</option>
									<option value="13:00">1:00 PM</option>
									<option value="13:30">1:30 PM</option>
									<option value="14:00">2:00 PM</option>
									<option value="14:30">2:30 PM</option>
									<option value="15:00">3:00 PM</option>
									<option value="15:30">3:30 PM</option>
									<option value="16:00">4:00 PM</option>
									<option value="16:30">4:30 PM</option>
									<option value="17:00">5:00 PM</option>
									<option value="17:30">5:30 PM</option>
									<option value="18:00">6:00 PM</option>
									<option value="18:30">6:30 PM</option>
									<option value="19:00">7:00 PM</option>
									<option value="19:30">7:30 PM</option>
									<option value="20:00">8:00 PM</option>
									<option value="20:30">8:30 PM</option>
									<option value="21:00">9:00 PM</option>
									<option value="21:30">9:30 PM</option>
									<option value="22:00">10:00 PM</option>
									<option value="22:30">10:30 PM</option>
									<option value="23:00">11:00 PM</option>
									<option value="23:30">11:30 PM</option>
								</select>
							</div>
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
