import React, { Component } from "react";
import { addTodo } from "../actions/index";

export default class extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="inner">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!this.input.value.trim()) {
              return;
            }
            dispatch(addTodo(this.input.value));
            this.input.value = "";
          }}
        >
          <input
            type="text"
            placeholder="Type something..."
            ref={node => {
              this.input = node;
            }}
          />
          <button style={{ marginTop: "20px" }} type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
