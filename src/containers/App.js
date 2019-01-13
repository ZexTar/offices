import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ListView from '../components/List/ListView';
import GridView from '../components/Grid/GridView';
import Location from '../components/Location/Location';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			route: 'listview',
			data: '',
		};
	}

	componentDidMount() {
		fetch('https://itk-exam-api.herokuapp.com/api/offices', {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json())
			.then((data) => {
				this.setState({ data });
			});
	}

	routeChange = (route) => {
		this.setState({ route });
	}

	render() {
		const { route, data } = this.state;
		const { routeChange } = this;

		return (
			<div>
				{
					data === '' ? (
						<p>LOADING</p>
					) : (
						<div>
							<Navbar routeChange={routeChange} />
							<div className="flex justify-center pv6 bg-light-blue">
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
						</div>
					)
				}
			</div>
		);
	}
}

export default App;
