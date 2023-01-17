import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./reducer/index";

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

export default store;