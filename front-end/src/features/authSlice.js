import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    role: null,
    loading: true,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.user?.name;
      state.role = payload?.user?.role;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
      state.role = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.name;
      state.role = payload?.role;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
