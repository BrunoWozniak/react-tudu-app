import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with 2 expenses', () => {
    const numberOfExpense = 2;
    const totalAmount = 123450;
    const wrapper = shallow(
        <ExpenseSummary
            numberOfExpenses={numberOfExpense}
            totalAmount={totalAmount}
        />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with 1 expense', () => {
    const numberOfExpense = 1;
    const totalAmount = 123450;
    const wrapper = shallow(
        <ExpenseSummary
            numberOfExpenses={numberOfExpense}
            totalAmount={totalAmount}
        />);
    expect(wrapper).toMatchSnapshot();
});