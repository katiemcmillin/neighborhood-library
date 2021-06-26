import { useState, useEffect } from "react";
import { getOneBook, deleteBook, getAllBooks } from "../services/books";
import { useParams, Link, useHistory } from "react-router-dom";
import Rating from "../components/Rating/RatingCreate"


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
      <div>
      <img
        className="book-detail-image"
        src={book.img_url}
        alt={book.title}
        />
        </div>
      <div>
        <div><span>Title:</span><span>{book.title}</span></div>
        <div><span>Author:</span><span>{book.author}</span></div>
        <div><span>Description:</span><span>{book.description}</span></div>
        <div><span>Rating Average:</span><span><Rating book={book}/></span></div>

        </div>
      {props.currentUser && (<div className="button-container">
        <Link className="edit-button" to={`/books/${book.id}/edit`}>
          Edit
        </Link>
        <button className="delete-button" onClick={handleClick}>
          Delete
        </button>
      </div>)}
      </div>
  );
};

export default BookDetail;
