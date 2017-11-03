import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { startEditTodo, startRemoveTodo } from '../actions/todos';
import ConfirmRemoveModal from './ConfirmRemoveModal';

export class EditTodoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmDelete: props.confirmDelete
        };
    };

    onSubmit = (todo) => {
        this.props.startEditTodo(this.props.todo.id, todo);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.setState({ confirmDelete: true });
    }

    onConfirmDelete = (todo) => {
        this.setState({ confirmDelete: false });
        this.props.startRemoveTodo({ id: this.props.todo.id });
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
                        <h1 className="page-header__title">Edit Todo</h1>
                    </div>
                </div>
                <div className="content-container">
                    <TodoForm
                        todo={this.props.todo}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>
                        Remove Todo
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
    todo: state.todos.find((todo) => todo.id === props.match.params.id),
    confirmDelete: undefined
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditTodo: (id, todo) => dispatch(startEditTodo(id, todo)),
    startRemoveTodo: (id) => dispatch(startRemoveTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoPage);