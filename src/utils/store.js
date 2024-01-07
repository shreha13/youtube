import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slice/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice
  }
})

export default store;