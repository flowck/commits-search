import "./assets/css/main.css";
import React from "react";
import Home from "./views/Home";
import Commits from "./views/Commits";
import CommitsSingle from "./views/CommitsSingle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/commits" component={Commits} />
        <Route exact path="/commits/:id" component={CommitsSingle} />
      </Switch>
    </Router>
  );
};

export default App;
