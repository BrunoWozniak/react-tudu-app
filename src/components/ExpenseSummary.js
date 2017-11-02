import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({ numberOfExpenses, totalAmount, totalNumberOfExpenses }) => {
    const expenseWord = numberOfExpenses > 1 ? 's' : '';
    const formattedTotal = numeral(totalAmount / 100).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{numberOfExpenses}</span> expense{expenseWord} of <span>{totalNumberOfExpenses}</span> totalling <span>{formattedTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        numberOfExpenses: selectExpenses(state.expenses, state.filters).length,
        totalAmount: expensesTotal(selectExpenses(state.expenses, state.filters)),
        totalNumberOfExpenses: state.expenses.length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);