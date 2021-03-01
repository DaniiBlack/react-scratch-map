import React from 'react';
import '../css/login.css';

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    };

    emailChange = event => {
        this.setState({ email: event.target.value });
    };
    passwordChange = event => {
        this.setState({ password: event.target.value });
    };

    handleLogin = event => {
        event.preventDefault();
        const existingUser = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.onLogin(existingUser)
    }

    render(){
        return (
            <form className='form' onSubmit={this.handleLogin}>
                <label className='label loginLabel'>
                    Email:
                    <input type="email" required name="email" onChange={this.emailChange}/>
                </label>
                <label className='label'>
                    Password:
                    <input type="password" required name="password" onChange={this.passwordChange}/>
                </label>
                <button type="submit" id="register">Login</button>
            </form>
        )
    }
  };

  export default Login;
