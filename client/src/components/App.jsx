import React from 'react';
import Search from './Search.jsx';
import Topbar from './TopBar.jsx';
import LowBar from './Lowbar.jsx';
import TopSearchBar from './TopSearchBar.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchExpand: false
		};
		this.expandHandler = this.expandHandler.bind(this);
	}

	expandHandler() {
		this.setState({ searchExpand: !this.state.searchExpand });
	}

	render() {
		return (
			<div className="App">
				<div className="site-header">
					<Topbar />
					<Search
						expandHandler={this.expandHandler}
						searchExpand={this.state.searchExpand}
					/>
					<TopSearchBar expandHandler={this.expandHandler} />
					<LowBar />
				</div>
			</div>
		);
	}
}

export default App;
