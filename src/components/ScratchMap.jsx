import '../css/ScratchMap.css';
import Profile from './Profile';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function ScratchMap() {
  return (
      <Router>
          <div>
              <Nav />
              <Switch>
                  <Route path='/profile'>
                      <Profile />
                  </Route>
                  <Route path='/register'>
                      <Register />
                  </Route>
                  <Route path='/login'>
                      <Login />
                  </Route>
                  <Route path='/'>
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default ScratchMap;