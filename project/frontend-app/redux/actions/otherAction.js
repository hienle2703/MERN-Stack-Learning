import axios from "axios";
import { server } from "../store";
import Toast from "react-native-toast-message";

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });

      const { data } = await axios.put(
        `${server}/user/changepassword`,
        {
          currentPassword: oldPassword,
          newPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (data.success) {
        dispatch({ type: "updatePasswordSuccess", payload: data.message });
        Toast.show({
          type: "success",
          text1: data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: "updatePasswordFail",
        payload: error.response.data.message,
      });
    }
  };
