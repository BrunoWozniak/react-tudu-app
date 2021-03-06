import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import todosReducer from '../reducers/todos';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store Creation

export default () => {
	const store = createStore(
		combineReducers({
			todos: todosReducer,
			filters: filtersReducer,
			auth: authReducer
		}), composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};