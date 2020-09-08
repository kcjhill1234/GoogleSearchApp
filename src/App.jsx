import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Saved from "./components/Pages/Saved";
import Search from "./components/Pages/Search";
import GoogleMenu from './components/Header/Google.Menu';

function App() {
  return (
    <div>
      <GoogleMenu />
      <div className="page">
        <Switch>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default App;
