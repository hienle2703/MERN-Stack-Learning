import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";
// import { useGetOrders } from "../utils/hooks";
// import { useIsFocused } from "@react-navigation/native";

const orders = [
  {
    _id: "1",
    shippingInfo: {
      address: "121 Tran Hung Dao",
      city: "HCM",
      country: "Vietnam",
      pinCode: 2032020,
    },
    createdAt: "2021-04-01T00:00:00.000Z",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "2",
    shippingInfo: {
      address: "2819 esast",
      city: "HCM",
      country: "Vietnam",
      pinCode: 2032020,
    },
    createdAt: "2021-04-01T00:00:00.000Z",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 25000,
  },
];
const Orders = () => {
  //   const isFocused = useIsFocused();
  //   const { loading, orders } = useGetOrders(isFocused);
  const loading = false;

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
      <View
        style={{
          marginBottom: 10,
          backgroundColor: colors.color3,
          borderRadius: 10,
        }}
      >
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => {
                return (
                  <OrderItem
                    key={item?._id}
                    id={item?._id}
                    i={index}
                    price={item?.totalAmount}
                    status={item?.orderStatus}
                    paymentMethod={item?.paymentMethod}
                    orderedOn={item?.createdAt?.split("T")?.[0]}
                    address={`${item?.shippingInfo?.address}, ${item?.shippingInfo?.city}, ${item?.shippingInfo?.country} ${item?.shippingInfo?.pinCode}`}
                  />
                );
              })
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
