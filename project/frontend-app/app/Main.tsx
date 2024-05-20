import React from "react";
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

const Stack = createNativeStackNavigator();
const Main = () => {
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

          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="Verify" component={Verify} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" topOffset={50} />
    </NavigationContainer>
  );
};

export default Main;
