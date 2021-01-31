import { createSlice } from "@reduxjs/toolkit";
import http from "../api/httpService";
import paths from "../constants/paths";

// Slice
const slice = createSlice({
  name: "form",
  initialState: {
    data: null,
    loading: true,
    error: "",
    errors: false,
  },
  reducers: {
    getFormDataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.errors = false;
      state.error = "";
    },
    getFormDataError: (state, action) => {
      state.data = null;
      state.error = action.payload;
      state.loading = false;
      state.errors = true;
    },
  },
});
export default slice.reducer;
// Actions
const { getFormDataSuccess, getFormDataError } = slice.actions;
export const getFormData = (data) => async (dispatch) => {
  try {
    const res = await http.get(`${paths.GET_FORM_DATA}`, data);
    dispatch(getFormDataSuccess(res.data[0]));
  } catch (e) {
    dispatch(getFormDataError(e.response.data.error));
  }
};
