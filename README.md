# offices

This is web page which shows company offices location based on data retrieved by Ajax from REST web service.

To use this code as your template do following steps:

1 - ```git clone https://github.com/ZexTar/offices.git```

2 - ```npm install```

3 -get your own google API key and put it in ```src/components/Location.js ```:
```
export default GoogleApiWrapper({
	apiKey: 'YOUR_API_KEY',
})(Location);
```

4- ```npm start```

To get information for desired company just change API endpoint in ```src/containers/App.js ``` :
```javascript
componentDidMount() {
	fetch('YOUR ENDPOINT', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => response.json())
		.then((data) => {
			this.setState({ data });
		});
}
```

