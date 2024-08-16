import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userCard: {
    width: "100%",
    backgroundColor: "#efefef",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,

    flexDirection: "row",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#424242",
  },
  userAvatar: {
    width: "15%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  userEmail: {
    fontSize: 12,
    color: "#939393",
  },
  userInfoRow: {
    marginLeft: 10,
    width: "70%",
    justifyContent: "center",
  },
  deleteBtn: {
    alignSelf: "flex-end",
  },
  deleteIcon: {
    height: 50,
    width: 50,
  },
  buttonContainer: {
    width: "15%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
});
