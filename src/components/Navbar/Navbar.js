import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
	const { routeChange } = props;

	return (
		<div>
			<header className="bg-blue fixed w-100 ph3 pv3 pv3-ns ph4 ph1">
				<nav className="flex justify-around f6 fw6 ttu tracked">
					<p onClick={() => routeChange('listview')} className="pointer no-underline underline-hover link dim white dib mr3" role="presentation">List</p>
					<p onClick={() => routeChange('gridview')} className="pointer no-underline underline-hover link dim white dib mr3" role="presentation">Grid</p>
					<p onClick={() => routeChange('location')} className="pointer no-underline underline-hover link dim white dib mr3" role="presentation">Location</p>
				</nav>
			</header>
		</div>
	);
};

Navbar.propTypes = {
	routeChange: PropTypes.func.isRequired,
};

export default Navbar;
