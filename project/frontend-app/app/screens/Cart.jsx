import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

import { colors, defaultStyle } from "../styles/styles";
import { CartItem, Header, Heading } from "../components";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Macbook",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-macbook-air-space-gray-m1-202010?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1634145627000",
    product: "aposdjposadj",
    stock: 3,
    price: 49999,
    quantity: 2,
  },
  {
    name: "Shoes",
    image:
      "https://product.hstatic.net/1000383440/product/dscf0190_44fc2481970d4900bd0ccff6c5e49ac1_master.jpg",
    product: "sajdis",
    stock: 5,
    price: 1090,
    quantity: 2,
  },
];
const Cart = () => {
  const navigation = useNavigation();

  const increaseHandler = () => {};

  const decreaseHandler = () => {};

  const onCheckout = () => {
    console.log(cartItems.length > 0)
    cartItems.length > 0 ? navigation.navigate("ConfirmOrder") : null;
  };

  return (
    <View style={{ ...defaultStyle }}>
      <Header back emptyCart />

      <Heading
        text1={"Shopping"}
        text2={"Cart"}
        containerStyle={{ marginLeft: 35 }}
      />

      <View style={{ flex: 1 }}>
        <ScrollView>
          {cartItems.map((i, index) => {
            return (
              <CartItem
                key={i.product}
                id={i.product}
                name={i.name}
                stock={i.stock}
                amount={i.price}
                imgSrc={i.image}
                index={index}
                qty={i.quantity}
                increaseHandler={increaseHandler}
                decreaseHandler={decreaseHandler}
              />
            );
          })}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>

      <TouchableOpacity onPress={onCheckout}>
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
