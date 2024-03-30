import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "./todos/TodosSlicer";
import counterReducer from "./todos/TodosSlicer";
export const store = configureStore({
  reducer: {
		counter : counterReducer
  },
});
