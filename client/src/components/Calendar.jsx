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
			selectedDay: this.props.date
		};
		this.onDateClick = this.onDateClick.bind(this);
		this.nextMonth = this.nextMonth.bind(this);
		this.prevMonth = this.prevMonth.bind(this);
		this.childClickHandler = this.childClickHandler.bind(this);
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
				// formattedDate = dateFns.format(day, 'D');
				formattedDate = day;
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

				if (!pastDatesStyle && !pastMonthStyle && !futureMonthStyle) {
					currentDay =
						dateFns.format(formattedDate, 'D') ===
						dateFns.format(this.state.selectedDay, 'D')
							? 'selectedDay'
							: '';
				}

				if (currentDay === 'selectedDay') {
					hoverDates = '';
				}

				let today = '';
				if (
					dateFns.format(day, 'MMMM D') === dateFns.format(new Date(), 'MMMM D')
				) {
					today = 'today';
				}

				if (
					dateFns.format(day, 'M') === dateFns.format(new Date(), 'M') &&
					dateFns.format(day, 'D') === dateFns.format(new Date(), 'D')
				) {
					if (
						dateFns.format(new Date(), 'H') == 23 &&
						dateFns.format(new Date(), 'm') > 30
					) {
						pastDatesStyle = 'pastDatesStyle';
						today = '';
						currentDay = '';
						// console.log(days[i - 1].props.children.props.className);
					}
				}

				if (
					dateFns.format(dateFns.subDays(day, 1), 'M') ===
						dateFns.format(new Date(), 'M') &&
					dateFns.format(dateFns.subDays(day, 1), 'D') ===
						dateFns.format(new Date(), 'D')
				) {
					if (
						days[i - 1].props.children.props.className.indexOf('today') === -1
					) {
						today = 'today';
						currentDay = 'selectedDay';
						// need to somehow pass the new date to the parent component to reflect onto the search bar, will come back to this;
					}
				}

				const classNames = `${today} ${hoverDates} ${pastDatesStyle} ${futureMonthStyle} ${pastMonthStyle} calendar-day ${currentDay}`;

				days.push(
					<td key={i}>
						<div
							data-day={cloneDay}
							className={classNames}
							onClick={this.onDateClick}
						>
							{dateFns.format(formattedDate, 'D')}
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

	onDateClick(e) {
		const day = dateFns.parse(e.target.dataset.day);
		if (dateFns.compareAsc(day, dateFns.subDays(new Date(), 1)) === 1) {
			if (
				dateFns.format(day, 'D') === dateFns.format(this.state.selectedDay, 'D')
			) {
				this.setState({ selectedDay: '' }, () => {
					this.props.clickHandler(this.state.selectedDay);
				});
			} else {
				this.setState({ selectedDay: day }, () => {
					this.props.clickHandler(this.state.selectedDay);
				});
			}
		}
	}

	nextMonth(e) {
		e.stopPropagation();
		this.setState({
			currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
		});
	}

	prevMonth(e) {
		e.stopPropagation();
		if (
			dateFns.format(new Date(), 'MMMM YYYY') !==
			dateFns.format(this.state.currentMonth, 'MMMM YYYY')
		) {
			this.setState({
				currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
			});
		}
	}

	childClickHandler(e) {
		e.stopPropagation();
	}

	render() {
		return (
			<div onClick={this.childClickHandler} className="picker-holder">
				<div className="picker-frame">
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
				</div>
			</div>
		);
	}
}

export default Calendar;
