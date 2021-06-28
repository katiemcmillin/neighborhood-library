import { useState } from "react"
import { postBook, getAllBooks } from "../../services/books";
import { Redirect } from "react-router-dom"
import './BookCreate.css'
const BookCreate = (props) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    img_url: "",
  });
  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await postBook(book);
    setCreated({ created });
    getAllBooks();
  };

  if (isCreated) {
    return <Redirect to='/' />;
  }
  return (<form className="create-form" onSubmit={handleSubmit}>
    <div className="input-container">
    <label>Title:
      <input
        type='text'
        name='title'
        value={book.title}
        onChange={handleChange} />
      </label>
    </div>
    <div className="input-container">
    <label>Author:
      <input
        type='text'
        name='author'
        value={book.author}
        onChange={handleChange} />
      </label>
    </div>
    <div className="input-container">
    <label>Description:
      <textarea
        type='text'
        rows={10}
        cols={25}
        name='description'
        value={book.description}
        onChange={handleChange} />
      </label>
    </div>
    <div className="input-container">
    <label>Image Link:
      <input
        type='text'
        name='img_url'
        value={book.img_url}
        onChange={handleChange} />
      </label>
    </div>
    <div className="input-container">
      <button>Submit</button>
    </div>
  </form>)
}
  export default BookCreate;