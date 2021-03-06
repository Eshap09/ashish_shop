import React from "react";
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Angle from './Angle';
import Pipes from './Pipes';
import Tmt from './Tmt';
import './App.css'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div className="app">
       <div className="app__navbar">
            <Link className="app__link" to="/">Angle</Link>
            <Link className="app__link" to="/pipes">Pipes</Link>
            <Link className="app__link" to="/tmt">TMT</Link>    
        </div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Angle/>
          </Route>
          <Route path="/pipes">
            <Pipes />
          </Route>
          <Route path="/tmt">
            <Tmt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
