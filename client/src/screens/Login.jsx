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

/* // <form className="create-form" onSubmit={handleSubmit}>

      //     <label>
      //       Title:
      //       <input
      //         className="input-title"
      //         type="text"
      //         name="title"
      //         value={book.title}
      //         onChange={handleChange}
      //       />
      //     </label>
    
  
      //     <label>
      //       Author:
      //       <input
      //         className="input-author"
      //         type="text"
      //         name="author"
      //         value={book.author}
      //         onChange={handleChange}
      //       />
      //     </label>

      //     <label>
      //       Description:
      //       <textarea
      //         className="textarea-description"
      //         type="text"
      //         rows={10}
      //         cols={25}
      //         name="description"
      //         value={book.description}
      //         onChange={handleChange}
      //       />
      //     </label>

      //     <label>
      //       Image Link:
      //       <input
      //         className="input-image-link"
      //         type="text"
      //         name="img_url"
      //         value={book.img_url}
      //         onChange={handleChange}
      //       />
      //     </label>

      //     <button className="submit-button">Submit</button>
      // </form>*/
