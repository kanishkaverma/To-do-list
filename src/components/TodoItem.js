import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false,
    };
  }

  getStyle() {
    return {
      background: "grey",
      padding: "10px",
      borderBottom: "1px #ccc dotted",

      textDecoration: this.state.completed ? "line-through" : "none",
    };
  }
  markComplete = (id) => {
    this.setState({ completed: !this.state.completed });
  };

  render() {
    const { id, title } = this.props.x;
    return (
      <div style={this.getStyle()}>
        <h1>
          <input type="checkbox" onChange={this.markComplete} /> {title}
          <button style={btnstyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </h1>
      </div>
    );
  }
}

TodoItem.propTypes = {
  x: PropTypes.object.isRequired,
};
const btnstyle = {
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 8x",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
