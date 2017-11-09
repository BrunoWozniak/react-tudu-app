import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import selectTodos from '../selectors/todos';

export const TodoList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-on-mobile">Todos</div>
			<div className="show-on-desktop">Todo</div>
			<div className="show-on-desktop">Amount</div>
		</div>
		<div className="list-body">
			{
				props.todos.length === 0 ? (
					<div className="list-item list-item--message">
						<span>No todo</span>
					</div>
				) : (
					props.todos.map((todo) => {
						return <TodoListItem key={todo.id} {...todo} />
					})
				)
			}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		todos: selectTodos(state.todos, state.filters)
	};
};

export default connect(mapStateToProps)(TodoList);