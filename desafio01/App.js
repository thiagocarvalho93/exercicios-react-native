import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      {/* primeira metade */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.topo} />

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View style={styles.quadrado} />
          <View style={styles.retanguloLaranja} />
        </View>

        <View
          style={{
            height: 78,
            flexDirection: "row",
          }}
        >
          <View style={styles.retanguloRoxo} />
          <View style={styles.retanguloAzul} />
        </View>
      </View>

      {/* segunda metade */}
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.separador} />
        {/* quadrados */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "space-around",
            justifyContent: "space-around",
          }}
        >
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
          <View style={styles.quadrado} />
        </View>
        <View style={styles.inferior} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    height: 25,
    backgroundColor: "#50E3C2",
  },
  quadrado: {
    backgroundColor: "#F5A623",
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  retanguloLaranja: {
    backgroundColor: "#F5A623",
    width: 150,
    height: 30,
    alignSelf: "center",
  },
  retanguloRoxo: {
    backgroundColor: "#9013FE",
    flex: 1,
  },
  retanguloAzul: {
    backgroundColor: "#4A90E2",
    flex: 1,
  },
  separador: {
    height: 13,
    backgroundColor: "#50E3C2",
  },
  inferior: {
    backgroundColor: "#4A90E2",
    height: 60,
  },
});
