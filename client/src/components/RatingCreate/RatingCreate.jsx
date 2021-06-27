// https://www.youtube.com/watch?v=eDw46GYAIDQ
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./RatingCreate.css";
// import Book from "../Book/Book";
import { getAllRatings, postRating } from "../../services/ratings";

function RatingCreate(props) {
  const [ratings, setRatings] = useState([]);
  const [rating, setRating] = useState({
    number_of_stars: Number(""),
    book_id: props.book.id,
  });
  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsData = await getAllRatings();
      setRatings(ratingsData);
    };
    fetchRatings();
  }, []);

  const [hover, setHover] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRating({
      ...rating,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let created = false;
    ratings.forEach((rating) => {
      if (
        rating.user_id === props.currentUser.id &&
        rating.book_id === rating.book_id
      ) {
        console.log(
          rating.user_id,
          props.currentUser.id,
          rating.book_id,
          rating.book_id
        );
        created = true;
        setRating({ number_of_stars: rating.number_of_stars });
      }
    });
    if (!created) {
      const newRating = await postRating(rating);
      console.log(newRating);
    }
  };
  // let ratingValue = null;
  // let userRating = null;
  // ratings.forEach((rating) => {

  //   if (rating.user_id === props.currentUser.id && rating.book_id === rating.book_id) {
  //     rating = userRating
  //     return true
  //   }
  // });

  return (
    <div className="rating-container">
      <form onSubmit={handleSubmit}>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="number_of_stars"
                value={ratingValue}
                onClick={handleChange}
              />
              <FaStar
                className="star"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={30}
              />
            </label>
          );
        })}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
export default RatingCreate;
