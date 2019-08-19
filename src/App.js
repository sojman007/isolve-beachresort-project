import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import RoomPage from "./pages/RoomPage.js";
import Rooms from "./pages/Rooms.js";
import Error from "./pages/Error.js";
import NavBar from "./components/Navbar.js";
function App() {
  return (
    <Fragment>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug" component={RoomPage} />
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
