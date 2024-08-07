import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

import { Home } from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import ForgetPassword from "./screens/ForgetPassword";
import Verify from "./screens/Verify";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/ChangePassword";
import Orders from "./screens/Orders";

// Admin
import AdminPanel from "./screens/AdminPanel";
import Categories from "./screens/Categories";
import AdminOrders from "./screens/AdminOrders";
import UpdateProduct from "./screens/UpdateProduct";
import NewProduct from "./screens/NewProduct";
import ProductImages from "./screens/ProductImages";

import Camera from "./screens/Camera";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/actions/userActions";

const Stack = createNativeStackNavigator();
const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Orders" component={Orders} />

          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Verify" component={Verify} />

          {/* Admin Routes */}
          <Stack.Screen name="AdminPanel" component={AdminPanel} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="AdminOrders" component={AdminOrders} />
          <Stack.Screen name="UpdateProduct" component={UpdateProduct} />
          <Stack.Screen name="NewProduct" component={NewProduct} />
          <Stack.Screen name="ProductImages" component={ProductImages} />

          <Stack.Screen name="Camera" component={Camera} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" topOffset={50} />
    </NavigationContainer>
  );
};

export default Main;
