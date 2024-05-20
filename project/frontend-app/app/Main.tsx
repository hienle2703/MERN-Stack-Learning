import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="top" topOffset={50}/>
    </NavigationContainer>
  );
};

export default Main;
