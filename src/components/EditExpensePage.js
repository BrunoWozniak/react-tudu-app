import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmRemoveModal from './ConfirmRemoveModal';

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDelete: props.confirmDelete
        };
    };

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.setState({ confirmDelete: true });
    }

    onConfirmDelete = (expense) => {
        this.setState({ confirmDelete: false });
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    onCancelDelete = () => {
        this.setState({ confirmDelete: false })
    }
    
    render() {
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>
                        Remove Expense
                    </button>
                </div>
                <ConfirmRemoveModal
                    confirmDelete={this.state.confirmDelete}
                    onCancelDelete={this.onCancelDelete}
                    onConfirmDelete={this.onConfirmDelete}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    confirmDelete: undefined
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);