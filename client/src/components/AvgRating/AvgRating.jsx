import Ratings from "react-ratings-declarative";

export default function AvgRating(props) {
  const { ratings } = props;

  const calcAvgRating = () => {
    return (ratings.reduce((acc, rating) => {
      return acc + rating.number_of_stars;
    }, 0))/ratings.length;
  };
  return (
    <Ratings
      rating={calcAvgRating() || 0}>
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
      <Ratings.Widget />
    </Ratings>
  );
}
