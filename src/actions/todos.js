import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_TODO
export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const startAddTodo = (todoData = {}) => {
    return (dispatch, getState) => {
        const {
            note = '',
            description = '',
            amount = 0,
            createdAt = 0
        } = todoData;
        const todo = {description, note, amount, createdAt};
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/todos`).push(todo).then((ref) => {
            dispatch(addTodo({
                id: ref.key,
                ...todo
            }));
        });
    };
};

// REMOVE_TODO
export const removeTodo = ({ id } = {}) => ({
    type: 'REMOVE_TODO',
    id
});

export const startRemoveTodo = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/todos/${id}`).remove().then(() => {
            dispatch(removeTodo({ id }));
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
    return (dispatch, getState) => {       
        const uid = getState().auth.uid; 
        return database.ref(`users/${uid}/todos/${id}`).update(updates).then(() => {
            dispatch(editTodo(id, updates));
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
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/todos`).once('value').then((snapshot) => {
            const fetchedTodos = [];
            snapshot.forEach((snapshotItem) => {
                fetchedTodos.push({
                    id: snapshotItem.key,
                    ...snapshotItem.val()
                });
            });
            dispatch(setTodos(fetchedTodos));
        }).catch((e) => {
            console.log('Error!', e);
        });
    };
};