import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListView = (props) => {
	const { data } = props;

	return (
		<div>
			{
				data.map((item, i) => (
					<div key={data[i].id}>
						<ListItem data={data[i]} />
						<hr />
					</div>
				))
			}
		</div>
	);
};

ListView.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListView;
