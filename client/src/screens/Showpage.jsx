import { useState, useEffect } from "react";
import { getOneBook, deleteBook, getAllBooks } from "../services/books";
import { useParams, Link, useHistory } from "react-router-dom";

const Showpage = (props) => {
  const [book, setBook] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  let history = useHistory();

  const handleClick = () => {
    deleteBook(book.id);
    getAllBooks();
    history.push("/");
  };

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
      setLoaded(true);
    };
    fetchBook();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="product-detail">
      <img
        className="product-detail-image"
        src={book.img_url}
        alt={book.title}
      />
      <div className="button-container">
        <Link className="edit-button" to={`/books/${book.id}/edit`}>
          Edit
        </Link>
        <button className="delete-button" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Showpage;
