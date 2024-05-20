import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import React, { useRef, useState } from "react";
import { Header } from "../components";
import { useRoute } from "@react-navigation/native";
import { Carousel } from "react-native-snap-carousel";
import { colors, defaultStyle } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const images = [
  {
    id: "1231239",
    url: "https://ipowerresale.com/cdn/shop/products/media_59797707-00a6-453d-9945-e91a14c04c39.png?v=1702539235",
  },
  {
    id: "128939124",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9SPuemaI_vXC7A6DyTWDdu0UrSPKhp9RS885gctNxdsfjLawjZmTKM1v4UlWdOiNs_c&usqp=CAU",
  },
];

const name = "Macbook pro";
const price = 34909;
const description =
  "MacBook is a brand of Mac notebook computers designed and marketed by Apple that use Apple's macOS operating system since 2006. The MacBook brand replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). Two different lines simply named `Macbook` existed from 2006 to 2012 and 2015 to 2019. The MacBook brand was the world's top-selling line of premium laptops as of 2015.[1]";
const stock = 200;

const ProductDetails = () => {
  const route = useRoute();
  // const { name } = route?.params || {}

  const isCarousel = useRef();
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    if (quantity <= 1) return null;
    setQuantity((prev) => prev - 1);
  };

  const increaseQty = () => {
    if (quantity > stock) return null;
    setQuantity((prev) => prev + 1);
  };

  const addToCartHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out of stock!",
        text2: "This is text 2",
      });
      return Toast.show({
        type: "success",
        text1: "Added to Cart!",
      });
  };

  const CarouselCardItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: item.url }}
          style={styles.image}
        />
      </View>
    );
  };

  return (
    <>
      <View
        style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
      >
        <Header back />

        <Carousel
          // containerCustomStyle={{ pointerEvents: "none" }}
          layout={"default"}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          ref={isCarousel}
          data={images}
          renderItem={CarouselCardItem}
        />

        <View
          style={{
            backgroundColor: colors.color2,
            padding: 35,
            flex: 1,
            marginTop: -380,
            borderTopLeftRadius: 55,
            borderTopRightRadius: 55,
          }}
        >
          <Text numberOfLines={2} style={{ fontSize: 25 }}>
            {name}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "900" }}>${price}</Text>
          <Text
            numberOfLines={8}
            style={{ letterSpacing: 1, lineHeight: 20, marginVertical: 15 }}
          >
            {description}
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ color: colors.color3, fontWeight: "100" }}>
              Quantity
            </Text>
            <View
              style={{
                width: 80,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable onPress={decreaseQty}>
                <Avatar.Icon
                  icon={"minus"}
                  size={20}
                  style={{
                    borderRadius: 5,
                    backgroundColor: colors.color5,
                    height: 25,
                    width: 25,
                  }}
                />
              </Pressable>
              <Text
                style={{
                  backgroundColor: colors.color4,
                  height: 25,
                  width: 25,
                  textAlign: "center",
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: colors.color5,
                }}
              >
                {quantity}
              </Text>
              <Pressable onPress={increaseQty}>
                <Avatar.Icon
                  icon={"plus"}
                  size={20}
                  style={{
                    borderRadius: 5,
                    backgroundColor: colors.color5,
                    height: 25,
                    width: 25,
                  }}
                />
              </Pressable>
            </View>
          </View>

          {/* Add To Cart Button */}
          <Pressable onPress={addToCartHandler}>
            <Button icon={"cart"} style={styles.btn} textColor={colors.color2}>
              Add To Cart
            </Button>
          </Pressable>
        </View>
      </View>
</>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    marginVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    height: 280,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});

export const iconOptions = {
  size: 20,
  style: {
    backgroundColor: colors.color5,
    borderRadius: 5,
    height: 25,
    width: 25,
  },
};

export default ProductDetails;
