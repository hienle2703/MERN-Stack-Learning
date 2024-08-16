import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "react-native-paper";
import { colors } from "../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Header = ({ back, emptyCart = false, isPadding = false }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const emptyCartHandler = () => console.log("Empty Cart!");

  const onPressCart = () => {
    emptyCart ? emptyCartHandler() : navigation.navigate("Cart");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: back ? "space-between" : "flex-end",
      }}
    >
      {back && (
        <TouchableOpacity hitSlop={10} onPress={() => navigation.goBack()}>
          <Icon
            style={{ backgroundColor: colors.color4 }}
            size={30}
            source={"arrow-left"}
            color={
              route.name === "ProductDetails" ? colors.color2 : colors.color3
            }
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onPressCart} hitSlop={10}>
        <Icon
          style={{ backgroundColor: colors.color4 }}
          size={30}
          source={emptyCart ? "delete-outline" : "cart-outline"}
          color={
            route.name === "ProductDetails" ? colors.color2 : colors.color3
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
