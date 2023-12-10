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
    getAllTasks: (state, { payload }) => {
      state.loading = false;
      state.tasks = payload[0];
    //   state.mediator = payload[1];
    },
    getTasks: (state, { payload }) => {
      state.loading = false;
      state.tasks = payload[0];
    //   state.mediator = payload[1];
    },
    updateTaskSuccess: (state, { payload }) => {
      state.loading = false;
      state.task = payload;
    },
    deleteTaskSuccess: (state, { payload }) => {
      state.loading = false;
      state.task = payload;
    },

    // getProfileSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.profile = payload;
    // },
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
  getRecordAndMediatorSuccess,
  getProfileSuccess,
  fetchFail,
  updateProfileSuccess,
  openSidebar,
  closeSidebar,
} = taskSlice.actions;
export default taskSlice.reducer;
