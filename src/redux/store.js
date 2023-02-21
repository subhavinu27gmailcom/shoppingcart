import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./counterslice";

const store = configureStore({
  reducer: {
    counter: counterslice,
  },
});
export default store;
