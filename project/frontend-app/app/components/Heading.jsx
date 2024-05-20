import { View, Text } from "react-native";

const Heading = ({ text1 = "Our", text2 = "Products", containerStyle }) => {
  return (
    <View style={{ ...containerStyle }}>
      <Text style={{ fontSize: 25 }}>{text1}</Text>
      <Text style={{ fontSize: 25, fontWeight: "900" }}>{text2}</Text>
    </View>
  );
};

export default Heading;
