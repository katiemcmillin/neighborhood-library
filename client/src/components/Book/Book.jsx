import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <div className="book-div">
      <Link className="book" to={`/books/${props.id}`}>
        <img className="book-image" src={props.imgURL} alt={props.title} />
      </Link>
    </div>
  );
};
export default Book;
