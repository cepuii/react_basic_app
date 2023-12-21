import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
const fullName = localStorage.getItem("fullName");
const email = localStorage.getItem("email");

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    fullName: fullName,
    email: email,
    token: token,
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUserData: (state, action) => {
      state.fullName = action.payload.fullName;
      localStorage.setItem("fullName", action.payload.fullName);
      state.email = action.payload.email;
      localStorage.setItem("email", action.payload.email);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { setLoading, setUserData, setToken } = AuthSlice.actions;

export const handleLogout = (dispatch) => {
  dispatch(setToken(null));
  localStorage.removeItem("token");
};

export const handleAuthentification = (data) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const request = await axios.post(
      "https://dolphin-app-pc6ii.ondigitalocean.app/user/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(
      setUserData({
        fullName: request.data.fullName,
        email: request.data.email,
      })
    );
    dispatch(setToken(request.data.accessToken));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const handleRegistration = (data) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const request = await axios.post(
      "https://dolphin-app-pc6ii.ondigitalocean.app/user",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (request.data.verified) {
      const verifyRequest = await axios.post(
        "https://dolphin-app-pc6ii.ondigitalocean.app/user/verify-email",
        {
          verification: request.data.verified,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(verifyRequest);
      dispatch(
        setUserData({
          fullName: verifyRequest.data.fullName,
          email: verifyRequest.data.email,
        })
      );
      dispatch(setToken(verifyRequest.data.accessToken));
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default AuthSlice.reducer;