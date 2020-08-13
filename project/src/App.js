import React, { useState, useReducer } from "react";
// import { initialState, reducer } from "./reducer/listReducers";
// import TodoList from "./components/TodoList";
import "./App.css";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 30vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: pink;
`;

const Task = styled.h3`
  font-size: 1em;
  text-align: left;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  border: 1px solid black;
`;

const initialState = {
  todos: [
    { item: "Learn about reducers", completed: false, id: 3892987589 },
    { item: "Clean Room", completed: false, id: 377097 },
    { item: "Exercise", completed: false, id: 49097 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_COMPLETED":
      return {
        ...state,
        todos: state.todos.map((item) => {
          return item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    // - spread the state
    // - add new task to state with a payload
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
      };

    default:
      return state;
  }
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("I am state", state);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>To Do List</h4>
      </header>

      <ListContainer>
        {state.todos.map((item) => {
          // console.log("I am the value of item from the map", item);
          return (
            <div>
              <Task
                className={!item.completed ? "notCompleted" : "Completed"}
                key={item.id}
                onClick={() =>
                  dispatch({ type: "MARK_COMPLETED", payload: item.id })
                }
              >
                {item.item}
              </Task>
              <Divider />
            </div>
          );
        })}
      </ListContainer>

      <form onSubmit={handleSubmit}>
        <label htmlFor="addNewtodo">
          Add New Task:
          <br />
          <input
            type="text"
            name="newTodo"
            value={newTodo}
            placeholder="Clean Desk"
            onChange={handleChange}
          />
        </label>
        <button>Add Task</button>
      </form>
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear Task</button>
    </div>
  );
}

export default App;
