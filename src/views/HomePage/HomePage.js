import { Component } from "react";
import { Link } from "react-router-dom";
import movieRequests from "../../services/movieRequests";
import s from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const respMovies = await movieRequests.fetchTrending();
    this.setState({ movies: respMovies });
  }

  render() {
    const { location } = this.props;
    return (
      <div className={s.module}>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
                className={s.filmsItem}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
