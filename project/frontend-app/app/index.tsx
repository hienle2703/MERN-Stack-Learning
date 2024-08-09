import { AppRegistry, StatusBar } from "react-native";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { StripeProvider } from "@stripe/stripe-react-native";

const stripeKey = "pk_test_51PipkAEwZMNtgOLHu89rOdzVBDxRlKKlfFPpjzguO40LK9CBgUgPHCyYCn4J39imJXsiQZku3ywPtUXjVOcCsCqb00gIdpD51Q"

const Index = () => {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="6-pack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <StatusBar barStyle={"dark-content"} />
        <Main />
      </Provider>
    </StripeProvider>
  );
};

AppRegistry.registerComponent("FrontEnd", () => Index);

export default Index;
