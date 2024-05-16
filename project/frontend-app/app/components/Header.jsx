import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back, emptyCart = false }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => console.log("Empty Cart!");

  const onPressCart = () => {
    emptyCart ? emptyCartHandler() : navigation.navigate("cart");
  };

  return (
    <View style={{ paddingHorizontal: 35 }}>
      {back && (
        <TouchableOpacity
          style={{ position: "absolute", left: 20, zIndex: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Avatar.Icon
            style={{ backgroundColor: colors.color4 }}
            icon={"arrow-left"}
            color={
              route.name === "ProductDetails" ? colors.color2 : colors.color3
            }
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{ position: "absolute", right: 20, zIndex: 10 }}
        onPress={onPressCart}
      >
        <Avatar.Icon
          style={{ backgroundColor: colors.color4 }}
          icon={emptyCart ? "delete-outline" : "cart-outline"}
          color={
            route.name === "ProductDetails" ? colors.color2 : colors.color3
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
