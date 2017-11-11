import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { startAddTodo } from '../actions/todos';


export class AddTodoPage extends React.Component {
    onSubmit = (todo) => {
        this.props.startAddTodo(todo);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add a Todo</h1>

                    </div>
                </div>
                <div className="content-container">
                    <TodoForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddTodo: (todo) => dispatch(startAddTodo(todo))
});

export default connect(undefined, mapDispatchToProps)(AddTodoPage);