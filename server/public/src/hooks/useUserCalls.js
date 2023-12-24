import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchStart,
  updatePasswordSuccess,
  fetchFail,
} from "../features/userSlice";
import {axiosPublic} from "../utils/axiosPublic";
// import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useTaskCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const updatePassword = async (userInfo) => {
    dispatch(fetchStart());
    try {
      await axiosPublic.patch("/api/v1/user/update-user-password", userInfo, {withCredentials:'include'});
      dispatch(updatePasswordSuccess());
      navigate('/');
    } catch (err) {
      dispatch(fetchFail());
    }
  };
 
  return {
    updatePassword,
  };
};

export default useTaskCalls;
