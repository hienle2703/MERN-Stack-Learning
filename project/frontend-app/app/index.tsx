import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRegistry, Text, View } from "react-native";
import { Home } from "./screens/Home"; // Import the Home component
import Main from './Main'

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Main />
  );
}

AppRegistry.registerComponent('FrontEnd', () => Index)

export default Index;