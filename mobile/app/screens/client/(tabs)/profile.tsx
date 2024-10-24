import { Text, View, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Text style={styles.subtitle}>Bem-vindo(a), cliente!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: "FeatherBold",
    color: "#7400B8",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "FeatherBold",
    color: "#48BFE3",
  },
});
