import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";

import { colors, defaultStyle } from "../styles/styles";
import { Header, Heading, ConfirmOrderItem } from "../components";
import { cartItems } from "./Cart";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ConfirmOrder = () => {
  const navigation = useNavigation();

  const itemsPrice = 4000;
  const shippingCharges = 200;
  const tax = 0.18 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;

  return (
    <View style={{ ...defaultStyle }}>
      <Header back />

      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 35,
          flex: 1,
        }}
      >
        <Heading text1="Confirm" text2="Order" />
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          {cartItems.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>

      {/* Footer */}
      <View style={{ paddingHorizontal: 35 }}>
        <PriceTag heading={"Subtotal"} value={itemsPrice} />
        <PriceTag heading={"Shipping"} value={shippingCharges} />
        <PriceTag heading={"Tax"} value={tax} />
        <PriceTag heading={"Total"} value={totalAmount} />

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Payment", {
              itemsPrice,
              shippingCharges,
              tax,
              totalAmount,
            })
          }
        >
          <Button
            style={{
              backgroundColor: colors.color3,
              borderRadius: 100,
              padding: 5,
              margin: 10,
            }}
            textColor={colors.color2}
            icon={"chevron-right"}
          >
            Payment
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default ConfirmOrder;
