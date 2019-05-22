import React from 'react';
import Calendar from './Calendar.jsx';
import Search from './Search.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="App">
					{/* <Calendar /> */}
					<Search />
				</div>
			</div>
		);
	}
}

export default App;
