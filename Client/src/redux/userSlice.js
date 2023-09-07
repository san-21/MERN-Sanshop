import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    role: "",
    filteredRoles: [],
    status: "",
    isDetailDialogOpen: false,
    userId: "",
  },
  reducers: {
    setSelectedRole: (state, action) => {
      state.role = action.payload;
    },
    setFilteredRoles: (state, action) => {
      state.filteredRoles = action.payload;
    },
    setSelectedStatus: (state, action) => {
      state.status = action.payload;
    },
    handleDetailDialogClose: (state) => {
      state.isDetailDialogOpen = false;
    },
    handleDetailDialogOpen: (state, action) => {
      state.isDetailDialogOpen = true;
      state.userId = action.payload;
    },
  },
});

export const {
  setSelectedRole,
  setFilteredRoles,
  setSelectedStatus,
  handleDetailDialogClose,
  handleDetailDialogOpen,
} = userSlice.actions;

export default userSlice.reducer;
