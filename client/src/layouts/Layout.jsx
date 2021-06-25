// import Nav from '../components/Nav/Nav'
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
const Layout = (props) => {
  const { currentUser, children, handleLogout } = props
  return  (<div className='layout'>
    <header><Link to='/'><img src={logo} alt='Neighborhood Library'/></Link>
      {currentUser && <Link><p>Add Book</p></Link>}
      {currentUser ? (<p>Hello, {currentUser.username}!</p>) : (<Link to='/login'>Login</Link>)}
      {currentUser ? <p onClick={handleLogout }>Logout</p>: (<Link to='/register'>Register</Link>)}
      <hr />
    </header>
        <div className="layout-children">
            {children}
        </div>
    </div>
)}

export default Layout