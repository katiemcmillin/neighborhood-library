import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Nav(props) {
  const { currentUser, handleLogout } = props;
  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Neighborhood Library" />
          </Link>
          {currentUser && (
            <Link id="add-book-link" className="link" to="/books/add">
              <p>Add Book</p>
            </Link>
          )}
        </div>
        <div className="link-div">
          {currentUser ? (
            <p className="link welcome">Hello, {currentUser.username}!</p>
          ) : (
            <Link className="link" id="login-link" to="/login">
              Login
            </Link>
          )}
          {currentUser ? (
            <p className="link" id="logout" onClick={handleLogout}>
              Logout
            </p>
          ) : (
            <Link className="link" to="/register">
              Register
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
