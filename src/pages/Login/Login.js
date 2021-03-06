import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import Form from './Form.js';

class Login extends Component {
	 constructor(props) {
			super(props);
			window.FB.init({
	      appId      : '298824577401793',
	      cookie     : true,
	      xfbml      : true,
	      version    : 'v3.2'
	    });

	    this.state = {
	      email: "",
	      password: ""
	    };
		}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	// Submited values
	handleSubmit = event => {
		event.preventDefault();

		console.log(`${this.state.email} ${this.state.password}`);
		
		// Clear inputs.
		this.setState({email: ''});
		this.setState({password: ''});
		
	}

	render() {
		const { onSignUp, checkLoginState } = this.props;
		return (
			<div className="Login">
				<Form onSubmit={this.handleSubmit}>
					<label htmlFor="email">
					  Email
						<input
						type="email"
						name="email"
						placeholder=""
						onChange={this.onEmailChange}
						/>
					</label>
					<label htmlFor="password">
					  Password
						<input
						type="password"
						name="password"
						placeholder=""
						onChange={this.onPasswordChange}
						/>
					</label>
					<div className="forgot-password">
						<a href="url">I forgot my password</a>
					</div>
					<div className="btnContainer">
					    <button type="submit" disabled={!this.validateForm()}>Login</button>
				  </div>
					<p className = 'u-text-center'>No account? 
						<Link className="nav-item" to='/signup' onClick={onSignUp}> SignUp </Link>
						&ensp;Or sign up with:
					</p>
					<div className="btnContainer">
							<div className="fb-login-button" 
								data-size="large" 
								data-button-type="login_with" 
								data-auto-logout-link="false" 
								data-use-continue-as="false"
								onClick={checkLoginState}
								>
							</div>
					</div>
				</Form>
			</div>
		);
	}
}

export default Login;