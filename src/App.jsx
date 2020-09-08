import React from 'react';
import { Switch, Route } from "react-router-dom";
import Saved from "./components/Pages/Saved";
import Search from "./components/Pages/Search";
import GoogleMenu from './components/Page-Layout/Google-Menu';

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
        </Switch>
      </div>
    </div>
  )
}
export default App;
