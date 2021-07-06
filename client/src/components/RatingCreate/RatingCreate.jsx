//https://www.npmjs.com/package/react-ratings-declarative
import Ratings from "react-ratings-declarative";

export default function RatingCreate(props) {
  const { userRating, handleCreateRating } = props;
  return (
    <Ratings
      changeRating={handleCreateRating}
      rating={userRating?.number_of_stars || 0}
    >
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
}
