import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  user: [],
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.user = [];
    },
  },
});

// reducers
export default slice.reducer;

// login
export const LoginUser = (formValues) => {
  return async (dispatch, getState) => {
    await axiosInstance
      .post(
        "/api/auth/login",
        // { ...formValues },
        formValues,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(
          slice.actions.login({
            isLoggedIn: true,
            token: response.data.token,
            user: response.data.user,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const LogoutUser = () => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut);
  };
};
