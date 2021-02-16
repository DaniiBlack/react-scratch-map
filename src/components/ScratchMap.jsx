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

    userLogin = user => {
        const foundUser = this.state.users.find(u => {
            return (u.email === user.email && u.password === user.password)
        })
        if (foundUser) {
            this.setState({ loggedIn: true, user: foundUser })
            this.props.history.push('/profile')
        }
    };
    userRegistered = user => {
        console.log("User Registered Successfully", user);
        this.setState({ users: [...this.state.users, ...[user]] });
        this.userLogin({email:user.email, password:user.password})
    }
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