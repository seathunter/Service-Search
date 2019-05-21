import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import dateFns from 'date-fns';
import '../../../public/calendar.css';

// Styled Components
const Icon = styled.div`
	@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
	font-family: icons;
	speak: none;
	font-style: normal;
	font-weight: 400;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	content: '0';
`;

const GlobalStyle = createGlobalStyle`
	body {
		font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
		font-size: 1em;
		font-weight: 300;
		line-height: 1.5;
		color: var(--text-color);
		background: var(--bg-color);
		position: relative;
	}
	* {
		box-sizing: border-box;
	}
	header {
  display: block;
  width: 100%;
  padding: 1.75em 0;
  border-bottom: 1px solid var(--border-color);
  background: var(--neutral-color);
}

	header #logo {
		font-size: 175%;
		text-align: center;
		color: var(--main-color);
		line-height: 1;
	}

	header #logo .icon {
		padding-right: .25em;
	}

	main {
		display: block;
		margin: 0 auto;
		margin-top: 5em;
		max-width: 50em;
	}
`;

const Row = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;

const ColStart = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	max-width: 100%;
	justify-content: flex-start;
	text-align: left;
`;

const ColEnd = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	max-width: 100%;
	justify-content: flex-end;
	text-align: right;
`;

const ColCenter = styled.div`
	flex-grow: 1;
	flex-basis: 0;
	max-width: 100%;
	justify-content: center;
	text-align: center;
`;

const CalHeader = styled.div`
	text-transform: uppercase;
	font-weight: 400;
	font-size: 100%;
	padding: 1.5em 0;
	border-bottom: 1px solid var(--border-color);
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`;

const Number = styled.span`
	position: absolute;
	font-size: 82.5%;
	line-height: 1;
	top: 0.75em;
	right: 0.75em;
	font-weight: 700;
`;

const Days = styled.div`
	text-transform: uppercase;
	font-weight: 400;
	color: var(--text-color-light);
	font-size: 70%;
	padding: 0.75em 0;
	border-bottom: 1px solid var(--border-color);
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
`;

// Calendar
class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMonth: new Date(),
			currentDate: new Date()
		};
		this.onDateClick = this.onDateClick.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
	}

	renderHeader() {
		const date = 'MMMM YYYY';
		return (
			<CalHeader>
				<ColStart>
					<Icon onClick={this.prevMonth}>chevron_left</Icon>
				</ColStart>
				<ColCenter>
					<span>{dateFns.format(this.state.currentMonth, date)}</span>
				</ColCenter>
				<ColEnd>
					<Icon onClick={this.nextMonth}>chevron_right</Icon>
				</ColEnd>
			</CalHeader>
		);
	}

	renderDays() {
		const day = 'ddd';
		const days = [];
		const firstDate = dateFns.startOfWeek(this.state.currentMonth);
		for (let i = 0; i < 7; i++) {
			days.push(
				<ColCenter key={i}>
					{dateFns.format(dateFns.addDays(firstDate, i), day)}
				</ColCenter>
			);
		}
		console.log('this is days', dateFns.format(new Date(), 'MMMM'));
		return <Days>{days}</Days>;
	}

	renderCells() {
		const { currentMonth, selectedDate } = this.state;
		const monthStart = dateFns.startOfMonth(currentMonth);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);

		const dateFormat = 'D';
		const rows = [];

		let days = [];
		let day = startDate;
		let formattedDate = '';

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, dateFormat);
				const cloneDay = day;
				days.push(
					<div
						className={`col cell ${
							!dateFns.isSameMonth(day, monthStart)
								? 'disabled'
								: dateFns.isSameDay(day, selectedDate)
								? 'selected'
								: ''
						}`}
						key={day}
						onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
					>
						<span className="number">{formattedDate}</span>
						<span className="bg">{formattedDate}</span>
					</div>
				);
				day = dateFns.addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{days}
				</div>
			);
			days = [];
		}
		return <div className="body">{rows}</div>;
	}

	onDateClick(day) {
		this.setState({ selectedDate: day });
	}

	nextMonth() {
		this.setState({
			currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
		});
	}

	prevMonth() {
		const currentMonth = dateFns.format(this.state.currentMonth, 'M');
		const actualMonth = dateFns.format(new Date(), 'M');
		const currentYear = dateFns.format(this.state.currentMonth, 'YYYY');
		const actualYear = dateFns.format(new Date(), 'YYYY');

		if (parseInt(currentYear, 10) === parseInt(actualYear, 10)) {
			console.log('suc');
			if (parseInt(currentMonth, 10) > parseInt(actualMonth, 10)) {
				console.log('test');
				this.setState({
					currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
				});
			}
		} else if (parseInt(currentYear, 10) >= parseInt(actualYear, 10)) {
			this.setState({
				currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
			});
		}
	}

	render() {
		return (
			<div className="calendar">
				{this.renderHeader()}
				{this.renderDays()}
				{this.renderCells()}
			</div>
		);
	}
}

export default Calendar;
