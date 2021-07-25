import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    marginRight: 50,
    borderRadius: 5,
    padding: 10,
  },
  username: {
    fontWeight: "bold",
    color: Colors.light.tint,
    marginBottom: 5,
  },
  message: {},
  time: {
    fontSize: 12,
    color: "grey",
    alignSelf: "flex-end",
  },
});
export default styles;
