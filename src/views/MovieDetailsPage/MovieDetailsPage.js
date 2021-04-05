import React, { Component, Suspense, lazy } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import movieRequests from "../../services/movieRequests";
import defaultPhoto from "../../components/Cast/defaultImg.jpg";
import Loader from "react-loader-spinner";
import s from "./MovieDetailsPage.module.css";
import routes from "../../routes";

const Cast = lazy(() =>
  import("../../components/Cast/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

class MovieDetailsPage extends Component {
  state = {
    genres: null, //
    overview: null, //
    poster_path: null, //
    title: null, //
    vote_average: null, //
  };

  async componentDidMount() {
    try {
      const movieId = this.props.match.params.movieId;
      const responceMovie = await movieRequests.fetchMovieId(movieId);
      this.setState({ ...responceMovie });
    } catch (error) {
      console.log(error);
    }
  }

  hendleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push(routes.homePage);
    history.push(location?.state?.from || routes.homePage);
  };

  render() {
    const { title, vote_average, overview, genres, poster_path } = this.state;
    const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const { match, location } = this.props;
    return (
      <>
        <div className={s.container}>
          <div>
            <button
              type="button"
              onClick={this.hendleGoBack}
              className={s.buttonBack}
            >
              Go back
            </button>
            <img
              src={poster_path ? `${imgUrl}` : `${defaultPhoto}`}
              alt={title}
              className={s.poster}
            />
          </div>
          <div className={s.overview}>
            <h2 className={s.moviTitle}>{title}</h2>
            <p>User Score: {`${vote_average * 10}%`}</p>
            <h4>Overview</h4>
            <p>{overview}</p>
            {genres && (
              <>
                <h4>Genres</h4>
                <ul>
                  {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <div className={s.module}>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: { ...this.props.location.state },
                }}
                className={s.addLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: { ...this.props.location.state },
                }}
                className={s.addLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
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
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
