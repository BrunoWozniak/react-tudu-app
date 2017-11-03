import React from 'react';
import { shallow } from 'enzyme';
import { AddTodoPage } from '../../components/AddTodoPage';
import todos from '../fixtures/todos';

let startAddTodo, history, wrapper;

beforeEach(() => {
    startAddTodo = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddTodoPage startAddTodo={startAddTodo} history={history} />);
});

test('should render AddTodoPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('TodoForm').prop('onSubmit')(todos[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddTodo).toHaveBeenLastCalledWith(todos[1]);
});
