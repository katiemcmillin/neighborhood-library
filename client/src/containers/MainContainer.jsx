import { Switch, Route } from "react-router-dom";
import Books from "../screens/Books";
import BookDetail from "../screens/BookDetail";
import BookCreate from "../screens/BookCreate";

function MainContainer(props) {

  
  return (
    <div>
      <Switch>
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
