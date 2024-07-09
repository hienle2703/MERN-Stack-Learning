import { AppRegistry, StatusBar } from "react-native";
import Main from "./Main";

const Index = () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <Main />
    </>
  );
};

AppRegistry.registerComponent("FrontEnd", () => Index);

export default Index;
