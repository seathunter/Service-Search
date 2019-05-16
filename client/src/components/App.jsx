import React from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			state: []
		};
	}

	render() {
		return <div>{this.state.state}</div>;
	}
}

export default App;
