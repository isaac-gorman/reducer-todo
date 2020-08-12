import React from "react";
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

const TodoList = ({ taskList }) => {
  return (
    <ListContainer>
      {taskList.map((item) => {
        return (
          <div>
            <Task
              key={item.id}
              onClick={() => dispatch({ type: "MARK_COMPLETED" })}
            >
              {item.item}
            </Task>
            <Divider />
          </div>
        );
      })}
    </ListContainer>
  );
};

export default TodoList;
