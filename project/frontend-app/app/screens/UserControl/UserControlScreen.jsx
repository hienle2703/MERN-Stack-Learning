import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useIsFocused } from "@react-navigation/native";

import { useAdminUsers } from "../../utils/hooks";
import { Header, Loader } from "../../components";
import { defaultStyle, colors, formHeading } from "../../styles/styles";
import { Headline, Icon } from "react-native-paper";
import { useDispatch } from "react-redux";
import { styles } from "./style/UserControlScreenStyles";

const UserControlScreen = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { loading, users, handleDeleteUser } = useAdminUsers(
    dispatch,
    isFocused
  );

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color2,
        paddingHorizontal: 20,
      }}
    >
      <Header back={true} />

      <View
        style={{
          marginVertical: 20,
          backgroundColor: colors.color3,
          borderRadius: 10,
        }}
      >
        <Text style={formHeading}>Users</Text>
      </View>

      {loading ? (
        <Loader size={30} />
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {users?.length > 0 ? (
              users.map((item, index) => (
                <View key={`${index} user index`} style={styles.userCard}>
                  <Image
                    src={item.avatar.url ?? ""}
                    style={styles.userAvatar}
                  />
                  <View style={styles.userInfoRow}>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.userEmail}>{item.email}</Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.deleteBtn}
                      onPress={handleDeleteUser(item._id)}
                    >
                      <Icon source={"trash-can-outline"} size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default UserControlScreen;
