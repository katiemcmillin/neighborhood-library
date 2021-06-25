import { Link} from "react-router-dom"

function Books(props) {
  const {books } = props
  return (<div>
    {books && books.map((book) => (
      <Link key={book.id} to={`/books/${book.id}`}>
        <img src={book.img_url} alt={book.title} />
      </Link>
    ))}
    
  </div>)
}
export default Books