import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const server = "https://mern-stack-server-w380.onrender.com/api/v1";
