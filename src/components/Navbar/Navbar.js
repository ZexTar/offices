import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
	const { routeChange } = props;
	return (
		<button type="button" onClick={routeChange}>
			<p>Navbar</p>
		</button>
	);
};

Navbar.propTypes = {
	routeChange: PropTypes.func.isRequired,
};

export default Navbar;
