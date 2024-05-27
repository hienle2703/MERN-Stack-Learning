import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
} from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button, TextInput } from "react-native-paper";
// import { useMessageAndErrorOther, useSetCategories } from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
// import { useDispatch } from "react-redux";
// import { addCategory, deleteCategory } from "../../redux/actions/otherAction";

const categories = [
  { category: "Laptop", _id: "ihqoihdoqiwhd" },
  { category: "Cat", _id: "wdwdwdwd" },
  { category: "Tarot", _id: "asasasasas" },
  { category: "Oracle", _id: "qweqweqweqwe" },
];

const Categories = ({ navigation }) => {
  const [category, setCategory] = useState("");
  //   const [categories, setCategories] = useState([]);

  const isFocused = useIsFocused();
  //   const dispatch = useDispatch();

  //   useSetCategories(setCategories, isFocused);

  //   const loading = useMessageAndErrorOther(dispatch, navigation, "adminpanel");
  const loading = false;

  const deleteHandler = (id) => {
    // dispatch(deleteCategory(id));
  };

  const submitHandler = () => {
    // dispatch(addCategory(category));
  };

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
        paddingHorizontal: 35,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, backgroundColor: colors.color3 }}>
        <Text style={formHeading}>Categories</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}
        >
          {categories.map((i) => (
            <CategoryCard
              name={i.category}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Category"
          value={category}
          onChangeText={setCategory}
        />

        <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color1,
            margin: 20,
            padding: 6,
          }}
          loading={loading}
          disabled={!category}
          onPress={submitHandler}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const CategoryCard = ({ name, id, deleteHandler }) => (
  <View style={styles.cardContainer}>
    <Text>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{
          backgroundColor: colors.color1,
        }}
      />
    </TouchableOpacity>
  </View>
);

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.color3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  cardContainer: {
    backgroundColor: colors.color2,

    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardText: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
    color: colors.color3,
  },
});
