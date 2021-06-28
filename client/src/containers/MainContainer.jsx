import { Switch, Route } from "react-router-dom";
import Books from "../screens/Books/Books";
import BookDetail from "../screens/BookDetail/BookDetail";
import BookCreate from "../screens/BookCreate";
import BookEdit from "../screens/BookEdit/BookEdit";

function MainContainer(props) {

  
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
          <BookDetail currentUser={props.currentUser}/>
        </Route>
        <Route path="/">
         <Books/>
        </Route>
      </Switch>
    </div>
  );
}
export default MainContainer;
