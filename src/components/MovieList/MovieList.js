import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import routes from "../../routes";
import movieRequests from "../../services/movieRequests";
import s from "./MovieList.module.css";

class MoviesList extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const responce = await movieRequests.fetchMovie(this.props.searchMovie);
    this.setState({ movies: responce.results });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchMovie !== this.props.searchMovie) {
      this.componentDidMount();
    }
  }
  render() {
    const { movies } = this.state;
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className="list">
            <Link
              to={{
                pathname: `${routes.moviesPage}/${movie.id}`,
                state: {
                  from: this.props.location,
                },
              }}
              className={s.filmLink}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(MoviesList);

MoviesList.defaultProps = {
  searchMovie: "",
};

MoviesList.propTypes = {
  searchMovie: PropTypes.string,
};
