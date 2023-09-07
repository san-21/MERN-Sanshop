import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    open: true,
    isXsDrawerOpen: false,
    drawerWidth: 240,
    xsdrawerWidth: 240,
    selectedButton: 0,
    isLinkOpen: false,
  },
  reducers: {
    handleXsDrawer: (state) => {
      state.isXsDrawerOpen = !state.isXsDrawerOpen;
    },
    handleSmallDrawerClose: (state) => {
      (state.drawerWidth = 85), (state.open = false);
    },
    handleSmallDrawerOpen: (state) => {
      (state.drawerWidth = 240), (state.open = true);
    },
    handleButtonClicked: (state, action) => {
      state.selectedButton = action.payload;
      state.isLinkOpen = !state.isLinkOpen;
    },
  },
});

export const {
  handleXsDrawer,
  handleButtonClicked,
  handleSmallDrawerClose,
  handleSmallDrawerOpen,
} = commonSlice.actions;

export default commonSlice.reducer;
