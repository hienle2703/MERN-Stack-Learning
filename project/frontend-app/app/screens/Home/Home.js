import { View, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import React, { useState } from "react";
import { Header, SearchModal, ProductCard, Footer } from "../../components";
import { colors, defaultStyle } from "../../styles/styles";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    _id: "91280918230",
    category: "Nice",
  },
  {
    _id: "901280198209",
    category: "Nice2",
  },
  {
    i_idd: "9128309283098",
    category: "Nice3",
  },
  {
    _id: "912809230",
    category: "Nice4",
  },
  {
    _id: "9012801209",
    category: "Nice5",
  },
  {
    i_idd: "91283083098",
    category: "Nice6",
  },
];

const products = [
  {
    name: "Product 1",
    images: [
      {
        url: "https://www.pngall.com/wp-content/uploads/12/Macbook-PNG-Image-File.png",
      },
    ],
    price: 100,
    _id: "iuoiufoiauef",
  },
  {
    name: "Product 2",
    images: [
      {
        url: "https://www.pngall.com/wp-content/uploads/12/Macbook-PNG-Image-File.png",
      },
    ],
    price: 200,
    _id: "123123123",
  },
];

const Home = () => {
  const navigate = useNavigation();
  const [category, setCategory] = useState("");
  // const [categories, setCategories] = useState([]);
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const categoryButtonHandler = (id) => () => {
    setCategory(id);
  };

  const addToCartHandler = (id) => () => {
    console.log("Add to cart clicked", id);
  };

  return (
    <>
      <View style={{ ...defaultStyle, flex: 1 }}>
        <Header />
        <View
          style={{
            flexDirection: "row",
            paddingTop: 70,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 25 }}>Our</Text>
            <Text style={{ fontSize: 25, fontWeight: "900" }}>Products</Text>
          </View>
          <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{
                backgroundColor: colors.color2,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* Categories */}

        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item._id}
                  style={{
                    backgroundColor:
                      category === item._id ? colors.color1 : colors.color5,
                    borderRadius: 100,
                    margin: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                  }}
                  onPress={categoryButtonHandler(item._id)}
                >
                  <Text
                    style={{
                      color: category === item._id ? colors.color2 : "gray",
                      fontSize: 12,
                    }}
                  >
                    {item.category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* Products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCartHandler={addToCartHandler(item._id)}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
