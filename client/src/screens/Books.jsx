import {useState, useEffect} from "react"
import Search from "../components/Search/Search";
import { getAllBooks } from "../services/books";
import Book from "../components/Book";

function Books(props) {
  const [searchResult, setSearchResult] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
      setSearchResult(booksData);
    };
    fetchBooks();
  }, []);

  const handleSearch = (event) => {
    const results = books.filter((book) =>
      (book.title).toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };
  const handleSubmit = (event) => event.preventDefault();

  return (<div>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className='books'>
        {searchResult.map((book) => {
          return (
            <Book
              id={book.id}
              title={book.title}
              description={book.description}
              imgURL={book.img_url}
              key={book.id}
            />
          )
        })}
      </div>
     {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} />
    {books && books.map((book) => (
      <Link key={book.id} to={`/books/${book.id}`}>
        <img src={book.img_url} alt={book.title} />
      </Link>
    ))} */}
    
  </div>)
}
export default Books