import { useState } from "react"


function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData
  const {handleLogin} = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(formData)    
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
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
      <button>Submit</button>
    </form>
  )
}
export default Login
