import { useState, useEffect } from "react";
import { getAllBooks } from "../services/books";
import { Switch, Route } from "react-router-dom";
import Books from "../screens/Books";

function MainContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    };
    fetchBooks();

  }, []);

  return (
    <div>
      <Switch>
        <Route path="/books">
          <Books books={books}/>
        </Route>
      </Switch>
    </div>
  );
}
export default MainContainer;
