import React from 'react';
import { shallow } from 'enzyme';
import { TodoSummary } from '../../components/TodoSummary';
import todos from '../fixtures/todos';

test('should render TodoSummary with 2 todos', () => {
    const numberOfTodo = 2;
    const totalAmount = 123450;
    const wrapper = shallow(
        <TodoSummary
            numberOfTodos={numberOfTodo}
            totalAmount={totalAmount}
        />);
    expect(wrapper).toMatchSnapshot();
});

test('should render TodoSummary with 1 todo', () => {
    const numberOfTodo = 1;
    const totalAmount = 123450;
    const wrapper = shallow(
        <TodoSummary
            numberOfTodos={numberOfTodo}
            totalAmount={totalAmount}
        />);
    expect(wrapper).toMatchSnapshot();
});