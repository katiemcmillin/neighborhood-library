// import "./Nav.css";
// import { NavLink } from "react-router-dom";
// import logo from "../../images/logo.png"

// const authenticatedOptions = (
//   <>
//     <NavLink className="link" to="/add-book">
//       Add Book
//     </NavLink>
//     <NavLink className="link" to="/sign-out">
//       Logout
//     </NavLink>
//   </>
// );
// const unauthenticatedOptions = (
//   <>
//     <NavLink className="link" to="/sign-in">
//       Login
//     </NavLink>
//     <NavLink className="link" to="/sign-up">
//       Register
//     </NavLink>
//   </>
// );
// const alwaysOptions = (
//   <>
//     <NavLink className="link" to="/books">
//       Books
//     </NavLink>
//   </>
// );
// const Nav = ({ user }) => {
//   return (
//     <nav>
//       <div className="nav">
//         <NavLink className="logo" to="/">
//           <img src={logo} alt="Neighborhood Library"/>
//         </NavLink>
//         <div className="links">
//           {user && <div className="link welcome">Hello, {user.username}</div>}
//           {alwaysOptions}
//           {user ? authenticatedOptions : unauthenticatedOptions}
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Nav;