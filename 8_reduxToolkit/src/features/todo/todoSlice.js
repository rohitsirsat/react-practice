import { createSlice, nanoid } from "@reduxjs/toolkit";

// declared initial state of of todo (blue print)
const initialState = {
  todos: [],
};

// functionalaty goes here todoSlice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// export to use any where in components
export const { addTodo, removeTodo } = todoSlice.actions;

// export for the sake of store
export default todoSlice.reducer;
