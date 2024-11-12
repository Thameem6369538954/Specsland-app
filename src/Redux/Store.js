import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Redux/Slice/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  // Optional: If you want to explicitly enable Redux DevTools
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
