import moment from 'moment';
import selectTodos from '../../selectors/todos';
import todos from '../fixtures/todos';

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectTodos(todos, filters);
    expect(result).toEqual([ todos[2], todos[1] ]);
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectTodos(todos, filters);
    expect(result).toEqual([ todos[2], todos[0] ]);
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectTodos(todos, filters);
    expect(result).toEqual([ todos[0], todos[1] ]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectTodos(todos, filters);
    expect(result).toEqual([ todos[2], todos[0], todos[1] ]);
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectTodos(todos, filters);
    expect(result).toEqual([ todos[1], todos[2], todos[0] ]);
});