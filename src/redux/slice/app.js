import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideBar: {
    open: false,
    type: "CONTACT", // may be CONTACT, STARRED, SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    toggleSideBar(state) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSideBarType(state, action) {
      state.sideBar.type = action.payload.type;
    },
  },
});

// reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export const ToggleSidebar = () => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSideBar());
  };
};
export const UpdateSidebarType = (type) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateSideBarType({ type }));
  };
};
