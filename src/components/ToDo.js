import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

import { render } from "@testing-library/react";
class ToDo extends Component {
  markComplete = () => {
    console.log("hello");
  };

  render() {
    return this.props.Todo.map((x) => (
      <TodoItem
        key={x.id}
        x={x}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}
ToDo.propTypes = {
  Todo: PropTypes.array.isRequired,
};

export default ToDo;
