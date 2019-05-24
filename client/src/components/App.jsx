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
			<div className="App">
				<TopSearchBar />
				<Search />
			</div>
		);
	}
}

export default App;
