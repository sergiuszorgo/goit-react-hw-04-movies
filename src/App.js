import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
import Navigations from "./components/Navigations";

const App = () => (
  <>
    <Navigations />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
    </Switch>
  </>
);

export default App;
