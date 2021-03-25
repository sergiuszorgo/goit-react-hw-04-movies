import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import Navigations from "./components/Navigations/Navigations";
import routes from "./routes";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage" /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage.js" /* webpackChunkName: "MoviesPage" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

const App = () => (
  <>
    <Navigations />
    <Suspense
      fallback={
        <Loader
          className="loader"
          type="Bars"
          color="#00BFFF"
          height={100}
          width={100}
        />
      }
    >
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route exact path={routes.moviesPage} component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
