import {
    Link
} from 'react-router-dom';

function Nav(props) {
    if (props.loggedIn) {
        return (
            <nav>
                <Link to="/">
                  <h2>Home</h2>
                </Link>

                <Link to="/map">
                <h2>My Map</h2>
                </Link>

                <Link to="/profile">
                <h2>My Profile</h2>
                </Link>

                <button onClick={props.logOut}>Logout {props.name}</button>

            </nav>
        )
    } else {
        return (
          <nav>
            <Link to="/">
              <h2>Home</h2>
            </Link>

            <Link to="/register">
              <h2>Sign up</h2>
            </Link>

            <Link to="/login">
              <h2>Login</h2>
            </Link>
          </nav>
        )
    }
}
  export default Nav;
