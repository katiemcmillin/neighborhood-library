import "./App.css";
import Layout from "./layouts/Layout";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import { useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import MainContainer from "./containers/MainContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push("/");
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
