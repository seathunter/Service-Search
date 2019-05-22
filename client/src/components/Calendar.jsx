import React from 'react';
import dateFns from 'date-fns';
import '../../../public/calendar.css';

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMonth: new Date(),
			currentDate: new Date(),
			currentDay: new Date(),
			selectedDay: new Date()
		};
		this.onDateClick = this.onDateClick.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
	}

	renderDays() {
		const day = 'ddd';
		const days = [];
		const firstDate = dateFns.startOfWeek(this.state.currentMonth);
		for (let i = 0; i < 7; i++) {
			days.push(
				<th className="weekday" key={i}>
					{dateFns.format(dateFns.addDays(firstDate, i), day)}
				</th>
			);
		}
		return <tr className="weekdays-header">{days}</tr>;
	}

	currentDay() {
		return dateFns.format(this.state.currentDate, 'D');
	}

	renderCells() {
		const monthStart = dateFns.startOfMonth(this.state.currentMonth);
		const startDate = dateFns.startOfWeek(monthStart);

		const rows = [];

		let days = [];
		let day = startDate;
		let formattedDate = '';

		while (rows.length < 6) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, 'D');
				const cloneDay = day;
				let currentDay = '';

				let pastMonthStyle = '';
				const prevMonth = dateFns.format(
					dateFns.subMonths(this.state.currentMonth, 1),
					'MMMM'
				);

				if (prevMonth === dateFns.format(day, 'MMMM')) {
					pastMonthStyle = 'pastMonthStyle';
				}

				let futureMonthStyle = '';
				const futureMonth = dateFns.format(
					dateFns.addMonths(this.state.currentMonth, 1),
					'MMMM'
				);

				if (futureMonth === dateFns.format(day, 'MMMM')) {
					futureMonthStyle = 'futureMonthStyle';
				}

				let pastDatesStyle = '';
				if (dateFns.compareDesc(day, dateFns.subDays(new Date(), 1)) === 1) {
					pastDatesStyle = 'pastDatesStyle';
				}
				let hoverDates = '';
				if (pastDatesStyle) {
					pastMonthStyle = '';
				} else {
					hoverDates = 'hoverDates';
				}

				if (!pastDatesStyle && !pastMonthStyle) {
					currentDay =
						formattedDate === dateFns.format(this.state.selectedDay, 'D')
							? 'selectedDay'
							: '';
				}

				if (currentDay === 'selectedDay') {
					hoverDates = '';
				}

				const classNames = `${hoverDates} ${pastDatesStyle} ${futureMonthStyle} ${pastMonthStyle} calendar-day ${currentDay}`;

				days.push(
					<td key={i}>
						<div
							className={classNames}
							onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
						>
							{formattedDate}
						</div>
					</td>
				);

				day = dateFns.addDays(day, 1);
			}
			rows.push(<tr key={day}>{days}</tr>);
			days = [];
		}
		return rows;
	}

	onDateClick(day) {
		if (dateFns.compareAsc(day, dateFns.subDays(new Date(), 1)) === 1) {
			if (
				dateFns.format(day, 'D') === dateFns.format(this.state.selectedDay, 'D')
			) {
				this.setState({ selectedDay: '' });
			} else {
				this.setState({ selectedDay: day });
			}
		}
	}

	nextMonth() {
		this.setState({
			currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
		});
	}

	prevMonth() {
		if (
			dateFns.format(new Date(), 'MMMM YYYY') !==
			dateFns.format(this.state.currentMonth, 'MMMM YYYY')
		) {
			this.setState({
				currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
			});
		}
	}

	render() {
		return (
			<div className="calendar-wrapper">
				<div className="picker-box">
					<div className="calendar-header">
						<div>
							<div className="chevron-left" onClick={this.prevMonth} />
						</div>
						<div className="col-center">
							<div className="picker-month">
								{dateFns.format(this.state.currentMonth, 'MMMM YYYY')}
							</div>
						</div>
						<div>
							<div className="chevron-right" onClick={this.nextMonth} />
						</div>
					</div>
					<table className="calendar-table">
						<thead>{this.renderDays()}</thead>
						<tbody>{this.renderCells()}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Calendar;
