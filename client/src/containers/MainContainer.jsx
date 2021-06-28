import { Switch, Route } from "react-router-dom";
import Books from "../screens/Books/Books";
import BookDetail from "../screens/BookDetail/BookDetail";
import BookCreate from "../screens/BookCreate/BookCreate";
import BookEdit from "../screens/BookEdit/BookEdit";
import { getAllRatings } from "../services/ratings";
import {useState, useEffect } from "react"

function MainContainer(props) {
  const [ratings, setRatings] = useState(null);
  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsData = await getAllRatings();
      setRatings(ratingsData);
    };
    fetchRatings();
  }, []);
  
  return (
    <div>
      <Switch>
      <Route path="/books/:id/edit">
          <BookEdit currentUser={props.currentUser}/>
        </Route>
      <Route path="/books/add">
          <BookCreate />
          </Route>
        <Route path="/books/:id">
          <BookDetail ratings={ratings} currentUser={props.currentUser}/>
        </Route>
        <Route path="/">
         <Books/>
        </Route>
      </Switch>
    </div>
  );
}
export default MainContainer;
