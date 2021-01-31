import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";
import formData from "./formData";
const reducer = combineReducers({
  // here we will be adding reducers
  user,
  formData,
});
const store = configureStore({
  reducer,
});
export default store;
