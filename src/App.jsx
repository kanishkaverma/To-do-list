import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ToDo from "./components/ToDo";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";
import { render } from "@testing-library/react";
import About from "./components/pages/About";
import { v1 as uuid } from "uuid";
import axios from "axios";
class App extends Component {
  state = {
    ToDo: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ ToDo: res.data }));
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.ToDo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  addTodo = (title) => {
    const newToDo = {
      id: uuid(),
      title,
      completed: false,
    };
    this.setState({ ToDo: [...this.state.ToDo, newToDo] });
  };

  //Delete Todo
  delTodo = (id) =>
    this.setState({
      ToDo: [...this.state.ToDo.filter((todo) => todo.id !== id)],
    });

  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <ToDo
                    Todo={this.state.ToDo}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
