import React, { Component } from "react";
import AddTodo from "../containers/AddTodo.js";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
export default class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}} className="container">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
