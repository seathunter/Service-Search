import styled from 'styled-components';
import React from 'react';
import Calendar from './Calendar.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="App">
					<Calendar />
				</div>
			</div>
		);
	}
}

export default App;
