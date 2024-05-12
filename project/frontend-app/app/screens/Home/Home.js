import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import { colors, defaultStyle } from "../../styles/styles";
import { Avatar } from "react-native-paper";

const Home = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  return (
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
        <TouchableOpacity>
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
    </View>
  );
};

export default Home;
