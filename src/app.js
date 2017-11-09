import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { auth, deAuth } from './actions/auth';
import { startSetTodos } from './actions/todos';
// import getVisibleTodos from './selectors/todos';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

// In case the user refreshes or comes back after a while
if (localStorage.getItem('token') !== undefined) {
	axios.get(
		'http://localhost:3000/users/me', 
		{ headers: { 'x-auth': localStorage.getItem('token') }}
	).then((res) => {
		store.dispatch(auth(res.data._id));
		store.dispatch(startSetTodos());		
	}).catch(() => {
		store.dispatch(deAuth());
	});
}

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;

const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

renderApp();

history.push('/');