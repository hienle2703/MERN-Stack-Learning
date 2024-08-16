import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../../styles/styles";
import MyModal from "../MyModal";

const ProductListItem = ({
  navigate,
  deleteHandler,
  i,
  id,
  price,
  stock,
  name,
  category,
  imgSrc,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setOpenModal((prev) => !prev)}
        onPress={() => navigate.navigate("ProductDetails", { id })}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <View style={{ width: "20%" }}>
            <Image
              source={{
                uri: imgSrc,
              }}
              style={{
                width: 40,
                height: 40,
                resizeMode: "contain",
              }}
            />
          </View>

          <Text style={styles.text} numberOfLines={1}>
            ${price}
          </Text>

          <Text style={[styles.text, { width: "25%" }]} numberOfLines={1}>
            {name}
          </Text>

          <Text style={styles.text} numberOfLines={1}>
            {category}
          </Text>

          <Text style={[styles.text, { width: "15%" }]} numberOfLines={1}>
            {stock}
          </Text>
        </View>
      </TouchableOpacity>

      {openModal && (
        <MyModal
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigate}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    width: "20%",
    color: colors.color2,
  },
});

export default ProductListItem;
