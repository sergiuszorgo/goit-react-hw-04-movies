import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import axios from "axios";
import s from "./MovieDetailsPage.module.css";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import routes from "../../routes";

class MovieDetailsPage extends Component {
  state = {
    adult: null,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: null,
    genres: null,
    homepage: null,
    id: null,
    imdb_id: null,
    original_language: null,
    original_title: null,
    overview: null,
    popularity: null,
    poster_path: null,
    production_companies: null,
    production_countries: null,
    release_date: null,
    revenue: null,
    runtime: null,
    spoken_languages: null,
    status: null,
    tagline: null,
    title: null,
    video: null,
    vote_average: null,
    vote_count: null,
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=f5571a4d0dffe86480c58c41c5dbcd23&language=en-US`
    );

    this.setState({
      ...response.data,
    });
  }
  hendleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // } else history.push(routes.moviesPage);
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { title, vote_average, overview, genres, poster_path } = this.state;
    const { match } = this.props;
    return (
      <>
        <div className={s.container}>
          <div>
            <button type="button" onClick={this.hendleGoBack}>
              Go back
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt=""
              className={s.poster}
            />
          </div>
          <div className={s.overview}>
            <h2>{title}</h2>
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
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
