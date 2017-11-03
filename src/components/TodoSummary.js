import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectTodos from '../selectors/todos';

export const TodoSummary = ({ numberOfTodos, totalNumberOfTodos }) => {
	const todoWord = numberOfTodos > 1 ? 's' : '';
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
                    Viewing <span>{numberOfTodos}</span> todo{todoWord} of <span>{totalNumberOfTodos}</span>
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">Add todo</Link>
				</div>
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		numberOfTodos: selectTodos(state.todos, state.filters).length,
		totalNumberOfTodos: state.todos.length
	};
};

export default connect(mapStateToProps)(TodoSummary);