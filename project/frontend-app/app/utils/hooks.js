import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import {
  deleteUser,
  getUsers,
  loadUser,
} from "../../redux/actions/userActions";
import axios from "axios";
import { server } from "../../redux/store";
import { getAdminProducts } from "../../redux/actions/productAction";
import { Alert } from "react-native";

export const useMessageAndErrorUser = (
  navigation,
  dispatch,
  navigateTo = "Login"
) => {
  const user = useSelector((state) => state.user);
  const { loading, error, isAuthenticated, message } = user;

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      navigation.reset({
        index: 0,
        routes: [{ name: navigateTo }],
      });
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });
    }

    if (isAuthenticated) dispatch(loadUser());
  }, [error, message, dispatch, isAuthenticated]);

  return loading;
};

export const useMessageAndErrorOther = (
  dispatch,
  navigation,
  navigateTo,
  func
) => {
  const { loading, message, error } = useSelector((state) => state.other);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      Toast.show({
        type: "success",
        text1: message,
      });
      dispatch({
        type: "clearMessage",
      });

      navigateTo && navigation.navigate(navigateTo);

      func && dispatch(func());
    }
  }, [error, message, dispatch]);

  return loading;
};

export const useSetCategories = (setCategories, isFocused) => {
  useEffect(() => {
    axios
      .get(`${server}/product/categories`)
      .then((res) => {
        setCategories(res.data.categories);
      })
      .catch((e) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
      });
  }, [isFocused]);
};

export const useGetOrders = (isFocused, isAdmin = false) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${server}/order/${isAdmin ? "admin" : "my"}`, {
        withCredentials: true,
      })
      .then((res) => {
        setOrders(res.data.orders);
        setLoading(false);
      })
      .catch((e) => {
        Toast.show({
          type: "error",
          text1: e.response.data.message,
        });
        setLoading(false);
      });
  }, [isFocused]);

  return {
    orders,
    loading,
  };
};

export const useAdminProducts = (dispatch, isFocused) => {
  const { products, inStock, outOfStock, error, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    dispatch(getAdminProducts());
  }, [dispatch, isFocused, error]);

  return {
    products,
    inStock,
    outOfStock,
    loading,
  };
};

export const useAdminUsers = (dispatch, isFocused) => {
  const { loading, error, users } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: "error",
        text1: error,
      });
      dispatch({
        type: "clearError",
      });
    }

    dispatch(getUsers());
  }, [dispatch, isFocused, error]);

  const handleDeleteUser = (id) => () => {
    Alert.alert(
      "Confirm delete user",
      "Do you want to delete this user? This action cannot be reverted.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            dispatch(deleteUser(id));
          },
        },
      ]
    );
  };

  return {
    users,
    loading,
    error,

    handleDeleteUser,
  };
};
