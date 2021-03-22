import React, { Component } from "react";
import { Route, NavLink, Link, Redirect, Switch } from "react-router-dom";
import axios from "axios";
import s from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  fetch = (query) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=f5571a4d0dffe86480c58c41c5dbcd23&language=en-US&page=1&include_adult=false`
      )
      .then((response) =>
        this.setState({
          movies: response.data.results,
        })
      );
  };

  hendleChange = (e) => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };
  hendleSubmit = (e) => {
    e.preventDefault();
    // const { location, history } = this.props;
    this.fetch(this.state.query);
  };
  render() {
    const { movies } = this.state;
    return (
      <div className={s.module}>
        <div className={s.moduleInput}>
          <form onSubmit={this.hendleSubmit}>
            <input
              type="text"
              placeholder="Search movies"
              onChange={this.hendleChange}
              value={this.state.query}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default MoviesPage;
