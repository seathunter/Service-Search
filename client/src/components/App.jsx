import React from 'react';
import Search from './Search.jsx';
import TopSearchBar from './TopSearchBar.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="App">
					<TopSearchBar />
				</div>
			</div>
		);
	}
}

export default App;
