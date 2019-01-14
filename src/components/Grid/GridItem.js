import React from 'react';
import PropTypes from 'prop-types';
import './GridItem.css';

const GridItem = (props) => {
	const { data } = props;
	const placeholderImg = `https://ui-avatars.com/api/?name=${data.name}&length=1`;

	return (
		<article className="mw5 h5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
			<div className="tc">
				{
					data.photo !== null ? (
						<img src={data.photo} className="br-100 h3 w3 dib ba b--black-05 pa2" alt="mapitem" />
					) : (
						<img src={placeholderImg} className="br-100 h3 w3 dib ba b--black-05 pa2" alt="mapitem" />
					)
				}
				<h1 className="f3 mb2">{data.name}</h1>
				<h2 className="h3 f5 fw4 gray mt0 desc">{data.description}</h2>
			</div>
		</article>
	);
};

GridItem.propTypes = {
	data: PropTypes.shape({
		description: PropTypes.string,
		id: PropTypes.number,
		latitude: PropTypes.string,
		name: PropTypes.string,
		photo: PropTypes.string,
	}).isRequired,
};

export default GridItem;
