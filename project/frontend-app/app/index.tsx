import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRegistry } from "react-native";
import Main from "./Main";

const Index = () => {
  return <Main />;
};

AppRegistry.registerComponent("FrontEnd", () => Index);

export default Index;
