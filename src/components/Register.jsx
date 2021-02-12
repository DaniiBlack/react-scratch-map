import React from 'react';
import '../css/register.css';


class Register extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    firstNameChange = event => {
        this.setState({ firstName: event.target.value });
    };
    lastNameChange = event => {
        this.setState({ lastName: event.target.value });
    };
    emailChange = event => {
        this.setState({ email: event.target.value });
    };
    passwordChange = event => {
        this.setState({ password: event.target.value });
    };
    confirmPasswordChange = event => {
        this.setState({ confirmPassword: event.target.value });
    };

    handleRegister = event => {
        event.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        console.log("NEW MINION ATTAINED", newUser)
        this.props.onRegister(newUser);
    }

    render() {
        return (
            <form onSubmit={this.handleRegister}>
                <label className="registerLabel">
                    First Name:
                    <input required name="firstName" onChange={this.firstNameChange} />
                </label>
                <label className="registerLabel">
                    Last Name:
                    <input required name="lastName" onChange={this.lastNameChange}/>
                </label>
                <label className="registerLabel">
                    Email:
                    <input type="email" required name="email" onChange={this.emailChange}/>
                </label>
                <label className="registerLabel">
                    Password:
                    <input type="password" required name="password" onChange={this.passwordChange}/>
                </label>
                <label className="registerLabel">
                    Confirm Password:
                    <input type="password" required name="confirmPassword" onChange={this.confirmPasswordChange}/>
                </label>
                <button type="submit" id="register">Submit</button>
            </form>
        );
      }
}
  
  export default Register;