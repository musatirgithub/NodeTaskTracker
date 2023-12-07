import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";
import { axiosPublic } from "../utils/axiosPublic";
import { useNavigate } from "react-router-dom";
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    console.log(userInfo)
    dispatch(fetchStart());
    try {
      const {data}  = await axiosPublic.post("api/v1/auth/login", userInfo, {credentials: 'include'});
      console.log(data.user)
      dispatch(loginSuccess(data));
      // toastSuccessNotify("Logged In!");
      // navigate("/tasks");
    } catch (err) {
      dispatch(fetchFail());
      console.log(err)
      // toastErrorNotify(err);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const data = await axiosPublic.delete("api/v1/auth/logout");
      dispatch(logoutSuccess());
      console.log(data)
      // toastSuccessNotify(data.msg);
      // navigate("/");
    } catch (err) {
      dispatch(fetchFail(err));
      // toastErrorNotify("Çıkış yapılamadı!");
    }
  };

  // const register = async (userInfo) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosPublic.post("users/register/", userInfo);
  //     // toastSuccessNotify("Registered!");
  //     navigate("/");
  //   } catch (err) {
  //     dispatch(fetchFail());
  //     // toastErrorNotify(err);
  //   }
  // };

  // const verifyEmail = async (userInfo) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosPublic.post("users/register/", userInfo);
  //     dispatch(registerSuccess(data));
  //     // toastSuccessNotify("Registered!");
  //     navigate("/");
  //   } catch (err) {
  //     dispatch(fetchFail());
  //     // toastErrorNotify(err);
  //   }
  // };


  return {
    login,
    logout,
    // register,
  };
};

export default useAuthCalls;
