import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import TodoDashboardPage from '../components/TodoDashboardPage';
import AddTodoPage from '../components/AddTodoPage';
import EditTodoPage from '../components/EditTodoPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true}/>
				<PrivateRoute path="/dashboard" component={TodoDashboardPage} />
				<PrivateRoute path="/create" component={AddTodoPage}/>
				<PrivateRoute path="/edit/:id" component={EditTodoPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);

export default AppRouter;