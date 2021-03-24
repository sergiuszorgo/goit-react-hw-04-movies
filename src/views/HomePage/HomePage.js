import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import s from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=f5571a4d0dffe86480c58c41c5dbcd23"
    );
    // console.log(response.data.results);

    this.setState({
      movies: response.data.results,
    });
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
