import React from 'react';
import { shallow } from 'enzyme';
import todos from '../fixtures/todos';
import TodoListItem from '../../components/TodoListItem';

test ('should render TodoListItem with one todo', () => {
    const wrapper = shallow(<TodoListItem {...todos[0]} />);
    expect(wrapper).toMatchSnapshot();
});