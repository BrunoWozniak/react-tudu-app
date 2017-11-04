import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: ''
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
	
	onSubmitLogin = () => {
		if (!this.state.email || !this.state.password) {
            this.setState(() => ({ error: 'Please provide email and password' }));
        } else {
			this.setState(() => ({ error: '' }));
			const loginInfo = {
                email: this.state.email,
                password: this.state.password
			};
            
            this.props.startLogin(loginInfo);
		}
	}
	
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
								onChange={this.onPasswordChange}				/>
						</div>
						<div>
							<p className="box-layout__error">{this.state.error}</p>
						</div>
					</div>

					<div className="box-layout__button-box">
						<button className="button--secondary" onClick={() => alert('Hm, not yet, patience...')}>
							Sign up
						</button>
						<button
							className="button"
							onClick={this.onSubmitLogin}
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
	startLogin: (loginInfo) => dispatch(startLogin(loginInfo))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);