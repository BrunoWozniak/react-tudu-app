import moment from 'moment';

// Get visible todos

export default (todos, { searchText, sortBy, startDate, endDate }) => {
	return todos.filter(({ dueAt, text }) => {
		const dueAtMoment = moment(dueAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(dueAtMoment, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(dueAtMoment, 'day') : true;
		const textMatch = text.toLowerCase().includes(searchText.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((a, b) => {
		if (sortBy === 'descending') {
			return a.dueAt < b.dueAt ? 1 : -1;
		} else if (sortBy === 'ascending') {
			return a.dueAt > b.dueAt ? 1 : -1;
		}
	});
};