import React from 'react';
import Search from './Search.jsx';
import Topbar from './TopBar.jsx';
import TopSearchBar from './TopSearchBar.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="App">
				{/* <div className="site-header">
					<div className="">
						<div className="close-btn"></div>
					</div> */}
				<Topbar />
				<Search />
				<TopSearchBar />
				{/* </div> */}
			</div>
		);
	}
}

export default App;
