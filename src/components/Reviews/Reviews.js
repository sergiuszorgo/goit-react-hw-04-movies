import React, { Component } from "react";
// import axios from "axios";
import movieRequests from "../../services/movieRequests";
import s from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;
    // const response = await axios.get(
    //   `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f5571a4d0dffe86480c58c41c5dbcd23&language=en-US`
    // );
    const response = await movieRequests.fetchReview(movieId);
    // console.log(response);
    this.setState({ reviews: response });
  }
  render() {
    const { reviews } = this.state;

    return reviews.length > 0 ? (
      <ul className={s.reviews}>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h4>{`Author: ${author}`}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    ) : (
      <p className={s.reviews}>We don't have any rewiews for this movie</p>
    );
  }
}

export default Reviews;
