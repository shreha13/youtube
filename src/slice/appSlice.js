import { createSlice } from "@reduxjs/toolkit";
import appReducer from "../reducers/appReducer";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true
  },
  reducers: appReducer
});

export const { toggleMenu, closeMenu } = appSlice.actions
export default appSlice.reducer;