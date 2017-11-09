import React from 'react';
import { connect } from 'react-redux';
import { startSignin, startSignup } from '../actions/auth';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			formError: ''
		};
	}

	onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
	}
	
	onSubmitSignin = () => {
		if (!this.state.email || !this.state.password) {
            this.setState(() => ({ formError: 'Please provide email and password' }));
        } else {
			this.setState(() => ({ formError: '' }));
			this.props.startSignin({
                email: this.state.email,
                password: this.state.password
			});
		}
	}

	onSubmitSignup = (e) => {
		e.preventDefault();
		if (!this.state.email || !this.state.password) {
            this.setState(() => ({ formError: 'Please provide email and password' }));
        } else {
			this.setState(() => ({ formError: '' }));
			this.props.startSignup({
                email: this.state.email,
                password: this.state.password
			});
		}
	}

	errorMessage = () => (
		!!this.state.formError
			? this.state.formError
			: this.props.authError
				? this.props.authError
				: ''
	)
	
	render() {
		return (
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
								onChange={this.onEmailChange}
							/>
						</div>

						<div>
							<input
								name="newPassword"
								type="password"
								className="text-input"
								placeholder="password"
								style={{width: '100%'}}	
								onChange={this.onPasswordChange}
							/>
						</div>
						<div>
							<p className="box-layout__error">{this.errorMessage()}</p>
						</div>
					</div>

					<div className="box-layout__button-box">
						<button
							className="button"
							onClick={this.onSubmitSignup}
						>
							Sign up
						</button>
						<button
							className="button"
							onClick={this.onSubmitSignin}
						>
							Sign in
						</button>
					</div>

				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startSignin: (signinInfo) => dispatch(startSignin(signinInfo)),
	startSignup: (signupInfo) => dispatch(startSignup(signupInfo))
});

const mapStateToProps = (state) => ({
		authError: state.auth.authError,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);