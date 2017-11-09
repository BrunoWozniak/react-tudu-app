import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.todo ? props.todo.text : '',
            dueAt:  props.todo ? moment(props.todo.dueAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    onTextChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({ text }));
    };

    onDateChange = (dueAt) => {
        if (dueAt) {
            this.setState(() => ({ dueAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmitTodo = (e) => {
        e.preventDefault();
        if (!this.state.text || !this.state.dueAt) {
            this.setState(() => ({ error: 'Please provide text and due date' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                text: this.state.text,
                dueAt: this.state.dueAt.valueOf()
            });
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmitTodo}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    className="text-input"
                    placeholder="Text"
                    autoFocus
                    value={this.state.text}
                    onChange={this.onTextChange}
                />
                <SingleDatePicker
                    date={this.state.dueAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <div>
                    <button className="button">
                        Save Todo
                    </button>
                </div>
            </form>
        )
    }
}