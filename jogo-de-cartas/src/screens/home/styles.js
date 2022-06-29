import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    flex: 1,
    fontSize: 36,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    position: "absolute",
    color: "white",
    marginTop: "15%",
    zIndex: 1,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  button: {
    marginTop: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#6B0400",
    borderColor: "#AD0600",
    borderRadius: 10,
    borderWidth: 1,
  },
});
