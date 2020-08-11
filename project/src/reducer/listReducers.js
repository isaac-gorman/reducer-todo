import React from "react";

export const initialState = {
  todos: [
    { item: "Learn about reducers", completed: false, id: 3892987589 },
    { item: "Clean Room", completed: false, id: 377097 },
    { item: "Exercise", completed: false, id: 49097 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
