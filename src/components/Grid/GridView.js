import React from 'react';
import PropTypes from 'prop-types';
import GridItem from './GridItem';
import './GridView.css';

const GridView = (props) => {
	const { data } = props;
	return (
		<div className="grid">
			{
				data.map((item, i) => (
					<GridItem data={data[i]} key={data[i].id} />
				))
			}
		</div>
	);
};

GridView.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridView;
