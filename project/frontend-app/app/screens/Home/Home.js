import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Header,
  SearchModal,
  ProductCard,
  Footer,
  Heading,
  Loader,
} from "../../components";
import { colors, defaultStyle } from "../../styles/styles";
import { Avatar, Button } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/actions/productAction";
import { useSetCategories } from "../../utils/hooks";
import Toast from "react-native-toast-message";

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { products, loading } = useSelector((state) => state.product);

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id, name, price, image, stock) => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out Of Stock",
      });
    dispatch({
      type: "addToCart",
      payload: {
        product: id,
        name,
        price,
        image,
        stock,
        quantity: 1,
      },
    });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };

  useSetCategories(setCategories, isFocused);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(getAllProducts(searchQuery, category));
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [dispatch, searchQuery, category, isFocused]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100, backgroundColor: "white" }}
      >
        {activeSearch && (
          <SearchModal
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setActiveSearch={setActiveSearch}
            products={products}
          />
        )}
        <View
          style={[
            {
              ...defaultStyle,
              flex: 1,
              backgroundColor: "white",
            },
          ]}
        >
          <View style={{ paddingHorizontal: 20 }}>
            <Header />
            {/* Heading Row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Heading */}
              <Heading text1="Our" text2="Products" />

              {/* Search Bar */}
              <TouchableOpacity
                onPress={() => setActiveSearch((prev) => !prev)}
              >
                <Avatar.Icon
                  icon={"magnify"}
                  size={50}
                  color={"gray"}
                  style={{ backgroundColor: colors.color2, elevation: 12 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {loading ? (
            <View
              style={{
                height: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader size={50} />
            </View>
          ) : (
            <>
              {/* Categories */}
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 20,
                  paddingLeft: 20,
                  backgroundColor: "white",
                }}
              >
                <ScrollView
                  horizontal
                  contentContainerStyle={{
                    alignItems: "center",
                  }}
                  showsHorizontalScrollIndicator={false}
                >
                  {categories.map((item, index) => (
                    <Button
                      key={item._id}
                      style={{
                        backgroundColor:
                          category === item._id ? colors.color1 : colors.color5,
                        borderRadius: 100,
                        margin: 5,
                      }}
                      onPress={() => categoryButtonHandler(item._id)}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: category === item._id ? colors.color2 : "gray",
                        }}
                      >
                        {item.category}
                      </Text>
                    </Button>
                  ))}
                </ScrollView>
              </View>
              {/* Products */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
              >
                {products.map((item, index) => (
                  <ProductCard
                    stock={item.stock}
                    name={item.name}
                    price={item.price}
                    image={item.images[0]?.url}
                    addToCartHandler={addToCardHandler}
                    id={item._id}
                    key={item._id}
                    i={index}
                    navigate={navigate}
                  />
                ))}
              </ScrollView>
            </>
          )}
        </View>
      </ScrollView>
      <Footer activeRoute={"home"} />
    </View>
  );
};

export default Home;
