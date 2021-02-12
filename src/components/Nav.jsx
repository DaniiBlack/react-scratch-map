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
          </ul>
      </nav>
    );
  }
  
  export default Nav;