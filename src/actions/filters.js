// SET_TEXT_FILTER
export const setTextFilter = (searchText = '') => ({
	type: 'SET_TEXT_FILTER',
	searchText
});

// SORT_ASCENDING
export const sortByAscendingDate = () => ({
	type: 'SORT_ASCENDING'
});

// SORT_DESCENDING
export const sortByDescendingDate = () => ({
	type: 'SORT_DESCENDING'
});

// SET_START_DATE
export const setStartDateFilter = (startDate = undefined) => ({
	type: 'SET_START_DATE',
	startDate
});

// SET_END_DATE
export const setEndDateFilter = (endDate = undefined) => ({
	type: 'SET_END_DATE',
	endDate
});