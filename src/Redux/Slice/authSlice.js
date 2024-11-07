import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 const intialState = {
  user: null,
  token: null,
//   isFetching: false, 
  error: false, 
};

const authSlice = createSlice({
  name: "auth",
  intialState: intialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});