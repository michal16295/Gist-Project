import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import paths from "../constants/paths";

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    loading: false,
    error: "",
    errors: false,
  },
  reducers: {
    userCreateRequest: (state, action) => {
      state.profile = null;
      state.loading = true;
      state.errors = false;
    },
    userCreateSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
      state.errors = false;
    },
    userCreateError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
  },
});
export default slice.reducer;
// Actions
const { userCreateSuccess, userCreateError, userCreateRequest } = slice.actions;

export const createUser = (data) => async (dispatch) => {
  try {
    dispatch(userCreateRequest());
    const res = await http.post(`${paths.CREATE_USER}`, data);
    const arr = [res.data];
    dispatch(userCreateSuccess([res.data]));
  } catch (e) {
    dispatch(userCreateError(e.response.data.error));
  }
};
