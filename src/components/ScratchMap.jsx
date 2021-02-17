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
            user: user,
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

    logOut() {
        this.setState({
            checkedSession: true,
            user: {},
            loggedIn: false
        })
        this.props.history.push('/')
    }

    componentDidMount() {
        axios.get('http://localhost:3000/login', {withCredentials: true} ).then(result => {
            this.loginSuccess(result.data)
        }).catch(() => this.loginFail())
    }

    userLogout = () => {
        axios.delete('http://localhost:3000/login', {withCredentials: true} ).then(result => {
            this.logOut()
        })
    }

    userLogin = user => {
        axios.post('http://localhost:3000/login', user, {withCredentials: true} ).then(result => {
            this.loginSuccess(result.data)
        }).catch(() => this.loginFail())
    };

    userRegistered = user => {
        axios.post('http://localhost:3000/users', {user}, {withCredentials: true} ).then(result => {
            this.loginSuccess(result.data)
        }).catch(() => this.loginFail())
    }

    render() {
        if(!this.state.checkedSession) {
            return(<div>Loading ... </div>)
        }
        return (
            <div>
                <Nav logOut={this.userLogout} loggedIn={ this.state.loggedIn } name={ this.state.user.name }/>
                <Switch>
                    <Route path='/profile' >
                        <Profile
                            name={this.state.user.name}
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
                        <Map />
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
