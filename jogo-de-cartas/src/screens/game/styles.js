import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  menuContainer: {
    flex: 3,
    borderWidth: 2,
    padding: 20,
    flexDirection: "row",
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
  gameStatus: {
    width: "100%",
    backgroundColor: "#AD0600",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  hands: {
    flex: 1,
    alignItems: "center",
  },
  hand: {
    flexDirection: "row",
    justifyContent: "center",
  },
  menu: {
    flex: 1,
    borderWidth: 2,
    padding: 20,
  },
  text: {
    color: "white",
  },
});
