export default (state = {}, action) => {
	switch(action.type) {
	case 'SIGNUP':
		return {
			uid: action.uid,
			email: action.email,
			signupError: action.error
		};
	case 'LOGIN':
		return {
			uid: action.uid,
			email: action.email,
			loginError: action.error
		};
	case 'LOGOUT':
		return {};
	default:
		return state;
	}
};