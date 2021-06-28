import { Switch, Route, useHistory } from "react-router-dom";
import Books from "../screens/Books/Books";
import BookDetail from "../screens/BookDetail/BookDetail";
import BookCreate from "../screens/BookCreate/BookCreate";
import BookEdit from "../screens/BookEdit/BookEdit";
import { getAllBooks, deleteBook, postBook } from "../services/books"
import { useState, useEffect } from "react"

function MainContainer(props) {
  const [books, setBooks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getAllBooks();
      setBooks(booksData);
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id)
    setBooks((prevState) => {
      return prevState.filter((book) => {
        return book.id !== Number(id)
      })
    })
    history.push('/')
  }

  const handleCreate = async (formData) => {
    const created = await postBook(formData);
    setBooks((prevState) => {
      return [...prevState, created]
    })
    history.push('/')
  };

  return (
    <div>
      <Switch>
      <Route path="/books/:id/edit">
          <BookEdit currentUser={props.currentUser}/>
        </Route>
      <Route path="/books/add">
          <BookCreate handleCreate={handleCreate }/>
          </Route>
        <Route path="/books/:id">
          <BookDetail handleDelete={handleDelete } currentUser={props.currentUser}/>
        </Route>
        <Route path="/">
          <Books books={books}/>
        </Route>
      </Switch>
    </div>
  );
}
export default MainContainer;
