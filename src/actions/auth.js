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
	return async (dispatch) => {
		try {
			const res = await axios.post(
				'http://localhost:3000/users', 
				{ email, password }
			);
			localStorage.setItem('token', res.headers.x-auth);
			dispatch(auth(res.data._id));
			browserHistory.push('/dashboard');
		} catch (err) {
			dispatch(authError(err));
		}
	};
};

export const startSignin = ({ email, password }) => {
	return async (dispatch) => {
		try {
			const res = await axios.post(
				'http://localhost:3000/users/login', 
				{ email, password }
			);
			localStorage.setItem('token', res.headers.x-auth);			
			dispatch(auth(res.data._id));
			browserHistory.push('/dashboard');
		} catch (err) {
			dispatch(authError(err));
		}
	};
};

export const startSignout = () => {
	return async (dispatch) => {
		try {
			const token = localStorage.getItem('token');
			localStorage.removeItem('token');
			dispatch(deAuth());
			await axios.delete(
				'http://localhost:3000/users/me/token',
				{ headers: { 'x-auth': token }}
			);
		} catch(err) {

		}
	};
};

export const fetchUser = () => {
	return async (dispatch) => {
		try {
			token = localStorage.getItem('token');
			const res = await axios.get(
				'http://localhost:3000/users/me', 
				{ headers: { 'x-auth': token }}
			);			
			dispatch(auth(res.data._id));
		} catch (err) {
			dispatch(authError(err));
		}
	};
};