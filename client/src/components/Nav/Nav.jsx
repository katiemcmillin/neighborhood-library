// import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Neighborhood Library" />
      </Link>
      {currentUser && (
        <Link to='/books/add'>
          <p>Add Book</p>
        </Link>
      )}
      {currentUser ? (
        <p>Hello, {currentUser.username}!</p>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {currentUser ? (
        <p onClick={handleLogout}>Logout</p>
      ) : (
        <Link to="/register">Register</Link>
      )}
      <hr />
    </header>
  );
}

export default Nav;
