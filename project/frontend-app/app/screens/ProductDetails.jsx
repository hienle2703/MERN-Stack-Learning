import { View, Image, StyleSheet, Dimensions } from "react-native";
import React, { useRef } from "react";
import { Header } from "../components";
import { useRoute } from "@react-navigation/native";
import { Carousel } from "react-native-snap-carousel";
import { colors, defaultStyle } from "../styles/styles";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const images = [
  {
    id: "1231239",
    url: "https://pngimg.com/uploads/macbook/macbook_PNG9.png",
  },
  {
    id: "128939124",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9SPuemaI_vXC7A6DyTWDdu0UrSPKhp9RS885gctNxdsfjLawjZmTKM1v4UlWdOiNs_c&usqp=CAU",
  },
];

const ProductDetails = () => {
  const route = useRoute();

  const isCarousel = useRef();

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
          layout={"stack"}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          ref={isCarousel}
          data={images}
          renderItem={CarouselCardItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    height: 250,
  },
});

export default ProductDetails;
