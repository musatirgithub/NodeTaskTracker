import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registrationSuccess,
  validationSuccess,
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
      const {data}  = await axiosPublic.post("api/v1/auth/login", userInfo, {withCredentials: 'include'});
      console.log(data.user)
      dispatch(loginSuccess(data));
      // toastSuccessNotify("Logged In!");
      // navigate("/tasks");
    } catch (err) {
      dispatch(fetchFail());
      console.log(err)
      // toastErrorNotify(err.response.data.msg);
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const {data}= await axiosPublic.delete("api/v1/auth/logout", {withCredentials: 'include'});
      dispatch(logoutSuccess());
      // toastSuccessNotify(data.msg);
      navigate("/login");
    } catch (err) {
      dispatch(fetchFail(err));
      // toastErrorNotify(err.response.data.msg);
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("api/v1/auth/register", userInfo, {withCredentials:'include'});
      // dispatch(registrationSuccess(data))
      // toastSuccessNotify(data.msg);
      navigate("/verify-email-warning");
    } catch (err) {
      dispatch(fetchFail());
      console.log(err.response.data.msg)
      // toastErrorNotify(err.response.data.msg);
    }
  };

  const verifyEmail = async (userInfo) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("api/v1/auth/verify-email", userInfo);
      dispatch(validationSuccess());
      // toastSuccessNotify("User Verified!");
      navigate("/login");
    } catch (err) {
      dispatch(fetchFail());
      // toastErrorNotify(err.response.data.msg);
    }
  };


  return {
    login,
    logout,
    register,
    verifyEmail,
  };
};

export default useAuthCalls;
