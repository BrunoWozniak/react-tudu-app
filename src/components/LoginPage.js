import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
	<div className="box-layout">
		<div className="box-layout__box">

			<h1 className="box-layout__title">Tudu</h1>
			<p style={{textAlign: 'center'}}>Get your todo list under control and enjoy an amazing peace of mind</p>
			<hr style={{margin: '2.0rem 0rem'}} />
	
			<div className="form">
				<div>
					<input
						name="email"
						type="email"
						className="text-input"
						placeholder="e-mail"
						style={{width: '100%'}}
						autoFocus
					/>
				</div>

				<div>
					<input
						name="newPassword"
						type="password"
						className="text-input"
						placeholder="password"
						style={{width: '100%'}}					/>
				</div>
				<div>
					<p></p>
				</div>
			</div>

			<div className="box-layout__button-box">
				<button className="button" onClick={() => alert('Not yet, patience...')}>
					Sign up
				</button>
				<button className="button" onClick={startLogin}>
					Sign in
				</button>
			</div>

		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);