import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TodoListItem = ({ id, text, dueAt }) => (
	<Link className="list-item" to={`/edit/${id}`}>
		<div>
			<h3 className="list-item__title">{text}</h3>
			<span className="list-item__sub-title">{moment(dueAt).format('MMM Do, YYYY')}</span>
		</div>
	</Link>
);

export default TodoListItem;
