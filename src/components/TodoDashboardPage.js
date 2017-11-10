import React from 'react';
import { connect } from 'react-redux';

import TodoList from './TodoList';
import TodoListFilters from './TodoListFilters';
import TodoSummary from './TodoSummary';
import { startSetTodos } from '../actions/todos';


class TodoDashboardPage extends React.Component {
	componentWillMount() {
		this.props.startSetTodos();
	}

	render () {
		return (
			<div>
				<TodoSummary />
				<TodoListFilters />
				<TodoList />
			</div>
		);
	}
}
  
const mapDispatchToProps = (dispatch) => ({
	startSetTodos: () => dispatch(startSetTodos())
});

export default connect(null, mapDispatchToProps)(TodoDashboardPage);
