import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSignout } from '../actions/auth';

export const Header = ({ startSignout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>Tudu</h1>
				</Link>
				<button className="button button--link" onClick={startSignout}> Sign out </button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startSignout: () => dispatch(startSignout())
});

export default connect(undefined, mapDispatchToProps)(Header);