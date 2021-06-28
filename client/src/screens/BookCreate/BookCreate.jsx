//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_responsive_form/
import { useState } from "react";
import { postBook, getAllBooks } from "../../services/books";
import { Redirect } from "react-router-dom";
import "./BookCreate.css";
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
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="action_page.php">
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Title:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="author">Author:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="img_url">Image Link:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="img_url"
              value={book.img_url}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Description:</label>
          </div>
          <div className="col-75">
            <textarea
              name="description"
              style={{ height: "200px" }}
              value={book.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        
        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
export default BookCreate;
