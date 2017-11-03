import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startSetTodos,
    setTodos,
    startAddTodo,
    addTodo,
    startEditTodo,
    editTodo,
    startRemoveTodo,
    removeTodo }
from '../../actions/todos';
import todos from '../fixtures/todos';
import database from '../../firebase/firebase';

const uid = '123abc';
const defaultAuthState = { auth: {uid} };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const todosData = {};

    todos.forEach(({ id, description, note, amount, createdAt }) => {
        todosData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/todos`).set(todosData).then(() => done() );
});

test('should setup remove todo action object', () => {
    const action = removeTodo({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_TODO',
        id: '123abc'
    });
});

test('should remove todo from database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = todos[2].id;

    store.dispatch(startRemoveTodo({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_TODO',
            id
        });
        return database.ref(`users/${uid}/todos/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test('should setup edit todo action object', () => {
    const action = editTodo('123abc', {amount: 123, description: 'Modified'});
    expect(action).toEqual({
        type: 'EDIT_TODO',
        id: '123abc',
        updates: {
            amount: 123,
            description: 'Modified'
        }
    });
});

test('should edit todo in database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = todos[2].id;
    const updates = {
        note: 'Edit...',
        amount: 1001
    };

    store.dispatch(startEditTodo(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_TODO',
            id,
            updates
        });
        return database.ref(`users/${uid}/todos/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

test('should setup add todo action object with provided values', () => {
    const action = addTodo(todos[2]);
    expect(action).toEqual({
        type: 'ADD_TODO',
        todo: todos[2]
    });
});

test('should add todo to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const todoData = {
        description: 'Stuff',
        note: 'Really, this is just stuff',
        amount: 3000,
        createdAt: 1000
    };

    store.dispatch(startAddTodo(todoData)).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_TODO',
            todo: {
                id: expect.any(String),
                ...todoData
            }
        });
        return database.ref(`users/${uid}/todos/${actions[0].todo.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(todoData);
        done();
    });
});

test('should add todo with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const todoDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };

    store.dispatch(startAddTodo({})).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: 'ADD_TODO',
            todo: {
                id: expect.any(String),
                ...todoDefaults
            }
        });
        return database.ref(`users/${uid}/todos/${actions[0].todo.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(todoDefaults);
        done();
    });
});

test('should setup set todo action object with data', () => {
    const action = setTodos(todos);
    expect(action).toEqual({
        type: 'SET_TODOS',
        todos
    });
});

test('should fetch the todos from Firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetTodos()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_TODOS',
            todos
        });
        done();
    });
});