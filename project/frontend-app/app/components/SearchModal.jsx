import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { Headline, Searchbar } from "react-native-paper";

const SearchModal = ({
  searchQuery,
  setSearchQuery,
  setActiveSearch,
  products = [],
}) => {
  const navigation = useNavigation();

  const backAction = () => {
    setSearchQuery("");
    setActiveSearch(false);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => BackHandler.removeEventListener("hardwareBackPress");
  }, []);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        zIndex: 100,
        backgroundColor: colors.color2,
        padding: 35,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Searchbar
        placeholder="Search..."
        onChangeText={(e) => setSearchQuery(e)}
        value={searchQuery}
        style={{ marginTop: 20 }}
      />
      <ScrollView>
        <View style={{ paddingVertical: 40, paddingHorizontal: 10 }}>
          {products.map((item, index) => {
            console.log(item);
            return (
              <SearchItem
                key={item._id}
                imgSrc={item.images[0]?.url}
                name={item.name}
                price={item.price}
                handler={() =>
                  navigation.navigate("ProductDetails", { id: item._id })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const SearchItem = ({ price, name, imgSrc, handler }) => {
  return (
    <TouchableOpacity
      onPress={handler}
      style={{
        padding: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginVertical: 20,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Image
        source={{ uri: imgSrc }}
        resizeMode="contain"
        style={{
          width: 80,
          height: 80,
          position: "absolute",

          left: 10,
          borderTopLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />

      <View style={{ width: "80%", paddingHorizontal: 30 }}>
        <Text numberOfLines={1}>{name}</Text>
        <Headline style={{ fontWeight: "900" }}>${price}</Headline>
      </View>
    </TouchableOpacity>
  );
};

export default SearchModal;
