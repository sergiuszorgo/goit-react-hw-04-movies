import React, { Component } from "react";
// import axios from "axios";
import defaultPhoto from "./defaultImg.jpg";
import movieRequests from "../../services/movieRequests";
import s from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  // async componentDidMount() {
  //   const { movieId } = this.props.match.params;
  //   const response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f5571a4d0dffe86480c58c41c5dbcd23&language=en-US`
  //   );
  //   // console.log(response.data.cast);
  //   this.setState({ cast: response.data.cast });
  // }
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await movieRequests.fetchCast(movieId);
    // console.log(response);
    this.setState({ cast: response });
  }

  render() {
    const { cast } = this.state;
    return (
      <div className={s.module}>
        <ul className={s.table}>
          {cast.map((el) => {
            return (
              <li className={s.item} key={el.id}>
                <img
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                      : `${defaultPhoto}`
                  }
                  alt={el.name}
                  className={s.image}
                />
                <h4>{el.name}</h4>
                <p>{el.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cast;
