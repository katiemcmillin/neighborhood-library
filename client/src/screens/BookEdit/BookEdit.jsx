import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBook } from "../../services/books";
import "./BookEdit.css";

const BookEdit = (props) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    img_url: "",
  });
  const { handleEdit } = props;
  const { id } = useParams();

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

  return (
    <div className="book-edit">
      <div className="image-container">
        <img className="edit-book-image" src={book.img_url} alt={book.title} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit(id, book);
          }}
        >
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
      <form
        className="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id, book);
        }}
      >
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
