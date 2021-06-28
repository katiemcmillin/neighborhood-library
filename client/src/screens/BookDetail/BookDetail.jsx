import { useState, useEffect } from "react";
import { getOneBook, deleteBook, getAllBooks } from "../../services/books";
import { useParams, Link, useHistory } from "react-router-dom";
import Rating from "../../components/RatingCreate/RatingCreate.jsx";
import './BookDetail.css'

const BookDetail = (props) => {
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
    <div className="book-detail">
      <img className="book-detail-image" src={book.img_url} alt={book.title} />
      <div className="detail">
        <div classname="label-container">
          <span className="detail-label">Title:</span>
          <span>{book.title}</span>
        </div>
        <div>
          <span className="detail-label">Author:</span>
          <span>{book.author}</span>
        </div>
        <div>
          <span className="detail-label">Description:</span>
          <span>{book.description}</span>
        </div>
        <div>
          <span className="detail-label">Rating Average:</span>
          <div>
            <Rating currentUser={props.currentUser} book={book} />
          </div>
        </div>

        {props.currentUser && (
          <div className="button-container">
            <Link className="edit-button" to={`/books/${book.id}/edit`}>
              Edit
            </Link>
            <button className="delete-button" onClick={handleClick}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
