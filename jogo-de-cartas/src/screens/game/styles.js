import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  table: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "green",
    borderWidth: 2,
    width: "100%",
    padding: 10,
  },
  menu: {
    flex: 3,
    borderWidth: 2,
    padding: 20,
  },
  text: {
    color: "white",
  },
});
