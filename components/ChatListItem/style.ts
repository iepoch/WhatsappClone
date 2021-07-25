import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  lastMessage: {
    // marginTop: 3,
    fontSize: 16,
    color: "grey",
  },
  midContianer: {
    justifyContent: "space-around",
  },
  time: {
    fontSize: 16,
    color: "grey",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 50,
  },
});
export default styles;
