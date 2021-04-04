import React, { Component } from "react";
import defaultPhoto from "./defaultImg.jpg";
import movieRequests from "../../services/movieRequests";
import s from "./Cast.module.css";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const response = await movieRequests.fetchCast(movieId);
      this.setState({ cast: response });
    } catch (error) {
      console.log(error);
    }
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
