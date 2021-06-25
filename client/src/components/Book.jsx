import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <>
      <Link to={`/book/${props.id}`}>
        <img src={props.imgURL} alt={props.title} />
      </Link>
    </>
  );
};
export default Book;
