import { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getOneBook, putBook } from "../services/books"

const BookEdit = (props) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    img_url: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getOneBook(id);
      setBook(book);
    };
    fetchBook();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await putBook(id, book);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/books/${id}`} />;
  }

  return (
    <div className="book-edit">
      <div className="image-container">
        <img className="edit-book-image" src={book.img_url} alt={book.title} />
        <form onSubmit={handleSubmit}>
          <input
            className="edit-input-image-link"
            placeholder="Image Link"
            value={book.img_url}
            name="img_url"
            required
            onChange={handleChange}
          />
        </form>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            type="text"
            rows={10}
            cols={78}
            name="description"
            value={book.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
