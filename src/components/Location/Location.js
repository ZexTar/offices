import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Location.css';

class Location extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		};
	}

	onMarkerClick = (props, marker) => this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true,
	});

	onMapClicked = () => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null,
			});
		}
	};

	render() {
		const { data } = this.state;
		return (
			<Map
				className="map"
				google={this.props.google}
				zoom={2}
				onClick={() => this.onMapClicked}
				initialCenter={{
					lat: 0,
					lng: 0,
				}}
			>

				{
					data.map((item, i) => (
						<Marker
							onClick={this.onMarkerClick}
							name={item.name}
							position={{ lat: data[i].latitude, lng: data[i].longitude }}
							key={item.id}
						/>
					))
				}
				{
					data.map(item => (
						<InfoWindow
							key={item.id}
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}>
							<div>
								<h1>{this.state.selectedPlace.name}</h1>
							</div>
						</InfoWindow>
					))
				}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'YOUR_API_KEY',
})(Location);
