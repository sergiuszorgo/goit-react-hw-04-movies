import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Form from "../../components/Form/Form";
import MoviesList from "../../components/MovieList/MovieList";
import queryString from "query-string";
import s from "./MoviesPage.module.css";

class MoviesPage extends Component {
  state = {
    searchMovie: "",
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    const searchParams = queryString.parse(search);
    if (pathname && search) {
      this.setState({ searchMovie: searchParams.query });
    }
  }

  formSubmitHandler = (data) => {
    this.setState({ searchMovie: data.name });
    this.props.history.push({
      ...this.props.location,
      search: `?query=${data.name}`,
    });
  };

  render() {
    const { searchMovie } = this.state;
    return (
      <div className={s.module}>
        <Form onSubmit={this.formSubmitHandler} />
        {searchMovie && <MoviesList searchMovie={searchMovie} />}
      </div>
    );
  }
}

export default withRouter(MoviesPage);
