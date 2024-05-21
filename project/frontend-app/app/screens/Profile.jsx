import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  defaultImg,
  defaultStyle,
  formHeading,
} from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import { loadUser, logout } from "../redux/actions/userActions";
// import {
//   useMessageAndErrorOther,
//   useMessageAndErrorUser,
// } from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import mime from "mime";
// import { updatePic } from "../redux/actions/otherAction";

const Profile = ({ navigation, route }) => {
  //   const { user } = useSelector((state) => state.user);
  const user = {
    email: "haha@gmail.com",
    name: "Hien Le",
    role: "admin",
  };
  const [avatar, setAvatar] = useState(defaultImg);

  //   const dispatch = useDispatch();
  const isFocused = useIsFocused();

  //   const loading = useMessageAndErrorUser(navigation, dispatch, "login");
  const loading = false;

  const logoutHandler = () => {
    // dispatch(logout());
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("AdminPanel");
        break;
      case "Orders":
        navigation.navigate("Orders");
        break;
      case "Profile":
        navigation.navigate("UpdateProfile");
        break;
      case "Password":
        navigation.navigate("ChangePassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;

      default:
        navigation.navigate("UpdateProfile");
        break;
    }
  };

  //   const loadingPic = useMessageAndErrorOther(dispatch, null, null, loadUser);
  const loadingPic = false;

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      // dispatch updatePic Here
      const myForm = new FormData();
      myForm.append("file", {
        uri: route.params.image,
        type: mime.getType(route.params.image),
        name: route.params.image.split("/").pop(),
      });
      //   dispatch(updatePic(myForm));
    }

    // dispatch(loadUser());
  }, [route.params, isFocused]); // dispatch

  //   useEffect(() => {
  //     if (user?.avatar) {
  //       setAvatar(user.avatar.url);
  //     }
  //   }, [user]);

  return (
    <>
      <View style={{ ...defaultStyle, paddingHorizontal: 35 }}>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            backgroundColor: colors.color3,
            borderRadius: 10,
          }}
        >
          <Text style={formHeading}>Profile</Text>
        </View>

        {/* Loading */}

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />

              <TouchableOpacity
                disabled={loadingPic}
                onPress={() =>
                  navigation.navigate("Camera", { updateProfile: true })
                }
              >
                <Button
                  disabled={loadingPic}
                  loading={loadingPic}
                  textColor={colors.color1}
                >
                  Change Photo
                </Button>
              </TouchableOpacity>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Orders"}
                  icon={"format-list-bulleted-square"}
                />
                {user?.role === "admin" && (
                  <ButtonBox
                    handler={navigateHandler}
                    icon={"view-dashboard"}
                    text={"Admin"}
                    reverse
                  />
                )}
                <ButtonBox
                  handler={navigateHandler}
                  text={"Profile"}
                  icon={"pencil"}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Password"}
                  icon={"pencil"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Sign Out"}
                  icon={"exit-to-app"}
                />
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
