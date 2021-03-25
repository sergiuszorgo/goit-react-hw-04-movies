import React, { Component } from "react";
import s from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
  };

  hendleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className={s.formInput}>
        <form onSubmit={this.hendleSubmit}>
          <input
            type="text"
            placeholder="Search movies"
            name="name"
            value={this.state.name}
            id={this.nameInputId}
            onChange={this.hendleChange}
            className={s.inputLine}
          />
          <button type="submit" className={s.inputBtn}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
