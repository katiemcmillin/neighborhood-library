import { useState } from "react";
import "./Register.css"
function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });
  const { username, password, password_confirmation } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(formData);
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
          <div className="col-25">
            <label htmlFor="password_confirmation">Password Confirmation:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="password_confirmation"
              value={password_confirmation}
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
export default Register;
