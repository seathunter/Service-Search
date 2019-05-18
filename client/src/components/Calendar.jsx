import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weekdays: moment.weekdaysShort(),
			firstDayOfMonth: moment(),
			daysInMonth: moment()
		};
	}

	firstDayOfMonth() {
		const dateObject = this.state.firstDayOfMonth;
		const firstDay = moment(dateObject)
			.startOf('month')
			.format('d');
		return firstDay;
	}

	daysInMonth() {
		const dateObject = this.state.daysInMonth;
		const monthDays = moment(dateObject).daysInMonth();
		return monthDays;
	}

	render() {
		const blanks = [];
		for (let i = 0; i < this.firstDayOfMonth(); i++) {
			blanks.push(<td className="calendar-day empty">{''}</td>);
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
		let rows = [];
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
			return <tr key={d}>{d}</tr>;
		});
		return (
			<table className="week">
				<thead>
					{this.state.weekdays.map((day) => {
						return (
							<th className="weekday" key={day}>
								{day}
							</th>
						);
					})}
				</thead>
				<tbody>{daysinmonth}</tbody>
			</table>
		);
	}
}

export default Calendar;
