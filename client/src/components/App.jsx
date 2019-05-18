import React from 'react';
import moment from 'moment';
import Calendar from './Calendar.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				<Calendar />
			</div>
		);
	}
}

export default App;
