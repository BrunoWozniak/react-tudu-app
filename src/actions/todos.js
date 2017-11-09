import uuid from 'uuid';
import axios from 'axios';

// ADD_TODO
export const addTodo = (todo) => ({
	type: 'ADD_TODO',
	todo
});

export const startAddTodo = (todoData = {}) => {
	return (dispatch) => {
		const {
			text = '',
			dueAt = 0
		} = todoData;
		const todo = {text, dueAt};

		const token = localStorage.getItem('token');
		axios.post(
			'http://localhost:3000/todos',
			todo,
			{ headers: { 'x-auth': token }}
		).then(res => {
			dispatch(addTodo({ id: res.data._id, ...todo }));
		}).catch(err => {
			console.log(err);
		});
	};
};

// REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
	type: 'REMOVE_TODO',
	id
});

export const startRemoveTodo = ({ id } = {}) => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		axios.delete(
			'http://localhost:3000/todos/'+id,
			{ headers: { 'x-auth': token }}
		).then(() => {
			dispatch(removeTodo({ id }));
		}).catch(err => {
			console.log(err);
		});
	};
};

// EDIT_TODO
export const editTodo = (id, updates) => ({
	type: 'EDIT_TODO',
	id,
	updates
});

export const startEditTodo = (id, updates) => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		axios.patch(
			'http://localhost:3000/todos/'+id,
			updates,
			{ headers: { 'x-auth': token }}
		).then(() => {
			dispatch(editTodo({ id, updates }));
		}).catch(err => {
			console.log(err);
		});  
	};
};

// SET_TODOS
export const setTodos = (todos) => ({
	type: 'SET_TODOS',
	todos
});

export const startSetTodos = () => {
	return (dispatch, getState) => {
		const token = localStorage.getItem('token');
		if (getState().auth.Authenticated) {
			console.log('Authenticated, gonna pick up some todos');
			axios.get(
				'http://localhost:3000/todos',
				{ headers: { 'x-auth': token }}
			).then(res => {
				const fetchedTodos = [];
				res.data.todos.forEach(item => {
					fetchedTodos.push({ id: item._id, ...item });
				});
				dispatch(setTodos(fetchedTodos));
			}).catch(err => {
				console.log(err);
			});
		}
	};
};