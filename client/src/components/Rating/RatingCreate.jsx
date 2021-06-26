// https://www.npmjs.com/package/react-rating-stars-component
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { postRating } from "../../services/ratings";

function RatingCreate(props) {
  const [rating, setRating] = useState({
    number_of_stars: Number(''),
    book_id: props.book.id
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (value) => {
    setRating({
      ['number_of_stars']: value,
    });

  }
    const handleSubmit = async (event) => {
      event.preventDefault();
      const created = await postRating(rating);
      setCreated({ created });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <ReactStars
          value={rating.number_of_stars}
          count={5}
          onChange={handleChange}
          size={24}
          activeColor="#ffd700"
        />
        <button>Add Rating</button>
      </form>
    );
  }
export default RatingCreate;
