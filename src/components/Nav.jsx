import {
    Link
} from 'react-router-dom';

function Nav() {
    return (
      <nav>
          <ul>
              <li>
                  <Link to="/">Scratch Pad</Link>
              </li>
              <li>
                  <Link to="/profile">My Profile</Link>
              </li>
              <li>
                  <Link to="/register">Sign up</Link>
              </li>
              <li>
                  <Link to="/login">Login</Link>
              </li>
          </ul>
      </nav>
    );
  }
  
  export default Nav;