import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTodo, TTodosState } from "../../types/types";

const initialState: TTodosState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      console.log(action.payload);
      state.push(action.payload);
    },
    /*
    completeTodo: (state, action: PayloadAction<number>) => {},
    deleteTodo: (state, action: PayloadAction<number>) => {},
    */
  },
});

// action creators are generated for each case reducer function
export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
