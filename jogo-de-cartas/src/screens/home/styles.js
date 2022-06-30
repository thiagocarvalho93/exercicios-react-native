import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    flex: 1,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    position: "absolute",
    color: "white",
    marginTop: "15%",
    zIndex: 1,
  },
  header: {
    justifyContent: "flex-start",
    alignItems: "baseline",
  },
  text: { color: "white" },
});
