import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../styles/styles";
import * as ImagePicker from "expo-image-picker";

const CameraType = "front" | "back";

const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  //   const [camera, setCamera] = useState(null);
  const camera = useRef();

  const [permission, requestPermission] = useCameraPermissions();

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission to access gallery is required");

    const data = await ImagePicker.launchImageLibraryAsync();

    if (route.params?.newProduct)
      return navigation.navigate("NewProduct", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateProduct)
      return navigation.navigate("ProductImages", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("Profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("SignUp", {
        image: data.assets[0].uri,
      });
  };

  const clickPicture = async () => {
    try {
      const data = await camera.current.takePictureAsync();

      if (route.params?.newProduct)
        return navigation.navigate("NewProduct", {
          image: data.uri,
        });

      if (route.params?.updateProduct)
        return navigation.navigate("ProductImages", {
          image: data.uri,
        });
      if (route.params?.updateProfile)
        return navigation.navigate("Profile", {
          image: data.uri,
        });
      else
        return navigation.navigate("SignUp", {
          image: data.uri,
        });
    } catch (e) {
      console.log(e, "====================e");
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await requestPermission();
      setHasPermission(status === "granted");
    })();
  }, [requestPermission]);

  if (hasPermission === null) return <View />;

  if (hasPermission === false)
    return (
      <View style={defaultStyle}>
        <Text>No access to camera</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CameraView
        type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
          backgroundColor: "white",
        }}
        ratio={"1:1"}
        ref={(e) => (camera.current = e)}
      />

      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity
    style={{
      backgroundColor: colors.color1,
      padding: 5,
      borderRadius: 30,
    }}
    onPress={handler}
  >
    <Avatar.Icon
      icon={icon}
      size={40}
      color={colors.color2}
      backgroundColor="transparent"
    />
  </TouchableOpacity>
);

export default CameraComponent;
