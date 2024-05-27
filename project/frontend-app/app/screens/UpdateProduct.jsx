import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Header, Loader, SelectComponent } from "../components";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
// import { useMessageAndErrorOther, useSetCategories } from "../../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
// import { useDispatch, useSelector } from "react-redux";
// import { getProductDetails } from "../../redux/actions/productAction";
// import { updateProduct } from "../../redux/actions/otherAction";

const UpdateProduct = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  //   const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  //   const { product, loading } = useSelector((state) => state.product);
  const loading = false;

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "hdadhiawd", category: "Laptop" },
    { _id: "wdwdwdwd", category: "Cat" },
    { _id: "asasasasas", category: "Tarot" },
    { _id: "qweqweqweqwe", category: "Oracle" },
  ]);

  //   useSetCategories(setCategories, isFocused);

  const submitHandler = () => {
    // dispatch(updateProduct(id, name, description, price, stock, categoryID));
  };

  //   const loadingOther = useMessageAndErrorOther(
  //     dispatch,
  //     navigation,
  //     "adminpanel"
  //   );
  const loadingOther = false;

  //   useEffect(() => {
  //     dispatch(getProductDetails(id));
  //   }, [dispatch, id, isFocused]);

  //   useEffect(() => {
  //     if (product) {
  //       setName(product.name);
  //       setDescription(product.description);
  //       setPrice(String(product.price));
  //       setStock(String(product.stock));
  //       setCategory(product.category?.category);
  //       setCategoryID(product.category?._id);
  //     }
  //   }, [product]);

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
          paddingHorizontal: 20,
        }}
      >
        <Header back={true} />

        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            backgroundColor: colors.color3,
            borderRadius: 10,
          }}
        >
          <Text style={formHeading}>Update Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                height: 650,
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("ProductImages", {
                    id,
                    images: [],
                  })
                }
                textColor={colors.color1}
              >
                Manage Images
              </Button>

              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />

              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                value={stock}
                keyboardType="number-pad"
                onChangeText={setStock}
              />

              <TouchableOpacity
                style={{
                  borderRadius: 3,
                  height: 50,
                  marginBottom: 10,
                  justifyContent: "center",
                  marginHorizontal: 20,
                  backgroundColor: colors.color2,
                  marginTop: 10,
                }}
                onPress={() => setVisible(true)}
              >
                <Text
                  style={{
                    textAlignVertical: "center",
                    backgroundColor: colors.color2,
                    marginVertical: 10,
                    marginHorizontal: 20,
                  }}
                  color={colors.color3}
                >
                  {category.length > 0 ? category : "Select Category"}
                </Text>
              </TouchableOpacity>

              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loadingOther}
                disabled={loadingOther}
              >
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default UpdateProduct;
