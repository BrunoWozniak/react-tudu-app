import { firebase } from '../firebase/firebase';
import axios from 'axios';

import { store } from '../app';

export const login = (uid, email) => ({
	type: 'LOGIN',
	uid,
	email
});

export const startLogin = ({ email, password }) => {
	return () => {
		axios.post(
			'http://localhost:3000/users/login', 
			{ email, password }
		).then((res) => {
			console.log(JSON.stringify(res.data));
			console.log(res.status);
			console.log(res.statusText);
			console.log(JSON.stringify(res.headers));
			console.log(axios.defaults.headers);
			
			store.dispatch(login(res.data._id, res.data.email));
			// if (history.location.pathname === '/') {
			// 	history.push('/dashboard');
			// }
		});
	};
};

export const logout = () => ({
	type: 'LOGOUT'
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};