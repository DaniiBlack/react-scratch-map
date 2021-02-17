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
                        <Link to="/map">Map</Link>
                    </li>
                    <li>
                        <button onClick={props.logOut}>Logout {props.name}</button>
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