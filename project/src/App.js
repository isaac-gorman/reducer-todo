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

const initialState = [
  { item: "Learn about reducers", completed: false, id: 3892987589 },
  { item: "Clean Room", completed: false, id: 377097 },
  { item: "Exercise", completed: false, id: 49097 },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "MARK_COMPLETED":
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("I am state", state);
  return (
    <div className="App">
      <header className="App-header">
        <h4>To Do List</h4>
      </header>

      <ListContainer>
        {state.map((item) => {
          // console.log("I am the value of item from the map", item);
          return (
            <div>
              <Task
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
    </div>
  );
}

export default App;
