import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducer/listReducers";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("I am the value of state", state);

  return (
    <div className="App">
      <header className="App-header">
        <h4>To Do List</h4>
      </header>
      <TodoList taskList={state.todos} />
    </div>
  );
}

export default App;
