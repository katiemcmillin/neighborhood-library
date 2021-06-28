//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_responsive_form/
import { useState } from "react";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="action_page.php">
        <div className="row">
          <div className="col-25">
            <label htmlFor="username">Username:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="password">Password:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
export default Login;
