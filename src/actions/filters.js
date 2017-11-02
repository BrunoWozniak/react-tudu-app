// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOINT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
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