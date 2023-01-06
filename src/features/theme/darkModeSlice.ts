import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  isDarkMode: boolean;
};

const initialState: InitialStateType = {
  isDarkMode: JSON.parse(String(localStorage.getItem("darkMode"))) || false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(state.isDarkMode));
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
export const getCurrentTheme = (state: any) => state.darkMode.isDarkMode;
