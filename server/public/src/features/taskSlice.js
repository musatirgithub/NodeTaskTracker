import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",

  initialState: {
    loading: true,
    error: false,
    tasks: null,
    task: null,
    isSidebarOpen: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    // getSuccess: (state, { payload: { data, url } }) => {
    //   state.loading = false;
    //   state[url] = data;
    // },

    getTasksSuccess: (state, { payload }) => {
      state.loading = false;
      state.tasks = payload[0];
    },
    getSingleTaskSuccess: (state, { payload }) => {
      state.loading = false;
      state.task = payload[0];
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const {
  fetchStart,
  getTasksSuccess,
  getSingleTaskSuccess,
  fetchFail,
  openSidebar,
  closeSidebar,
} = taskSlice.actions;
export default taskSlice.reducer;
