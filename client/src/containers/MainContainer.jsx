import { useState, useEffect } from "react";
import { getAllBooks } from "../services/books";
import { Switch, Route } from "react-router-dom";
import { AZ, ZA, lowestFirst, highestFirst } from "../utils/sort";
import Books from "../screens/Books";
import Search from "../components/Search/Search";
import Sort from "../components/Sort/Sort";
import BookDetail from "../screens/BookDetail";
import BookCreate from "../screens/BookCreate";

function MainContainer() {
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [applySort, setApplySort] = useState(false);
  const [sortType, setSortType] = useState("name-ascending");

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
      setSearchResult(booksData);
    };
    fetchBooks();
  }, []);

  const handleSort = (type) => {
    if (type !== "" && type !== undefined) {
      setSortType(type);
    }
    switch (type) {
      case "name-ascending":
        setSearchResult(AZ(searchResult));
        break;
      case "name-descending":
        setSearchResult(ZA(searchResult));
        break;
      case "price-ascending":
        setSearchResult(lowestFirst(searchResult));
        break;
      case "price-descending":
        setSearchResult(highestFirst(searchResult));
        break;
      default:
        break;
    }
  };

  if (applySort) {
    handleSort(sortType);
    setApplySort(false);
  }

  const handleSearch = (event) => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
    setApplySort(true);
  };
  const handleSubmit = (event) => event.preventDefault();
  return (
    <div>
      <Switch>
      <Route path="/books/add">
          <BookCreate />
          </Route>
        <Route path="/books/:id">
          <BookDetail />
        </Route>
        <Route path="/">
          <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
          <Sort onSubmit={handleSubmit} handleSort={handleSort} />
          <Books books={books} />
        </Route>
      </Switch>
    </div>
  );
}
export default MainContainer;
