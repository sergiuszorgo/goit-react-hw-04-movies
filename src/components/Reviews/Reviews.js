import React, { Component } from "react";
import movieRequests from "../../services/movieRequests";
import s from "./Reviews.module.css";

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const response = await movieRequests.fetchReview(movieId);
      this.setState({ reviews: response });
    } catch (error) {
      console.log(error);
    }
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
