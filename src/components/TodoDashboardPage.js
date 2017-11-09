import React from 'react';
import TodoList from './TodoList';
import TodoListFilters from './TodoListFilters';
import TodoSummary from './TodoSummary';

const TodoDashboardPage = () => {
	return (
		<div>
			<TodoSummary />
			<TodoListFilters />
			<TodoList />
		</div>
	);
};

export default TodoDashboardPage;