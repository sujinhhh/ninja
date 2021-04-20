import React, { Component } from "react";
import "./todos.css";

class AddForm extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodos(this.state);
    this.setState({
      content: "",
    });
  };
  render() {
    return (
      <div className="form-input">
        <form onSubmit={this.handleSubmit}>
          <label>blackboard</label>
          <input
            className="input"
            placeholder="Say anything here🙂"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddForm;
