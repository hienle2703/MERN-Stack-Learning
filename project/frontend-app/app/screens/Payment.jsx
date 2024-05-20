import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Header, Heading, Loader } from "../components";
import { colors, defaultStyle } from "../styles/styles";
import { Button, RadioButton } from "react-native-paper";

const Payment = ({ navigation, route }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loaderLoading, setLoaderLoading] = useState(false);

  const isAuthenticated = false;

  const redirectToLogin = () => {
    navigation.navigate("Login");
  };
  const codHandler = () => {};
  const onlineHandler = () => {};

  if (loaderLoading) return <Loader />;

  return (
    <View style={{ ...defaultStyle }}>
      <Header back={true} />

      <View style={{ paddingHorizontal: 35, flex: 1 }}>
        <Heading
          containerStyle={{
            paddingTop: 10,
          }}
          text1="Payment"
          text2="Method"
        />

        <View style={styles.container}>
          <RadioButton.Group
            onValueChange={setPaymentMethod}
            value={paymentMethod}
          >
            <View style={styles.radioStyle}>
              <Text style={styles.radioStyleText}>Cash On Delivery</Text>
              <RadioButton color={colors.color1} value={"COD"} />
            </View>
            <View style={styles.radioStyle}>
              <Text style={styles.radioStyleText}>ONLINE</Text>
              <RadioButton color={colors.color1} value={"ONLINE"} />
            </View>
          </RadioButton.Group>
        </View>

        <TouchableOpacity
          //   disabled={loading}
          onPress={
            !isAuthenticated
              ? redirectToLogin
              : paymentMethod === "COD"
                ? () => codHandler()
                : onlineHandler
          }
        >
          <Button
            // loading={loading}
            // disabled={loading}
            style={styles.btn}
            textColor={colors.color2}
            icon={
              paymentMethod === "COD"
                ? "check-circle"
                : "circle-multiple-outline"
            }
          >
            {paymentMethod === "COD" ? "Place Order" : "Pay"}
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },

  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});

export default Payment;
