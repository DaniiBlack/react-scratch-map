import React from 'react';
import '../css/scratchMap.css';
import Profile from './Profile';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import axios from 'axios';
import Map from './Map';
import {
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';
class ScratchMap extends React.Component {

    state = {
        checkedSession: false,
        loggedIn: false,
        user: {},
    }

    loginSuccess(user) {
        this.setState({
            checkedSession: true,
            user,
            loggedIn: true
        })
        this.props.history.push('/profile')
    }

    loginFail() {
        this.setState({
            checkedSession: true,
            user: {},
            loggedIn: false
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3000/login', {withCredentials: true} ).then(result => {
            this.loginSuccess(result.data)
            this.props.history.push('/profile')
        }).catch(() => this.loginFail())
    }

    userLogout = () => {
        axios.get('http://localhost:3000/login', {withCredentials: true} ).then(result => {
            this.loginSuccess(result.data)
            this.props.history.push('/profile')
        }).catch(() => this.loginFail())
    }

    userLogin = user => {
        axios.post('http://localhost:3000/login', user, {withCredentials: true} ).then(result => {
            this.loginSuccess(result.data)
        }).catch(() => this.loginFail())
    };

    render() {
        return (
            <div>
                <Nav loggedIn={ this.state.loggedIn } name={ this.state.user.firstName }/>
                <Switch>
                    <Route path='/profile' >
                        <Profile                         
                            firstName={this.state.user.firstName}
                            lastName={this.state.user.lastName}
                            email={this.state.user.email}
                        />
                    </Route>
                    <Route path='/register'>
                        <Register onRegister={this.userRegistered}/>
                    </Route>
                    <Route path='/login'>
                        <Login onLogin={this.userLogin}/>
                    </Route>
                    <Route path='/map'>
                        <Map/>
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        );
    }
}
export default withRouter(ScratchMap);