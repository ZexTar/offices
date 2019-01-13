import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListView = (props) => {
	const { data } = props;

	return (
		<div>
			{
				data.map((user, i) => (
					<div>
						<ListItem data={data[i]} key={data[i].id} />
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
