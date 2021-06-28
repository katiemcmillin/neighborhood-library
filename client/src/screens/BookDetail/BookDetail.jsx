import { useState, useEffect } from "react";
import { getOneBook} from "../../services/books";
import { postRating } from "../../services/ratings";
import { useParams, Link} from "react-router-dom";
import AvgRating from "../../components/AvgRating/AvgRating";
import RatingCreate from "../../components/RatingCreate/RatingCreate";
import "./BookDetail.css";

const BookDetail = (props) => {
  const [book, setBook] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(id);
      setBook(bookData);
      setLoaded(true);
    };
    fetchBook();
  }, [id]);

  const handleCreateRating = async (rating) => {
    const newRating = await postRating({
      number_of_stars: rating,
      book_id: id,
    });
    setBook((prevState) => ({
      ...prevState,
      ratings: [...prevState.ratings, newRating],
    }));
  };
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="book-detail">
      <img className="book-detail-image" src={book.img_url} alt={book.title} />
      <div className="detail">
        <div className="label-container">
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
            <AvgRating ratings={book.ratings} />
          </div>
        </div>
        <div>
          <span className="detail-label">User Rating:</span>
          <div>
            <RatingCreate
              userRating={book.ratings.find(
                (rating) => rating.user_id === currentUser?.id
              )}
              handleCreateRating={handleCreateRating}
            />
          </div>
        </div>

        {currentUser && (
          <div className="button-container">
            <Link className="edit-button" to={`/books/${id}/edit`}>
              Edit
            </Link>
            <button className="delete-button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
