import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../components/TodoList';
import todos from '../fixtures/todos';

test('should render TodoList with todos', () => {
    const wrapper = shallow(<TodoList todos={todos}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render TodoList with empty todo list', () => {
    const wrapper = shallow(<TodoList todos={[]}/>);
    expect(wrapper).toMatchSnapshot();
});