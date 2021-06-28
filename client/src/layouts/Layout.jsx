import Nav from "../components/Nav/Nav";

const Layout = (props) => {
  const { currentUser, children, handleLogout } = props;
  return (
    <div className="layout">
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      <div className="layout-children">{children}</div>
    </div>
  );
};

export default Layout;
