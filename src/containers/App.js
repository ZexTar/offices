import React, { PureComponent } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ListView from '../components/List/ListView';
import GridView from '../components/Grid/GridView';
import Location from '../components/Location/Location';
import './App.css';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			route: 'listview',
			data: '',
		};
	}

	routeChange = (route) => {
		this.setState({ route });
	}

	getData = () => {
		fetch('https://itk-exam-api.herokuapp.com/api/offices', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json()).then((data) => {
			this.setState({ data });
		});
	}

	render() {
		const { route, data } = this.state;
		const { routeChange, getData } = this;
		return (
			<div className="App">
				<Navbar routeChange={routeChange} />
				{
					route === 'listview' ? (
						<ListView data={data} />
					) : route === 'gridview' ? (
						<GridView data={data} />
					) : (
						<Location data={data} />
					)
				}
			</div>
		);
	}
}

export default App;
