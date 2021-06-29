import { useState, useEffect } from "react";
import Search from "../../components/Search/Search";
import Book from "../../components/Book/Book";
import "./Books.css";

function Books(props) {
  const [searchResult, setSearchResult] = useState([]);
  const { books } = props;
  useEffect(() => {
    setSearchResult(books);
  }, [books]);
  const handleSearch = (event) => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };
  const handleSubmit = (event) => event.preventDefault();

  return (
    <div>
      <h3>Check Out A Book!</h3>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className="books">
        {searchResult.map((book) => {
          return (
            <Book
              id={book.id}
              title={book.title}
              description={book.description}
              imgURL={book.img_url}
              key={book.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Books;
