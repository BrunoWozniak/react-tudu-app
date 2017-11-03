import React from 'react';
import { shallow } from 'enzyme';
import { EditTodoPage } from '../../components/EditTodoPage';
import { ConfirmRemoveModal } from '../../components/ConfirmRemoveModal';
import todos from '../fixtures/todos';

let startEditTodo, startRemoveTodo, history, wrapper;

beforeEach(() => {
    startEditTodo = jest.fn();
    startRemoveTodo = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditTodoPage
        startEditTodo={startEditTodo}
        startRemoveTodo={startRemoveTodo}
        history={history}
        todo={todos[2]}
    />);
});

test('should render EditTodo correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('TodoForm').prop('onSubmit')(todos[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditTodo).toHaveBeenLastCalledWith(todos[2].id, todos[2]);
});

test('should handle onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state('confirmDelete')).toBe(true);
});