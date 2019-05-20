import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Month = styled.div`
	color: lightblue;
`;

const Today = styled.td``;

const CalendarDay = styled.table``;

const Weekdays = styled.tr``;

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weekdayshort: moment.weekdaysShort(),
			firstDayOfMonth: moment(),
			dateObject: moment(),
			allmonths: moment.months(),
			showMonthTable: false
		};
		// this.setMonth = this.setMonth.bind(this);
		this.MonthList = this.MonthList.bind(this);
	}

	month() {
		return this.state.dateObject.format('MMMM');
	}

	currentDay() {
		return this.state.dateObject.format('D');
	}

	firstDayOfMonth() {
		const { dateObject } = this.state.dateObject;
		const firstDay = moment(dateObject)
			.startOf('month')
			.format('d');
		return firstDay;
	}

	daysInMonth() {
		return this.state.dateObject.daysInMonth();
	}

	MonthList(props) {
		const months = [];
		props.data.map((data) => {
			return months.push(
				<td
					key={data}
					onClick={(e) => {
						this.setMonth(data);
					}}
					className="calendar-month"
				>
					<span>{data}</span>
				</td>
			);
		});
		const rows = [];
		let cells = [];

		months.forEach((row, i) => {
			if (i % 3 !== 0 || i == 0) {
				cells.push(row);
			} else {
				rows.push(cells);
				cells = [];
				cells.push(row);
			}
		});
		rows.push(cells);
		const monthlist = rows.map((d, i) => {
			return <tr key={i}>{d}</tr>;
		});

		return (
			<table className="calendar-month">
				<thead>
					<tr>
						<th colSpan="4">Select a Month</th>
					</tr>
				</thead>
				<tbody>{monthlist}</tbody>
			</table>
		);
	}

	setMonth(month) {
		const monthNo = this.state.allmonths.indexOf(month); // get month number
		let dateObject = Object.assign({}, this.state.dateObject);
		dateObject = moment(dateObject).set('month', monthNo); // change month value
		this.setState({
			dateObject // add to state
		});
	}

	showMonth(e, month) {
		this.setState({
			showMonthTable: !this.state.showMonthTable
		});
	}

	render() {
		const blanks = [];
		for (let i = 0; i < this.firstDayOfMonth(); i++) {
			blanks.push(
				<Today key={i * Math.random()} className="calendar-day empty">
					{''}
				</Today>
			);
		}
		const daysInMonth = [];
		for (let d = 1; d < this.daysInMonth(); d++) {
			const currentDay = d == this.currentDay() ? 'today' : '';
			daysInMonth.push(
				<td key={d} className={`calendar-day ${currentDay}`}>
					{d}
				</td>
			);
		}
		const totalSlots = [...blanks, ...daysInMonth];
		const rows = [];
		let cells = [];
		totalSlots.forEach((row, i) => {
			if (i % 7 !== 0) {
				cells.push(row);
			} else {
				rows.push(cells);
				cells = [];
				cells.push(row);
			}
			if (i === totalSlots.length - 1) {
				rows.push(cells);
			}
		});

		const daysinmonth = rows.map((d, i) => {
			return <tr key={i}>{d}</tr>;
		});

		const weekdayshortname = this.state.weekdayshort.map((day) => {
			return (
				<th key={day} className="week-day">
					{day}
				</th>
			);
		});

		return (
			<div>
				<div
					onClick={(e) => {
						this.showMonth();
					}}
					className="calendar-navi"
				>
					{' '}
					{this.month()}
				</div>
				<div className="calendar-date">
					{this.state.showMonthTable && (
						<this.MonthList data={moment.months()} />
					)}
				</div>
				<CalendarDay>
					<thead>
						<Weekdays>{weekdayshortname}</Weekdays>
					</thead>
					<tbody>{daysinmonth}</tbody>
				</CalendarDay>
			</div>
		);
	}
}

export default Calendar;
