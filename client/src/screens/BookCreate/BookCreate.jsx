import { useState } from "react"
import { postBook, getAllBooks } from "../../services/books";
import { Redirect } from "react-router-dom"
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
  return (<form onSubmit={handleSubmit}>
    <label>Title:
      <input
        type='text'
        name='title'
        value={book.title}
        onChange={handleChange} />
    </label>
    <label>Author:
      <input
        type='text'
        name='author'
        value={book.author}
        onChange={handleChange} />
    </label>
    <label>Description:
      <input
        type='text'
        rows={10}
        cols={78}
        name='description'
        value={book.description}
        onChange={handleChange} />
    </label>
    <label>Image Link:
      <input
        type='text'
        name='img_url'
        value={book.img_url}
        onChange={handleChange} />
    </label>
    <button>Submit</button>
  </form>)
}
  export default BookCreate;