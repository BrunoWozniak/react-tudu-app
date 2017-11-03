import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import todos from '../fixtures/todos';
import TodoForm from '../../components/TodoForm';

test('should render TodoForm correctly', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render TodoForm with todo data', () => {
    const wrapper = shallow(<TodoForm todo={todos[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error when invalid data at form submission', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<TodoForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<TodoForm />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
    const value = '12.50';
    const wrapper = shallow(<TodoForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input change', () => {
    const value = '12.501';
    const wrapper = shallow(<TodoForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<TodoForm todo={todos[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: todos[0].description,
        note: todos[0].note,
        amount: todos[0].amount,
        createdAt: todos[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<TodoForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<TodoForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});