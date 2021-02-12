import {
    Link
} from 'react-router-dom';

function Nav(props) {
    if (props.loggedIn) {
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
                    <Link to="/logout">Logout {props.name}</Link>
                </li>
            </ul>
        </nav>
        ) 
    } else {
        return (
            <nav>
            <ul>
                <li>
                    <Link to="/">Scratch Pad</Link>
                </li>
                <li>
                    <Link to="/register">Sign up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
        )
    }
}
  export default Nav;