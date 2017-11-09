import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startSignout } from '../actions/auth';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	signout = () => {
		this.props.startSignout();
	}

	render() {
		return (
			<header className="header">
				<div className="content-container">
					<div className="header__content">
						<Link className="header__title" to="/dashboard">
							<h1>Tudu</h1>
						</Link>
						<button className="button button--link" onClick={this.signout}> Sign out </button>
					</div>
				</div>
			</header>
		);
	}
};

const mapDispatchToProps = (dispatch) => ({
	startSignout: () => dispatch(startSignout())
});

export default connect(undefined, mapDispatchToProps)(Header);
