import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ButtonBox from "../components/ButtonBox";
import { ProductListHeading, ProductListItem } from "../components/ProductList";
import Chart from "../components/Chart";

import { useAdminProducts, useMessageAndErrorOther } from "../utils/hooks";
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import { deleteProduct } from "../../redux/actions/otherAction";
import { getAdminProducts } from "../../redux/actions/productAction";

const AdminPanel = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { loading, products, inStock, outOfStock } = useAdminProducts(
    dispatch,
    isFocused
  );

  const navigationHandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("Categories");
        break;
      case "All Orders":
        navigation.navigate("AdminOrders");
        break;
      case "Product":
        navigation.navigate("NewProduct");
        break;

      default:
        navigation.navigate("AdminUsers");
        break;
    }
  };

  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

  const loadingDelete = useMessageAndErrorOther(
    dispatch,
    null,
    null,
    getAdminProducts
  );

  return (
    <ScrollView
      style={{ ...defaultStyle, paddingHorizontal: 20 }}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <Header back={true} />
      {/* Heading */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ ...formHeading, backgroundColor: colors.color3 }}>
          Admin Panel
        </Text>
      </View>

      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Loader size={30} />
        </View>
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color3,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Chart inStock={inStock} outOfStock={outOfStock} />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                icon={"plus"}
                text={"Product"}
                handler={navigationHandler}
                size={70}
              />
              <ButtonBox
                icon={"folder"}
                text={"Category"}
                handler={navigationHandler}
                reverse
                size={70}
              />
              <ButtonBox
                icon={"format-list-bulleted-square"}
                text={"All Orders"}
                handler={navigationHandler}
                size={70}
              />
              <ButtonBox
                icon={"account"}
                text={"Users"}
                handler={navigationHandler}
                reverse
                size={70}
              />
            </View>
          </View>

          <ProductListHeading />

          <View>
            {!loadingDelete &&
              products.map((item, index) => (
                <ProductListItem
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.price}
                  stock={item.stock}
                  name={item.name}
                  category={item.category?.category}
                  imgSrc={item.images[0].url}
                />
              ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default AdminPanel;
