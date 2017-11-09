import axios from 'axios';
import { browserHistory } from 'react-router';

export const auth = (uid) => ({
	type: 'AUTH',
	uid
});

export const deAuth = () => ({
	type: 'DE_AUTH'
});

export const authError = (error) => ({
	type: 'AUTH_ERROR',
	error
});

export const startSignup = ({ email, password }) => {
	return (dispatch) => {
		axios.post(
			'http://localhost:3000/users', 
			{ email, password }
		).then(res => {
			dispatch(auth(res.data._id));
			localStorage.setItem('token', res.headers['x-auth']);
		}).catch(() => {
			dispatch(authError(`Sorry we can't sign you up`));
		});
	};
};

export const startSignin = ({ email, password }) => {
	return (dispatch) => {
		axios.post(
			'http://localhost:3000/users/login', 
			{ email, password }
		).then(res => {
			dispatch(auth(res.data._id));
			localStorage.setItem('token', res.headers['x-auth']);
		}).catch (() => {
			dispatch(authError(`Sorry we can't sign you in`));
		});
	};
};

export const startSignout = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		axios.delete(
			'http://localhost:3000/users/me/token',
			{ headers: { 'x-auth': token }}
		).then(() => {
			localStorage.removeItem('token');
			dispatch(deAuth());
		}).catch(() => {
			localStorage.removeItem('token');
			dispatch(deAuth());
		});
	};
};