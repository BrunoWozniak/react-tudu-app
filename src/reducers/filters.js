import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
	searchText: '',
	sortBy: 'descending',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
	switch(action.type) {
	case 'SET_TEXT_FILTER':
		return {...state, searchText: action.searchText};
	case 'SORT_ASCENDING':
		return {...state, sortBy: 'ascending'};
	case 'SORT_DESCENDING':
		return {...state, sortBy: 'descending'};
	case 'SET_START_DATE':
		return {...state, startDate: action.startDate};
	case 'SET_END_DATE':
		return {...state, endDate: action.endDate};
	default:
		return state;
	}
};