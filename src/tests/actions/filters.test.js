import moment from 'moment';
import { setStartDateFilter, setEndDateFilter, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDateFilter(moment(10));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(10)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDateFilter(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});


test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate set text filter action object with provided text', () => {
    const action = setTextFilter('filter text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'filter text'
    })
});

test('should generate set text filter action object with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});