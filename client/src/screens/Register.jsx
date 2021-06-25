import { useState } from "react"
function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password_confirmation: ""
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
    e.preventDefault()
    handleRegister(formData)    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <label>Username:
        <input
          type='text'
          name='username'
          value={username}
          onChange={handleChange}/>
      </label>
      <label>Password:
        <input
          type='text'
          name='password'
          value={password}
          onChange={handleChange}/>
      </label>
      <label>Password Confirmation:
        <input
          type='text'
          name='password_confirmation'
          value={password_confirmation}
          onChange={handleChange}/>
      </label>
      <button>Submit</button>
    </form>
  )
}
export default Register;
