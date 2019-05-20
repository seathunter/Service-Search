import styled from 'styled-components';
import React from 'react';
import Calendar from './Calendar.jsx';

const Body = styled.div`
	background-color: #f7f7f7;
`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Body>
				<div className="App">
					<Calendar />
				</div>
			</Body>
		);
	}
}

export default App;
