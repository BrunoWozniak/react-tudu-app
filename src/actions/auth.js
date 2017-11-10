import axios from 'axios';
import { browserHistory } from 'react-router';

axios.defaults.baseURL = process.env.BACK_END_URL;

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
			'/users',
			{ email, password }
		).then(res => {
			localStorage.setItem('token', res.headers['x-auth']);
			dispatch(auth(res.data._id));
		}).catch(() => {
			dispatch(authError(`Sorry we can't sign you up`));
		});
	};
};

export const startSignin = ({ email, password }) => {
	return (dispatch) => {
		axios.post(
			'/users/login', 
			{ email, password }
		).then(res => {
			localStorage.setItem('token', res.headers['x-auth']);
			dispatch(auth(res.data._id));
		}).catch (() => {
			dispatch(authError(`Sorry we can't sign you in`));
		});
	};
};

export const startSignout = () => {
	return (dispatch) => {
		const token = localStorage.getItem('token');
		axios.delete(
			'/users/me/token',
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