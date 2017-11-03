import moment from 'moment';
import todosReducer from '../../reducers/todos';
import todos from '../fixtures/todos';

test('should setup default todos values', () => {
    const state = todosReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove todo by id', () => {
    const action = {
        type: 'REMOVE_TODO',
        id: todos[1].id
    };
    const state = todosReducer(todos, action);
    expect(state).toEqual([todos[0], todos[2]]);
});

test('should not remove todo if id not found', () => {
    const action = {
        type: 'REMOVE_TODO',
        id: -1
    };
    const state = todosReducer(todos, action);
    expect(state).toEqual(todos);
});

test('should add todo', () => {
    const todo = {
        id: 4,
        description: 'Todo 4',
        note: 'Note for todo 4',
        amount: 4444,
        createdAt: moment()
    };
    const action = {
        type: 'ADD_TODO',
        todo
    };
    const state = todosReducer(todos, action);
    expect(state).toEqual([...todos, todo]);
});

test('should edit todo', () => {
    const amount = 109501;
    const action = {
        type: 'EDIT_TODO',
        id: todos[1].id,
        updates: {
            amount
        }
    };
    const state = todosReducer(todos, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit todo if id not found', () => {
    const amount = 1001;
    const action = {
        type: 'EDIT_TODO',
        id: -1,
        updates: {
            amount
        }
    };
    const state = todosReducer(todos, action);
    expect(state).toEqual(todos);
});

test('should set todos', () => {
    const action = {
        type: 'SET_TODOS',
        todos: [todos[1]]
    };
    const state = todosReducer(todos, action);
    expect(state).toEqual([todos[1]]);
});