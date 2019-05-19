import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weekdayshort: moment.weekdaysShort(),
			firstDayOfMonth: moment(),
			dateObject: moment()
		};
	}

	month() {
		return this.state.dateObject.format('MMMM');
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

	render() {
		const blanks = [];
		for (let i = 0; i < this.firstDayOfMonth(); i++) {
			blanks.push(
				<td key={i * Math.random()} className="calendar-day empty">
					{''}
				</td>
			);
		}
		const daysInMonth = [];
		for (let d = 1; d < this.daysInMonth(); d++) {
			daysInMonth.push(
				<td key={d} className="calendar-day">
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
				{this.month()}
				<table className="calendar-day">
					<thead>
						<tr>{weekdayshortname}</tr>
					</thead>
					<tbody>{daysinmonth}</tbody>
				</table>
			</div>
		);
	}
}

export default Calendar;
