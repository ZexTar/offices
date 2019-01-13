import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
	const { data } = props;
	const placeholderImg = `https://ui-avatars.com/api/?name=${data.name}&length=1`;
	return (
		<div>
			<main className="mw6 center">
				<article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
					<div className="dtc w2 w3-ns v-mid">
						{ data.photo !== null ? (
							<img src={data.photo} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" alt="listitem" />
						) : (
							<img src={placeholderImg} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" alt="listitem" />
						)
						}
					</div>
					<div className="dtc v-mid pl3">
						<h1 className="f6 f5-ns fw6 lh-title white mv0">
							{data.name}
						</h1>
						<h2 className="f6 fw4 mt0 mb0 black-60">
							{data.description}
						</h2>
					</div>
				</article>
			</main>
		</div>
	);
};

ListItem.propTypes = {
	data: PropTypes.shape({
		description: PropTypes.string,
		id: PropTypes.number,
		latitude: PropTypes.string,
		name: PropTypes.string,
		photo: PropTypes.string,
	}).isRequired,
};

export default ListItem;
