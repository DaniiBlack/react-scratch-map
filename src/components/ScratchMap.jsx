import React from 'react';
import '../css/scratchMap.css';
import Profile from './Profile';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
class ScratchMap extends React.Component {

    state = {
        loggedIn: false,
        user: {},
        users: [{
            firstName: "Blake",
            lastName: "Aya",
            email: "cat@gmail.com.au",
            password: "chicken"
        }],
        redirect: null
    }

    userRegistered = user => {
        console.log("User Registered Successfully", user);
        this.setState({ loggedIn: true, user: user, redirect: "/profile" });
    }

    userLogin = user => {
        const foundUser = this.state.users.find(u => {
            return (u.email === user.email && u.password === user.password)
        })
        if (foundUser) {
            this.setState({ loggedIn: true, user: foundUser, redirect: "/profile" })
        }
    };

    render() {
        if(this.state.redirect) {
            return (<Redirect to={this.state.redirect} />)
        }
        return (
                <div>
                    <Nav loggedIn={ this.state.loggedIn } name={ this.state.user.firstName }/>
                    <Switch>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/register'>
                            <Register onRegister={this.userRegistered}/>
                        </Route>
                        <Route path='/login'>
                            <Login onLogin={this.userLogin}/>
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
        );
    }

}

export default ScratchMap;