import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filters values', () => {
    const result = filtersReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {
    const text = 'text'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should set start end filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});