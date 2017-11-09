export default (state = {}, action) => {
	switch(action.type) {
	case 'AUTH':
		return {
			...state,
			uid: action.uid,
			authenticated: true,
			authError: ''
		};
	case 'DE_AUTH':
		return {
			...state,
			authenticated: false
		};
	case 'AUTH_ERROR':
		return {
			...state,
			authenticated: false,
			authError: action.error
		};
	default:
		return state;
	}
};