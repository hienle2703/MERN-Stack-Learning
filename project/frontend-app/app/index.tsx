import { AppRegistry, StatusBar } from "react-native";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Index = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={"dark-content"} />
      <Main />
    </Provider>
  );
};

AppRegistry.registerComponent("FrontEnd", () => Index);

export default Index;
