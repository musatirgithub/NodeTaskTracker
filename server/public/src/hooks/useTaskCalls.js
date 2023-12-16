// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  getTasksSuccess,
  getSingleTaskSuccess,
  fetchFail,
} from "../features/taskSlice";
import {axiosPublic} from "../utils/axiosPublic";
// import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useTaskCalls = () => {
  const dispatch = useDispatch();

  // const getRecordAndMediator = async () => {
  //   dispatch(fetchStart());
  //   try {
  //     const [record, mediator] = await Promise.all([
  //       axiosWithToken.get("api/record/"),
  //       axiosWithToken.get("api/mediator/"),
  //     ]);

  //     dispatch(getRecordAndMediatorSuccess([record?.data, mediator?.data]));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  const getAllTasks = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get("/api/v1/task/all-tasks", {withCredentials:'include'});
      dispatch(getTasksSuccess(data.tasks));
    } catch (err) {
      dispatch(fetchFail());
    }
  };
  const getTasks = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.get("/api/v1/task/", {withCredentials:'include'});
      dispatch(getTasksSuccess(data.tasks));
    } catch (err) {
      dispatch(fetchFail());
    }
  };
  const createTask = async (taskInfo) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post(`/api/v1/task/`, taskInfo, {withCredentials:'include'});
      await getTasks();
    } catch (err) {
      dispatch(fetchFail());
      console.log(err.response.data.msg)
      // toastErrorNotify(err.response.data.msg);
    }
  };
  const deleteTask = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.delete(`/api/v1/task/${id}`, {withCredentials:'include'});
      await getTasks();
    } catch (err) {
      dispatch(fetchFail());
      console.log(err.response.data.msg)
      // toastErrorNotify(err.response.data.msg);
    }
  };
  const getTask = async (id) => {
    dispatch(fetchStart());
    try {
      const {data} = await axiosPublic.get(`/api/v1/task/${id}`, {withCredentials:'include'});
      dispatch(getSingleTaskSuccess(data.task));
    } catch (err) {
      dispatch(fetchFail());
      console.log(err.response.data.msg)
      // toastErrorNotify(err.response.data.msg);
    }
  };
  const updateTask = async (taskInfo, id) => {
    dispatch(fetchStart());
    try {
      const {data} = await axiosPublic.patch(`/api/v1/task/${id}`, taskInfo, {withCredentials:'include'});
      getSingleTaskSuccess(data.task);
      await getTasks();
    } catch (err) {
      dispatch(fetchFail());
      console.log(err.response.data.msg)
      // toastErrorNotify(err.response.data.msg);
    }
  };


  return {
    getAllTasks,
    getTasks,
    createTask,
    deleteTask,
    getTask,
    updateTask,
  };
};

export default useTaskCalls;
