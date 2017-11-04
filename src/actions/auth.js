import { firebase } from '../firebase/firebase';
import axios from 'axios';

import { store } from '../app';

export const signup = (uid, email, error) => ({
	type: 'SIGNUP',
	uid,
	email,
	error,
});

export const startSignup = ({ email, password }) => {
	return async () => {
		try {
			const res = await axios.post(
				'http://localhost:3000/users', 
				{ email, password }
			);
			console.log(JSON.stringify(res.data));
			console.log(res.status);
			console.log(res.statusText);
			console.log(JSON.stringify(res.headers));
			console.log(axios.defaults.headers);
			
			store.dispatch(signup(res.data._id, res.data.email, false));
		} catch (err) {
			store.dispatch(signup(null, null, true));
		}
	};
};

export const login = (uid, email, error) => ({
	type: 'LOGIN',
	uid,
	email,
	error
});

export const startLogin = ({ email, password }) => {
	return async () => {
		try {
			const res = await axios.post(
				'http://localhost:3000/users/login', 
				{ email, password }
			);
			console.log(JSON.stringify(res.data));
			console.log(res.status);
			console.log(res.statusText);
			console.log(JSON.stringify(res.headers));
			console.log(axios.defaults.headers);
			
			store.dispatch(login(res.data._id, res.data.email, false));
		} catch (err) {
			store.dispatch(login(null, null, true));
		}
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	axios.delete(
		'http://localhost:3000/users/me/token'
	).then((res) => {
		console.log(JSON.stringify(res.data));
		console.log(res.status);
		console.log(res.statusText);
		console.log(JSON.stringify(res.headers));
		console.log(axios.defaults.headers);
		
		store.dispatch(logout());
		// if (history.location.pathname === '/') {
		// 	history.push('/dashboard');
		// }
	});
};